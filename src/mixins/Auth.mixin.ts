import { defineComponent } from "@vue/runtime-core";
import store from "../state/index";
import {checkSessionExists} from "@jackcom/reachduck";
import {reconnectWallet, connectWallet, useReach} from "../reach";
import {useIndexerClient} from "@jackcom/reachduck/lib/networks/ALGO.indexer";
import {get, post} from "../api.js"
import {loadStdlib} from "@reach-sh/stdlib";
import StoreMixin from "./Store.mixin";
import {Algodv2} from "algosdk";

const AuthMixin = defineComponent({

  mixins: [StoreMixin],

  data(): any {
    return {
      store: {
        connected: false, connecting: false, disconnecting: false,
        account: null, address: "", assets: [],
        algodClient: null,
      },
      txns: [],
      algodClient: <Algodv2|null> null,
    };
  },

  mounted() {
    const storeKeys = Object.keys(this.store)
    this.subscribe(storeKeys)
  },

  methods: {

    /**
     * Initialize wallet globally from anywhere. Updates to initializing local
     * stores should make this work perfectly (I think). :thumbs-up:
     */
    initWallet(): Promise<any>|void {
      // check for existing session
      const { exists, addr } = checkSessionExists()
      if (!exists || addr === null) return
      store.connecting(true)
      reconnectWallet(addr).then(async (/*res*/) => {
        const isAuthed = await this.userIsAuthenticated(this.store.address)
        await Promise.all([
          await this.initWalletStuff(),
          isAuthed ? await null : await this.authForApi()
        ])
        store.connecting(false)
      }).catch(err => {console.log(err); alert('Error reconnecting wallet, check console')})
      console.log('finished initWallet')
    },

    async connectTo(provider: string) {
      store.connecting(true)
      await connectWallet(provider).then(async () => {
        const isAuthed = await this.userIsAuthenticated(this.store.address)
        await Promise.all([
            await this.initWalletStuff(),
            isAuthed ? await null : await this.authForApi()
        ])
      }).catch((err: any) => {alert(err)})
      store.connecting(false)
      console.log('finished connectTo')
    },

    async authForApi() {
      console.log(`removing funJwt: ${localStorage.getItem('funJwt')} and funAuthWallet: ${localStorage.getItem('funAuthWallet')}`)
      localStorage.removeItem('funJwt')
      localStorage.removeItem('funAuthWallet')
      try {
        let challenge = ''
        await get(`auth/request-challenge/${this.store.address}`)
            .then(async res => { challenge = res.challenge })
            .catch(err => {console.log(err);alert('Problem requesting auth challenge, check console.')})

        /** Directly use stdlib here bc reachduck doesn't expose note opt yet */
        const reach = loadStdlib()

        // const opts = {
        //   decimals: 0,
        //   supply: 1000000000,
        //   url: 'https://fungibl.algo.xyz',
        //   clawback: 'VNDWDGQYUBUDSS6R24JPQOUYHBUOKXD6JOFUSAWEHWQEZDS2BUFE5OASZY',
        //   freeze: 'VNDWDGQYUBUDSS6R24JPQOUYHBUOKXD6JOFUSAWEHWQEZDS2BUFE5OASZY',
        //   reserve: 'D7277RRGZ6PJZ2WA4BTWJGZ43BGCSTAKZ4ZUBVWNFELJTYAPHKVD2IURDQ',
        //   note: this.str2arr('Creating the $FUN token for Fungibl App on the Algorand Testnet Network'),
        // }
        // const tokenResponse = await reach.launchToken(this.store.account, 'FUN', 'FUN', opts)
        // console.log(tokenResponse)

        reach.setSigningMonitor(async (evt, pre, post) =>
            this.txns.push({evt, pre: await pre, post: await post}))
        await reach.transfer(this.store.account, this.store.account, 0, null, {note: this.str2arr(challenge)})
        do {
          await this.sleep(100)
        } while (this.txns.length === 0)
        const reachTxn = this.txns[0].evt[0].txn
        const accountTxns = await useIndexerClient()
            .lookupAccountTransactions(this.store.address).limit(1).do()
        const txn = accountTxns.transactions[0]
        txn.txn = reachTxn
        post('auth/login', {
          algorand_address: this.store.address, signed_tx: JSON.stringify(txn)
        }).then((res) => {
          console.log(`setting funJwt: ${res.access_token}`)
          localStorage.setItem('funJwt', res.access_token)
          console.log(`setting funAuthWallet: ${this.store.address}`)
          localStorage.setItem('funAuthWallet', this.store.address)
        }).catch(err => {
          alert('Issue with login transaction. You were not logged in to the API.')
        })
      } catch (err) {
        console.log(err)
        alert(`Failed to sign authentication challenge transaction: ${JSON.stringify(err.message)}`)
      }
      console.log('Finished auth')
    },

    async userIsAuthenticated(address: string): Promise<boolean> {
      let authWorks = false
      await get('whoami')
          .then(res => authWorks = !!res.id)
          .catch(err => authWorks = false)
      const connectedUserIsAuthedUser =
          localStorage.getItem('funAuthWallet') === address
      return authWorks && connectedUserIsAuthedUser
    },

  },
});

export default AuthMixin;

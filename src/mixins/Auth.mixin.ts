import { defineComponent } from "@vue/runtime-core";
import store from "../state/index";
import {checkSessionExists, disconnectUser} from "@jackcom/reachduck";
import {reconnectWallet, connectWallet} from "../reach";
import {useIndexerClient} from "@jackcom/reachduck/lib/networks/ALGO.indexer";
import {get, post} from "../api.js"
import {loadStdlib} from "@reach-sh/stdlib";
import StoreMixin from "./Store.mixin";

const AuthMixin = defineComponent({

  mixins: [StoreMixin],

  data(): any {
    return {
      txns: [],
    };
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
        const isAuthed = await this.userIsAuthenticated(this.getState('address'))
        await Promise.all([
          await this.initWalletStuff(),
          isAuthed ? await this.postAuthInit()
              : await this.authForApi()
                  .then(async () => await this.postAuthInit())
                  .catch((err: any) => {
                    this.oop(err, 'Auth failed, disconnecting wallet')
                    disconnectUser()
                  })
        ])
        store.connecting(false)
      }).catch(err => this.oop(err, 'Error re-connecting wallet'))
      console.log('finished initWallet')
    },

    async connectTo(provider: string) {
      store.connecting(true)
      await connectWallet(provider).then(async () => {
        const isAuthed = await this.userIsAuthenticated(this.getState('address'))
        await Promise.all([
            await this.initWalletStuff(),
            isAuthed ? await this.postAuthInit()
                : await this.authForApi()
                    .then(async () => await this.postAuthInit())
                    .catch((err: any) => {
                      this.postAuthInit()
                      // this.oop(err, 'Auth failed, disconnecting wallet')
                      // disconnectUser()
                    })
        ])
      }).catch(err => this.oop(err, 'Error connecting wallet'))
      store.connecting(false)
      console.log('finished connectTo')
    },

    async authForApi() {
      console.log(`removing funJwt: ${localStorage.getItem('funJwt')} and funAuthWallet: ${localStorage.getItem('funAuthWallet')}`)
      localStorage.removeItem('funJwt')
      localStorage.removeItem('funAuthWallet')
      try {
        let challenge = ''
        await get(`auth/request-challenge/${this.getState('address')}`)
            .then(async res => { challenge = res.challenge })
            .catch(err => this.oop(err, 'Problem requesting auth challenge'))

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
        // const tokenResponse = await reach.launchToken(this.getState('account'), 'FUN', 'FUN', opts)
        // console.log(tokenResponse)

        reach.setSigningMonitor(async (evt, pre, post) =>
            this.txns.push({evt, pre: await pre, post: await post}))
        await reach.transfer(this.getState('account'), this.getState('account'), 0, null, {note: this.str2arr(challenge)})
        do {
          await this.sleep(100)
        } while (this.txns.length === 0)
        const reachTxn = this.txns[0].evt[0].txn
        const accountTxns = await useIndexerClient()
            .lookupAccountTransactions(this.getState('address')).limit(1).do()
        const txn = accountTxns.transactions[0]
        txn.txn = reachTxn
        await post('auth/login', {
          algorand_address: this.getState('address'), signed_tx: JSON.stringify(txn)
        }).then((res) => {
          localStorage.setItem('funJwt', res.access_token)
          localStorage.setItem('funAuthWallet', this.getState('address'))
          store.authConfirmed(true)
        }).catch(err => this.oop(err, 'Call to API login failed'))
      } catch (err) { this.oop(err, 'ALGO wallet auth transaction failed') }
      console.log('Finished auth')
    },

    async userIsAuthenticated(address: string): Promise<boolean> {
      let authWorks = false
      await get('whoami')
          .then(res => authWorks = !!res.id)
          .catch((/*err*/) => { return null })
      const connectedUserIsAuthedUser =
          localStorage.getItem('funAuthWallet') === address
      store.authConfirmed(authWorks)
      return authWorks && connectedUserIsAuthedUser
    },

    async postAuthInit(): Promise<any> {
      const needsNftSync = this.getState('needsPostAuthNftSync')
      // it may not resolve but at this point we stop trying
      store.needsPostAuthNftSync(false)
      Promise.all([
        await this.getPoolMetas(false),
        needsNftSync ? await this.syncNftsToBackend() : null
      ]).then(() => console.log('Finished postAuthInit'))
          .catch(err => this.oop(err, err.message))
    },

  },
});

export default AuthMixin;

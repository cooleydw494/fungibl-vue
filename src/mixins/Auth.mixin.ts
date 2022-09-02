import { defineComponent } from "@vue/runtime-core";
import store from "../state/index";
import {checkSessionExists} from "@jackcom/reachduck";
import {reconnectWallet, connectWallet, useReach} from "../reach";
import {useIndexerClient} from "@jackcom/reachduck/lib/networks/ALGO.indexer";
import {getAlgodClient} from "../algod";
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
      reconnectWallet(addr).then(async (res) => {
        const isAuthed = await this.userIsAuthenticated(this.store.address)
        const actions = isAuthed
            ? [await this.initWalletStuff()]
            : [await this.initWalletStuff(), await this.authForApi()]
        await Promise.all(actions)
        store.connecting(false)
      }).catch(err => {console.log(err); alert('Error reconnecting wallet, check console')})
    },

    async connectTo(provider: string) {
      store.connecting(true)
      await connectWallet(provider).then(async () => {
        const isAuthed = await this.userIsAuthenticated(this.store.address)
        const actions = isAuthed
            ? [await this.initWalletStuff()]
            : [await this.initWalletStuff(), await this.authForApi()]
        await Promise.all(actions)
      }).catch((err: any) => {alert(err)})
      store.connecting(false)
    },

    async initWalletStuff(): Promise<any> {
      Promise.all([
        await this.getAssets(),
        // more setup
      ]).then(() => console.log('Finished initWalletStuff'))
          .catch(err => {console.log(err); alert(err.message)})
    },

    async getAssets(): Promise<any> {
      try {
        let nextToken = ''
        let moreResults = true
        const limit = 5
        do {
          const assetsRes = await useIndexerClient()
              .lookupAccountAssets(this.store.address)
              .limit(limit).nextToken(nextToken).do()
          // @ts-ignore
          store.assets([...this.store.assets, ...assetsRes.assets])
          nextToken = assetsRes['next-token']
          moreResults = assetsRes.assets.length === limit
        } while (moreResults)
        store.assets(this.store.assets.filter((asset: {[k: string]: any}) => {
          return asset.amount > 0 && !asset['is-frozen'] && !asset.deleted
        }))
        const algod = await this.getAlgodClient()
        store.assets(await Promise.all(this.store.assets.map(async (asset: {[k: string]: any}) => {
          const assetInfo = await algod.getAssetByID(asset['asset-id']).do()
          const imageUrl = assetInfo.params.url.indexOf('https://') > -1
              ? assetInfo.params.url
              : assetInfo.params.url.replace('ipfs://', 'https://ipfs.io/ipfs/')
          const label = `${assetInfo.params.name} - ${assetInfo.params['unit-name']}`
          return {...asset, ...assetInfo, imageUrl, label}
        })))
        // @ts-ignore
        store.nfts(
            await Promise.all(this.store.assets.filter(
                (asset: {[k: string]: any}) => {return asset.amount === 1}))
        )
        await this.getFunUserInfo()
        const appFunInfo = await algod.accountAssetInformation(this.FUNGIBL_APP_WALLET, this.FUN_ASSET_ID).do()
        store.appFunBalance(appFunInfo['asset-holding'].amount)
      } catch (err) {
        console.log(err)
        alert('There was an error getting assets, check console')
      }
      console.log('Finished fetching all assets')
      const logAssets = await Promise.all(this.store.assets)
      console.log(logAssets)
    },

    async authForApi() {
      localStorage.removeItem('funJwt')
      localStorage.removeItem('funAuthWallet')
      try {
        let challenge = ''
        await get(`auth/request-challenge/${this.store.address}`)
            .then(async res => { challenge = res.challenge })
            .catch(err => {console.log(err);alert('Problem requesting auth challenge, check console.')})

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
          if (res.ok)
          localStorage.setItem('funJwt', res.access_token)
          localStorage.setItem('funAuthWallet', this.store.address)
        }).catch(err => {
          alert('Issue with login transaction. You were not logged in to the API.')
        })
      } catch (err) {
        console.log(err)
        alert(`Failed to sign authentication challenge transaction: ${JSON.stringify(err.message)}`)
      }
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

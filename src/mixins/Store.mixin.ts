import { defineComponent } from "@vue/runtime-core"
import store from "../state/index"
import {get, post} from "../api"
import {Algodv2} from "algosdk"
import {getAlgodClient} from "../algod"
import {useIndexerClient} from "@jackcom/reachduck/lib/networks/ALGO.indexer"

const StoreMixin = defineComponent({
  data(): any {
    return {
      /** Components should override this */
      store: { /** */ },
      /** This will become an "unsubscribe" function when the component mounts */
      unsubscribeStore: null,

      /** Global Constants */
      FUN_ASSET_ID: 107453082,
      FUNGIBL_APP_WALLET: 'D7277RRGZ6PJZ2WA4BTWJGZ43BGCSTAKZ4ZUBVWNFELJTYAPHKVD2IURDQ',
    }
  },

  /** Unsubscribe from global state */
  beforeUnmount() {
    if (!this.unsubscribeStore) return
    this.unsubscribeStore()
  },

  methods: {
    /** Respond to updates from global store instance */
    onStoreUpdate(updates: any) {
      // "updates" is a sub-section of the updated global state. It will
      // contain some or all keys specified by the component that uses this mixin.
      this.store = { ...this.store, ...updates }
    },

    /**
     * Call this on `mount` to link your component to the global state.
     * The subscription will trigger when any property in `keys` is updated.
     * Optionally returns a keyed object to initialize local component store.
     * This can prevent lag between component mount and update, as well as
     * initialization issues on mount when the store has already been updated */
    subscribe(keys: string[], initializeLocal = false): {[k:string]: any}|void {
      // Subscription returns an "unsubscribe" function (used in unmount).
      // See docs for @jackcom/raphsducks to see how the global store works.
      this.unsubscribeStore = store.subscribeToKeys(this.onStoreUpdate, keys)
      // If initializeLocal, return initial object to set on calling component
      if (initializeLocal) {
        return this.currentLocalState(keys)
      }
    },

    /**
     * Get an object of current application state key/values for specified keys.
     */
    currentLocalState(subscribedKeys: string[]): {[k:string]: any} {
      const localState: {[k: string]: any} = {}
      const currentState: {[k: string]: any} = store.getState()
      subscribedKeys.forEach((key: string): void => {
        localState[key] = currentState[key]
      })
      return localState
    },

    /**
     * Get a specific current application state value. You have your reasons.
     */
    getState(key: string): any {
      const currentState: {[k: string]: any} = store.getState()
      return currentState[key]
    },

    setLocale(locale?: string) {
      this.$i18n.locale = locale || navigator.languages[1] // 'en','es',...
    },

    async getAlgodClient(): Promise<Algodv2> {
      if (this.getState('algodClient')) return this.getState('algodClient')
      store.algodClient(await getAlgodClient())
      return this.getState('algodClient')
    },

    async initWalletStuff(): Promise<any> {
      Promise.all([
        await this.getAssets(),
        await this.getFunUserInfo(),
        await this.getAppFunInfo(),
        await this.getPoolMetas(),
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
          // const base = 'https://gateway.pinata.cloud/ipfs/'
          const base = 'https://nftstorage.link/ipfs/'
          const assetUrl = assetInfo.params.url
          const index = assetUrl.indexOf('ipfs://') > -1 ?
              assetUrl.indexOf('ipfs://') + 7 : assetUrl.indexOf('ipfs/') + 5;
          const imageUrl = `${base}${assetUrl.substr(index)}`
          const label = `${assetInfo.params.name} - ${assetInfo.params['unit-name']}`
          return {...asset, ...assetInfo, imageUrl, label}
        })))
        store.nfts(
            await Promise.all(this.store.assets.filter(
                (asset: {[k: string]: any}) => {
                  return asset.amount === 1
                }))
        )
        this.syncNftsToBackend(this.getState('nfts'))
      } catch (err) {
        console.log(err)
        alert('There was an error getting assets/nfts, check console')
      }
      console.log('Finished fetching assets/nfts')
    },

    async syncNftsToBackend(nfts: Array<{[k:string]: any}>): Promise<any> {
      let tries = 0
      do {
        if (this.getState('authConfirmed')) {
          tries = 69
          post(`nfts/sync`, {nfts})
              .then((res) => {
                res.needs_caching.forEach((assetId: number) => {
                  this.cacheImage(assetId)
                })
              })
              .catch((err) => {
                console.log(`Err on NFT Sync`, err)
              })
        } else {
          tries++
          await this.sleep(10000)
        }
      } while (tries <= 3)
    },

    async cacheImage(assetId: number): Promise<any> {
      post(`nfts/${assetId}/cache-image`, {})
          .then((/*res*/) => {
            return null // handle post-sync if needed
          })
          .catch((err) => {
            console.log(`Err on NFT cacheImage call for ${assetId}`, err)
          })
    },

    async getFunUserInfo(): Promise<any> {
      const algod = await this.getAlgodClient()
      const address = this.getState('address')
      const funInfo = await algod.accountAssetInformation(address, this.FUN_ASSET_ID).do()
      if (funInfo['asset-holding']) {
        store.funBalance(funInfo['asset-holding'].amount)
        store.funOptedIn(true)
      } else {
        store.funBalance(`🥲`)
      }
    },

    async optInToFun(): Promise<any> {
      store.funOptingIn(true)
      try {
        const account = this.getState('account')
        await account.tokenAccept(this.FUN_ASSET_ID)
        await this.getFunUserInfo()
      } catch (err) {
        console.log(err)
        alert('Problem opting in to $FUN')
      }
      store.funOptingIn(false)
    },

    async getAppFunInfo(): Promise<any> {
      const algod = await this.getAlgodClient()
      const appFunInfo = await algod.accountAssetInformation(this.FUNGIBL_APP_WALLET, this.FUN_ASSET_ID).do()
      store.appFunBalance(appFunInfo['asset-holding'].amount)
    },

    async getPoolMetas(): Promise<any> {
      get('pool-metas')
          .then((res) => { store.poolMetas(res.pool_metas) })
          .catch((err) => {
            alert('Problem fetching pool metas')
            console.log(err)
          })
    }

  },
})

export default StoreMixin

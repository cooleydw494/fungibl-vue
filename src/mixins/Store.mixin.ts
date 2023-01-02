import { defineComponent } from "@vue/runtime-core"
import store from "../state/index"
import {get, post} from "../utilities/api"
import {Algodv2} from "algosdk"
import {getAlgodClient} from "../utilities/algod"
import {useIndexerClient} from "@jackcom/reachduck/lib/networks/ALGO.indexer"
import {parseASAUrl} from "../ipfs/nft"
import {getMetaFromIpfs} from "../ipfs/ipfs"
import * as localforage from "localforage";

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

  created() {
    const storeKeys = Object.keys(this.store)
    this.store = this.subscribe(storeKeys, true)
  },

  /** Unsubscribe from global state */
  beforeUnmount() {
    if (!this.unsubscribeStore) return
    this.unsubscribeStore()
  },

  methods: {
    /** Respond to updates from global store instance */
    onStoreUpdate(updates: any) {
      // "updates" is a subsection of the updated global state. It will
      // contain some or all keys specified by the component that uses this mixin.
      this.store = { ...this.store, ...updates }
    },

    /**
     * Call this on `mount` to link your component to the global state.
     * The subscription will trigger when any property in `keys` is updated.
     * Optionally returns a keyed object to initialize local component store.
     * This can prevent lag between component mount and update, as well as
     * initialization issues on mount when the store has already been updated */
    subscribe(keys: any[], initializeLocal = false): {[k:string]: any}|void {
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
      do {
        this.sleep(100)
      } while (!this.getState('address'))
      Promise.all([
        await this.getAssets(),
        await this.getFunUserInfo(),
        // await this.getAppFunInfo(), obsoleted because of PoolMetas
      ]).then(() => console.log('Finished initWalletStuff'))
          .catch(err => this.oop(err, err.message))
    },

    async getAssets(reset = false): Promise<any> {
      if (reset) { store.assets([]) }
      try {
        let nextToken = ''
        let moreResults = true
        const limit = 50
        do {
          const assetsRes = await useIndexerClient()
              .lookupAccountAssets(this.getState('address'))
              .limit(limit).nextToken(nextToken).do()
          // @ts-ignore
          store.assets([...this.getState('assets'), ...assetsRes.assets])
          nextToken = assetsRes['next-token']
          moreResults = assetsRes.assets.length === limit
        } while (moreResults)
        store.assets(this.getState('assets').filter((asset: {[k: string]: any}) => {
          return asset.amount > 0 && !asset['is-frozen'] && !asset.deleted
        }))
        const shallowNfts: Array<any> = await Promise.all(
            this.getState('assets').filter((asset: {[k: string]: any}) => {
              return asset.amount === 1
            }))
        const nftLookups = shallowNfts.map((nft: {[k: string]: any}) => nft['asset-id'])
        const nfts = []
        await localforage.iterate((key: string, value: string, pos: number) => {
          const intKey = parseInt(key)
          const index = nftLookups.indexOf(intKey)
          if (index > -1) {
            nfts.push(JSON.parse(value))
            nftLookups.splice(index, 1)
          } else {
            localforage.removeItem(key)
          }
        })

        let nftLookupObjs = []
        // Outside mainnet, we can't look up nft data with Asalytic
        if (process.env.NODE_ENV !== "production") {
          const algod = await this.getAlgodClient()
          nftLookupObjs = await Promise.all(nftLookups.map(async (id: number) => {
            const nftInfo = await algod.getAssetByID(id).do()
            // const base = 'https://gateway.pinata.cloud/ipfs/'
            const base = 'https://nftstorage.link/ipfs/'
            let assetUrl = nftInfo.params.url
            const isArc19 = nftInfo.params.url.includes('template-ipfs')
            const metadataUrl = parseASAUrl(assetUrl, nftInfo.params.reserve)
            const metadata =  (await getMetaFromIpfs(metadataUrl))
            console.log(' metadata', metadata)
            assetUrl = metadata['image']
            const index = assetUrl.indexOf('ipfs://') > -1 ?
                assetUrl.indexOf('ipfs://') + 7 : assetUrl.indexOf('ipfs/') + 5;
            const imageUrl = `${base}${assetUrl.substr(index)}`
            const label = `${nftInfo.params.name} - ${nftInfo.params['unit-name']}`
            return {
              asset_id: id, ...nftInfo, metadata, imageUrl, label,
              metadata_standard:(isArc19 ? 'arc19' : 'arc69'),
              mainnet_asset_id: nftInfo.properties.mainnet_asset_id || null,
              // mainnet_unit_name: nftInfo.properties.mainnet_unit_name || null,
              // mainnet_asset_name: nftInfo.properties.mainnet_asset_name || null,
            }
          }))
        } else {
          nftLookupObjs = nftLookups.map(async (id: number) => {
            return {asset_id: id,}
          })
        }

        store.nftLookups(nftLookupObjs)
        await this.syncNftsToBackend()
      } catch (err) { this.oop(err, 'There was an error getting assets/nfts')}
      console.log('Finished fetching assets/nfts')
    },

    async syncNftsToBackend(): Promise<any> {
      const nftLookups = this.getState('nftLookups')
      if (nftLookups.length === 0) return

      if (this.getState('authConfirmed')) {
        post(`nfts/sync`, {nft_lookups: nftLookups})
            .then((res) => {
              store.nfts([...this.getState('nfts'), ...res.nfts])
              res.needs_caching.forEach((assetId: number) => {
                this.cacheImage(assetId)
              })
            })
            .catch((err) => {
              this.oop(err, null, 'Err on NFT Sync')
            })
      } else { store.needsPostAuthNftSync(true) }
    },

    async cacheImage(assetId: number): Promise<any> {
      post(`nfts/${assetId}/cache-image`, {})
          .then((/*res*/) => {
            return null // handle post-sync if needed
          })
          .catch((err) => {
            this.oop(err, null, `Err on NFT cacheImage call for ${assetId}`)
          })
    },

    async getFunUserInfo(): Promise<any> {
      const algod = await this.getAlgodClient()
      const address = this.getState('address')
      try {
        const funInfo = await algod.accountAssetInformation(address, this.FUN_ASSET_ID).do()
        if (funInfo['asset-holding']) {
          store.funBalance(funInfo['asset-holding'].amount); store.funOptedIn(true)
        } else { store.funBalance(`🥲`); store.funOptedIn(false) }
      } catch (err) { store.funBalance(`🥲`); store.funOptedIn(false) }
    },

    async optInToFun(): Promise<any> {
      store.funOptingIn(true)
      try {
        const account = this.getState('account')
        await account.tokenAccept(this.FUN_ASSET_ID)
        await this.getFunUserInfo()
      } catch (err) { this.oop(err, 'Problem opting in to $FUN') }
      store.funOptingIn(false)
    },

    // async getAppFunInfo(): Promise<any> {
    //   const algod = await this.getAlgodClient()
    //   const appFunInfo = await algod.accountAssetInformation(this.FUNGIBL_APP_WALLET, this.FUN_ASSET_ID).do()
    //   store.appFunBalance(appFunInfo['asset-holding'].amount)
    // },

    async getPoolMetas(repeat = true): Promise<any> {
      get('pool-metas')
          .then((res) => { store.poolMetas(res.pool_metas) })
          .catch((err) => { this.oop(err, 'Problem fetching pool metas') })
      if (repeat) setTimeout(this.getPoolMetas, 15000)
    }

  },
})

export default StoreMixin

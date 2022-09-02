import { defineComponent } from "@vue/runtime-core";
import store from "../state/index";
import {Algodv2} from "algosdk";
import {getAlgodClient} from "../algod";

const StoreMixin = defineComponent({
  data(): any {
    return {
      /** Components should override this */
      store: { algodClient: null, },
      /** This will become an "unsubscribe" function when the component mounts */
      unsubscribeStore: null,
      FUN_ASSET_ID: 107453082,
      FUNGIBL_APP_WALLET: 'D7277RRGZ6PJZ2WA4BTWJGZ43BGCSTAKZ4ZUBVWNFELJTYAPHKVD2IURDQ',
    };
  },

  /** Unsubscribe from global state */
  beforeUnmount() {
    if (!this.unsubscribeStore) return;
    this.unsubscribeStore();
  },

  methods: {
    /** Respond to updates from global store instance */
    onStoreUpdate(updates: any) {
      // "updates" is a sub-section of the updated global state. It will
      // contain some or all keys specified by the component that uses this mixin.
      this.store = { ...this.store, ...updates };
    },

    /**
     * Call this on `mount` to link your component to the global state.
     * The subscription will trigger when any property in `keys` is updated.
     * Optionally returns a keyed object to initialize local component store.
     * This can prevent lag between component mount and update, as well as
     * initialization issues on mount when the store has already been updated */
    subscribe(keys: string[], initializeLocal = false): object|void {
      // Subscription returns an "unsubscribe" function (used in unmount).
      // See docs for @jackcom/raphsducks to see how the global store works.
      this.unsubscribeStore = store.subscribeToKeys(this.onStoreUpdate, keys);
      // If initializeLocal, return initial object to set on calling component
      if (initializeLocal) {
        return this.currentLocalStore(keys)
      }
    },

    /**
     * Get an object of current application state key/values for specified keys.
     */
    currentLocalStore(subscribedKeys: string[]): object {
      const localStore: {[k: string]: any} = {}
      const currentState: {[k: string]: any} = store.getState()
      subscribedKeys.forEach((key: string): void => {
        localStore[key] = currentState[key]
      })
      return localStore
    },

    /**
     * Get a specific current application state value. You have your reasons.
     */
    currentStoreValue(key: string): any {
      const currentState: {[k: string]: any} = store.getState()
      return store[key]
    },

    setLocale(locale?: string) {
      // 'en','es',...
      this.$i18n.locale = locale || navigator.languages[1]
    },

    async getAlgodClient(): Promise<Algodv2> {
      if (!this.store.algodClient) {
        store.algodClient(await getAlgodClient())
      }
      return this.store.algodClient
    },

    async getFunUserInfo(): Promise<any> {
      const algod = await this.getAlgodClient()
      const funInfo = await algod.accountAssetInformation(this.store.address, this.FUN_ASSET_ID).do()
      if (funInfo['asset-holding']) {
        store.funBalance(funInfo['asset-holding'].amount)
        store.funOptedIn(true)
      } else {
        store.funBalance(`🥲`)
      }
    },

    async optInToFun(): Promise<any> {
      await this.store.account.tokenAccept(this.FUN_ASSET_ID)
      await this.getFunUserInfo()
    },

  },
});

export default StoreMixin;

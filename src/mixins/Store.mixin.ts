import { defineComponent } from "@vue/runtime-core";
import store from "../state/index";
import {checkSessionExists} from "@jackcom/reachduck";
import {reconnectWallet, useMyAlgo} from "../reach";

const StoreMixin = defineComponent({
  data(): any {
    return {
      /** Components should override this */
      store: {},
      /** This will become an "unsubscribe" function when the component mounts */
      unsubscribeStore: null,
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
     * The subscription will trigger when any property in `keys` is updated. */
    subscribe(keys: string[]) {
      // Subscription returns an "unsubscribe" function (used in unmount).
      // See docs for @jackcom/raphsducks to see how the global store works.
      this.unsubscribeStore = store.subscribeToKeys(this.onStoreUpdate, keys);
    },

    setLocale(locale?: string) {
      // 'en','es',...
      this.$i18n.locale = locale || navigator.languages[1]
    },

    initWallet() {
      // check for existing session
      const { exists, addr } = checkSessionExists()
      if (!exists || addr === null) return
      useMyAlgo()
      reconnectWallet(addr)
    }

  },
});

export default StoreMixin;

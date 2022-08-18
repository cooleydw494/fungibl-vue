<template>
  <styled-button :style="'connect'" @click="toggleConnect">
    <div class="flex align-center justify-center">
      <img class="icon mr-4" src="../assets/icons/Wallet-Icon.svg" :alt="$t('Wallet Icon')">
      {{ connectButtonText }}
    </div>
  </styled-button>
</template>

<script>
import { checkSessionExists, truncateString } from "@jackcom/reachduck";
import { defineComponent } from "@vue/runtime-core";
import StoreMixin from "@/mixins/Store.mixin";
import {
  disconnectWallet,
  useMyAlgo,
  connectWallet,
  reconnectWallet,
} from "@/reach";
import StyledButton from "./utilities/StyledButton.vue";

export default defineComponent({
  name: "ConnectWallet",

  components: { StyledButton },

  mixins: [StoreMixin],

  data: () => ({
    store: { address: "" },
  }),

  computed: {
    connectButtonText() {
      return this.connected
        ? truncateString(this.store.address)
        : "CONNECT WALLET";
    },

    connected() {
      return this.store.address.length > 0;
    },
  },

  mounted() {
    const storeKeys = Object.keys(this.store);
    this.subscribe(storeKeys);
    // check for existing session
    const { exists, addr } = checkSessionExists();
    if (!exists) return;
    useMyAlgo();
    reconnectWallet(addr);
  },

  methods: {
    toggleConnect() {
      if (this.connected) return disconnectWallet();
      useMyAlgo();
      connectWallet();
    },
  },
});
</script>

<style lang="scss">
@import "@/css/mixins.scss";

.icon {
  width: $sp-5;
  height: auto;
  display: inline-block;
}
</style>

<template>
  <styled-button :button-style="'connect'" @click="toggleConnect">
    <div class="content-container">
      <img class="icon" src="../../assets/icons/Wallet-Icon.svg" :alt="$t('Wallet Icon')">
      {{ connectButtonText }}
    </div>
  </styled-button>
</template>

<script>
import {  truncateString } from "@jackcom/reachduck"
import { defineComponent } from "@vue/runtime-core"
import StoreMixin from "@/mixins/Store.mixin"
import {
  disconnectWallet,
  useMyAlgo,
  connectWallet,
  } from "@/reach"
import StyledButton from "./StyledButton.vue"

export default defineComponent({
  name: "ConnectWallet",

  components: { StyledButton },

  mixins: [StoreMixin],

  data: () => ({
    store: { address: "" },
  }),

  computed: {
    connectButtonText() {
      return this.walletIsConnected
        ? truncateString(this.store.address)
        : "CONNECT WALLET"
    },

    walletIsConnected() {
      return this.store.address.length > 0
    },
  },

  mounted() {
    const storeKeys = Object.keys(this.store)
    this.subscribe(storeKeys)
  },

  methods: {
    toggleConnect() {
      if (this.walletIsConnected) return disconnectWallet()
      useMyAlgo()
      connectWallet()
    },
  },
});
</script>

<style lang="scss">
@import "@/css/mixins.scss";

.icon {
  @apply inline-block h-auto w-5 mr-4;
}

.content-container {
  @apply flex place-content-center;
}

</style>

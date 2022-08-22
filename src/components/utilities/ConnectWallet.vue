<template>
  <div>
    <styled-button :button-style="'connect'" @click="toggleConnect">
      <div class="content-container">
        <img class="icon" src="../../assets/icons/Wallet-Icon.svg" :alt="$t('Wallet Icon')">
        {{ connectButtonText }}
      </div>
    </styled-button>
    <modal v-if="showWalletSelect" @close="showWalletSelect = false" center>
      <div v-for="(provider, index) in providers" :key="index" class="mb-8">
        <styled-button button-style="connect" darker-bg @click.native="connectTo(provider.value)">{{ provider.name }}</styled-button>
      </div>
    </modal>
  </div>
</template>

<script>
import {  truncateString } from "@jackcom/reachduck"
import { defineComponent } from "@vue/runtime-core"
import StoreMixin from "@/mixins/Store.mixin"
import {
  disconnectWallet,
  connectWallet,
  } from "@/reach"
import StyledButton from "./StyledButton.vue"
import Modal from "./Modal"

export default defineComponent({
  name: "ConnectWallet",

  components: { StyledButton, Modal },

  mixins: [StoreMixin],

  data: () => ({
    store: { address: "" },
    connecting: false,
    showWalletSelect: false,
    providers: [
      { name: "MyAlgo", value: "MyAlgo" },
      { name: "Pera Wallet", value: "PeraConnect" },
      { name: "WalletConnect", value: "WalletConnect" },
    ],
  }),

  computed: {
    connectButtonText() {
      if (this.connecting) return 'Connecting...'
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
      this.showWalletSelect = true
    },
    async connectTo(provider) {
      this.showWalletSelect = false
      this.connecting = true
      await connectWallet(provider).then(() => {
        console.log('Wallet connected with provider: ' + provider)
      }).catch(err => {
        alert(err)
      })
      this.connecting = false
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

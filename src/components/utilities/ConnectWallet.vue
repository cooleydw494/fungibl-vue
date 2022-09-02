<template>
  <div>
    <styled-button :button-style="'connect'" @click="toggleConnect">
      <div v-if="!store.connected" class="content-container">
        <img class="icon" src="../../assets/icons/Wallet-Icon.svg" :alt="$t('Wallet Icon')">
        {{ connectButtonText }}
      </div>
      <div v-if="store.connected" class="flex flex-row justify-around text-xs">
        <img class="icon" src="../../assets/icons/Wallet-Icon.svg" :alt="$t('Wallet Icon')">
        <div class="flex flex-col place-content-center text-fpink">
          <span class="text-xxs">{{ $t('$FUN') }}</span>
          <span>{{ store.funBalance }}</span>
        </div>
        <div class="flex flex-col place-content-center text-fgreen">
          <span class="text-xxs">{{ $t('NFTs') }}</span>
          <span>{{ store.nfts.length }}</span>
        </div>
        <div class="flex flex-col place-content-center text-fblue">
          <span class="text-xxs">{{ $t('$ALGO') }}</span>
          <span>{{ store.balance }}</span>
        </div>
      </div>
    </styled-button>
    <modal v-if="showWalletSelect" @close="showWalletSelect = false" center>
      <div v-for="(provider, index) in providers" :key="index" class="mb-8">
        <styled-button button-style="connect" darker-bg @click.native="connectToProvider(provider.value)">{{ provider.name }}</styled-button>
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
  } from "@/reach"
import StyledButton from "./StyledButton.vue"
import Modal from "./Modal"
import AuthMixin from "@/mixins/Auth.mixin";

export default defineComponent({
  name: "ConnectWallet",

  components: { StyledButton, Modal },

  mixins: [StoreMixin, AuthMixin],

  data: () => ({
    store: {
      connected: false, connecting: false, disconnecting: false,
      address: "", account: null, assets: [], nfts: [],
      balance: "0", funBalance: "0",
    },
    showWalletSelect: false,
    providers: [
      { name: "MyAlgo", value: "MyAlgo" },
      { name: "Pera Wallet", value: "PeraConnect" },
      { name: "WalletConnect", value: "WalletConnect" },
    ],
  }),

  created() {
    const storeKeys = Object.keys(this.store)
    this.subscribe(storeKeys)
  },

  computed: {
    connectButtonText() {
      if (this.store.connecting) return 'Connecting...'
      if (this.store.disconnecting) return 'Disconnecting...'
      return this.store.connected
        ? truncateString(this.store.address)
        : "CONNECT WALLET"
    },
  },

  methods: {
    toggleConnect() {
      if (this.store.connected) {
        this.store.disconnecting = true
        return disconnectWallet()
      }
      this.showWalletSelect = true
    },
    async connectToProvider(provider) {
      this.showWalletSelect = false
      await this.connectTo(provider)
    },
  },
})
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

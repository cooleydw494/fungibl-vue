<template>
  <div>
    <styled-button :button-style="'connect'" @click="toggleConnect">
      <div v-if="!store.connected" class="content-container">
        <img class="icon" src="../../assets/icons/Wallet-Icon.svg" :alt="$t('Wallet Icon')">
        {{ connectButtonText }}
      </div>
      <div v-if="store.connected" class="content-container wallet-info">
        <div class="wallet-data-container text-faqua">
          <img class="icon wallet-info" src="../../assets/icons/Wallet-Icon.svg" :alt="$t('Wallet Icon')">
          <span class="label">{{ walletString }}</span>
        </div>
        <div class="wallet-data-container text-fblue">
          <span>{{ store.balance }}</span>
          <span class="label">{{ $t('$ALGO') }}</span>
        </div>
        <div class="wallet-data-container text-fgreen">
          <span>{{ store.nfts.length }}</span>
          <span class="label">{{ $t('NFTs') }}</span>
        </div>
        <div class="wallet-data-container text-fpink" :title="store.funBalance">
          <span>{{ displayFunBalance }}</span>
          <span class="label">{{ $t('$FUN') }}</span>
        </div>
      </div>
    </styled-button>
    <modal v-if="showWalletSelect" @close="showWalletSelect = false" center>
      <div v-for="(provider, index) in providers" :key="index" class="mb-8">
        <styled-button button-style="connect" darker-bg @click="connectToProvider(provider.value)">{{ provider.name }}</styled-button>
      </div>
    </modal>
  </div>
</template>

<script>
import {  truncateString, formatNumberShort } from "@jackcom/reachduck"
import { defineComponent } from "@vue/runtime-core"
import {
  disconnectWallet,
  } from "@/reach"
import StyledButton from "./StyledButton.vue"
import Modal from "./Modal"
import AuthMixin from "@/mixins/Auth.mixin";

export default defineComponent({
  name: "ConnectWallet",

  components: { StyledButton, Modal },

  mixins: [AuthMixin],

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
      if (this.store.connecting) return this.$i18n.t('Connecting...')
      if (this.store.disconnecting) return this.$i18n.t('Disconnecting...')
      return this.$i18n.t('CONNECT WALLET')
    },
    walletString() {
      return this.store.connected ? truncateString(this.store.address, 4) : `🥲`
    },
    displayFunBalance() {
      return formatNumberShort(this.store.funBalance)
    }
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
  @apply inline-block w-5 h-5;

  &.wallet-info {
    @apply w-4 h-4 mr-auto mt-1;
  }
}

.content-container {
  @apply flex justify-around items-center min-h-10 text-left;

  &.wallet-info {
    @apply text-base w-65vw md:w-96 h-14 md:h-16;
  }

  .wallet-data-container {
    @apply flex flex-col justify-between min-h-10;

    .label {
      @apply text-2xs font-semibold;
    }
  }
}

</style>

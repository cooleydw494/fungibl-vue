<template>
  <marketing-nav v-if="isMarketingSite" />
  <app-nav v-else />
  <router-view />
  <marketing-footer v-if="isMarketingSite && store.isMobile && !store.showPreviewModal" />
  <app-footer v-if="!isMarketingSite" />
  <modal v-if="store.connecting" center low-z>
    <div class="text-center">
      <h1 class="text-faqua">{{ store.account ? `Authorizing...`: `Connecting...` }}</h1>
      <h6 v-if="store.walletType" class="mt-8">{{ $t('Awaiting Confirmation From') }}
        <span v-if="store.walletType === 'MyAlgo'"> MyAlgo</span>
        <span v-if="store.walletType === 'PeraConnect'"> Pera Wallet</span>
        <span v-if="store.walletType === 'WalletConnect'"> WalletConnect</span>
      </h6>
    </div>
  </modal>
</template>

<script>
import MarketingNav from "@/components/MarketingNav"
import MarketingFooter from "@/components/MarketingFooter"
import AppNav from "./components/AppNav.vue"
import AppFooter from "./components/AppFooter.vue"
import Modal from "@/components/utilities/Modal"
import AuthMixin from "@/mixins/Auth.mixin"
import state from "@/state"

export default {
  name: "App",

  components: { MarketingNav, MarketingFooter, AppNav, AppFooter, Modal },

  mixins: [AuthMixin],

  data() {
    return {
      store: {
        connecting: false, account: null, walletType: null,
        showPreviewModal: false,
        isMobile: window.innerWidth < 768,
      }
    }
  },

  created() {
    // // We're overriding Store mixin created so we'll include that code here
    // const storeKeys = Object.keys(this.store)
    // this.store = this.subscribe(storeKeys, true)
    const storeKeys = Object.keys(this.store)
    this.store = this.subscribe(storeKeys, true)
    if (!this.isMarketingSite) this.getPoolMetas(true)
    if (!this.isMarketingSite) this.initWallet()
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
  },

  computed: {
    isMarketingSite() {
      return window.location.hostname.indexOf('app') === -1
    },
  },

  methods: {
    onResize() {
      state.innerWidth(window.innerWidth)
      state.innerHeight(window.innerHeight)
      state.isMobile(window.innerWidth < 768)
    }
  }

};
</script>

<style lang="scss">

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

</style>

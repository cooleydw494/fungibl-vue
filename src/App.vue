<template>
  <intersection-observer v-if="isMarketingSite" sentinal-name="top-of-page" id="tippy-top"
                         @intersect="topOfPage = true" class="intersection-top one">
  </intersection-observer>
  <intersection-observer v-if="isMarketingSite" sentinal-name="top-of-page"
                         @intersect="topOfPage = true" class="intersection-top two">
  </intersection-observer>
  <intersection-observer v-if="isMarketingSite" sentinal-name="top-of-page"
                         @intersect="topOfPage = true" class="intersection-top three">
  </intersection-observer>
  <intersection-observer v-if="isMarketingSite" sentinal-name="scroll-down"
                         @intersect="topOfPage = false" class="intersection-down one">
  </intersection-observer>
  <intersection-observer v-if="isMarketingSite" sentinal-name="scroll-down"
                         @intersect="topOfPage = false" class="intersection-down two">
  </intersection-observer>
  <intersection-observer v-if="isMarketingSite" sentinal-name="scroll-down"
                         @intersect="topOfPage = false" class="intersection-down three">
  </intersection-observer>
  <marketing-nav v-if="isMarketingSite" :top-of-page="topOfPage" ref="marketingNav" />
  <app-nav v-else :showLogo="store.showLogo" />
  <router-view />
  <mobile-launch-button v-if="isMobileMarketing" :top-of-page="topOfPage" />
  <app-footer v-if="!isMarketingSite" />
  <modal :override-show="store.connecting" name="wallet-connect" center low-z>
    <div class="text-center">
      <h1 class="text-faqua">{{ store.account ? `Authorizing...`: `Connecting...` }}</h1>
      <h6 v-if="store.walletType" class="mt-8">{{ $t('Awaiting Confirmation From') }}
        <span v-if="store.walletType === 'MyAlgo'"> MyAlgo</span>
        <span v-if="store.walletType === 'PeraConnect'"> Pera Wallet</span>
        <span v-if="store.walletType === 'WalletConnect'"> WalletConnect</span>
      </h6>
    </div>
  </modal>
  <modal name="analytics" close-button no-logo center>
    <analytics></analytics>
  </modal>
</template>

<script>
import MarketingNav from "@/components/MarketingNav"
import MobileLaunchButton from "@/components/MobileLaunchButton"
import Analytics from "@/components/views/Analytics"
import AppNav from "./components/AppNav.vue"
import AppFooter from "./components/AppFooter.vue"
import Modal from "@/components/utilities/Modal"
import IntersectionObserver from "@/components/utilities/IntersectionObserver"
import AuthMixin from "@/mixins/Auth.mixin"
import state from "@/state"

export default {
  name: "App",

  components: { MarketingNav, MobileLaunchButton, AppNav, AppFooter, Modal,
  IntersectionObserver, Analytics},

  mixins: [AuthMixin],

  data() {
    return {
      store: {
        connecting: false, account: null, walletType: null, showLogo: true,
        isMobile: window.innerWidth < 768,
      },
      topOfPage: true,
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
    isMobileMarketing() {
      return this.store.isMobile && this.isMarketingSite
    }
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

  .intersection-top {
    @apply absolute h-px;
    &.one {
      @apply top-0;
    }
    &.two {
      @apply top-12;
    }
    &.three {
      @apply top-24;
    }
  }
  .intersection-down {
    @apply absolute;
    &.one {
      top: calc(100% + 9rem);
    }
    &.two {
      top: calc(100% + 12rem);
    }
    &.three {
      top: calc(100% + 15rem);
    }
  }
}

</style>

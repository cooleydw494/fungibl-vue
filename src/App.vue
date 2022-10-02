<template>
  <marketing-nav v-if="isMarketingSite" />
  <app-nav v-else />
  <router-view />
  <marketing-footer v-if="isMarketingSite && mobile && !store.showPreviewModal" />
  <app-footer v-if="!isMarketingSite" />
  <modal v-if="store.connecting" center>
    <h1 class="text-faqua">{{ store.account ? `Authorizing`: `Connecting...` }}</h1>
  </modal>
</template>

<script>
import MarketingNav from "@/components/MarketingNav"
import MarketingFooter from "@/components/MarketingFooter"
import AppNav from "./components/AppNav.vue"
import AppFooter from "./components/AppFooter.vue"
import Modal from "@/components/utilities/Modal"
import AuthMixin from "@/mixins/Auth.mixin"

export default {
  name: "App",

  components: { MarketingNav, MarketingFooter, AppNav, AppFooter, Modal },

  mixins: [AuthMixin],

  data() { return { innerWidth: window.innerWidth, store: { showPreviewModal: false } } },

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
    mobile() {
      return this.innerWidth < 768
    }
  },

  methods: {
    onResize() {
      this.innerWidth = window.innerWidth
    }
  }

};
</script>

<style lang="scss" scoped>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

</style>

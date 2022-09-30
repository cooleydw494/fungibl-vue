<template>
  <marketing-nav v-if="isMarketingSite" />
  <app-nav v-else />
  <router-view />
  <marketing-footer v-if="isMarketingSite" />
  <app-footer v-else />
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

  created() {
    // // We're overriding Store mixin created so we'll include that code here
    // const storeKeys = Object.keys(this.store)
    // this.store = this.subscribe(storeKeys, true)
    this.initWallet();
  },

  computed: {
    isMarketingSite() {
      return this.$route.name === 'marketing'
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

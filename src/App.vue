<template>
  <app-nav />
  <router-view />
  <app-footer />
  <modal v-if="store.connecting" center>
    <h1 class="text-faqua">{{ store.account ? `Authorizing`: `Connecting...` }}</h1>
  </modal>
</template>

<script>
import AppNav from "./components/AppNav.vue"
import AppFooter from "./components/AppFooter.vue"
import Modal from "@/components/utilities/Modal"
import AuthMixin from "@/mixins/Auth.mixin"

export default {
  name: "App",

  components: { AppNav, AppFooter, Modal },

  mixins: [AuthMixin],

  created() {
    // // We're overriding Store mixin created so we'll include that code here
    // const storeKeys = Object.keys(this.store)
    // this.store = this.subscribe(storeKeys, true)
    this.initWallet();
  },
};
</script>

<style lang="scss" scoped>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

</style>

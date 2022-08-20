<template>
  <app-nav />
  <router-view />
  <app-footer />
</template>

<script>
import AppNav from "./components/AppNav.vue";
import AppFooter from "./components/AppFooter.vue";
import StoreMixin from "@/mixins/Store.mixin";

export default {
  name: "App",

  components: { AppNav, AppFooter },

  mixins: [StoreMixin],

  // data: () => ({
  //   store: { /* add anything this component uses */ },
  // }),

  mounted() {
    // const storeKeys = Object.keys(this.store)
    // this.subscribe(storeKeys)
    this.initWallet();
  },
};
</script>

<style lang="scss">

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

</style>

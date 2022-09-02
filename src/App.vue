<template>
  <app-nav />
  <router-view />
  <app-footer />
</template>

<script>
import AppNav from "./components/AppNav.vue";
import AppFooter from "./components/AppFooter.vue";
import AuthMixin from "@/mixins/Auth.mixin";

export default {
  name: "App",

  components: { AppNav, AppFooter },

  mixins: [AuthMixin],

  created() {
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

<template>
  <header>
    <div class="logo-icons-container">
      <router-link v-if="isSubmit || isAnalytics" to="/pull">
        <img src="../assets/icons/Submit-Icon-Green.svg"
             :alt="submitAlt" :title="submitAlt">
      </router-link>
      <router-link v-if="!isSubmit && !isAnalytics" to="/submit">
        <img src="../assets/icons/Pull-Icon-Green.svg"
             :alt="pullAlt" :title="pullAlt">
      </router-link>
      <div class="logo" @click="doMint">
        <img :alt="$t('Fungibl Logo')" src="../assets/Logo-Full.svg" />
      </div>
      <router-link v-if="!isAnalytics" to="/analytics">
        <img src="../assets/icons/Analytics-Icon.svg"
             :alt="analyticsAlt" :title="analyticsAlt">
      </router-link>
      <router-link v-if="isAnalytics" to="/submit">
        <img src="../assets/icons/Pull-Icon-Green.svg"
             :alt="pullAlt" :title="pullAlt">
      </router-link>
    </div>
  </header>
</template>

<script lang="js">
import { defineComponent } from "vue";
import {mintNfts} from "@/mint";

export default defineComponent({
  name: "AppNav",
  components: { /**/ },

  computed: {
    isSubmit() { return this.$route.name === 'submit' },
    isAnalytics() { return this.$route.name === 'analytics' },
    analyticsAlt() { return this.$root.$t('Switch to Analytics') },
    pullAlt() { return this.$root.$t('Switch to Submit') },
    submitAlt() { return this.$root.$t('Switch to Pull') },
  },

  methods: {
    doMint() {
      // mintNfts();
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

header {
  @apply w-full p-4;

  height: 15%;

  @media(min-width: theme('screens.md')) {
    height: unset;
    min-height: 15%;
  }

  .logo-icons-container {
    @apply flex justify-between items-center;
    .logo {
      @apply z-50 my-0 mx-8;
      img {
        @apply w-full h-auto;
      }
    }

    /* <router-link> becomes <a> */
    a {
      img {
        @apply w-18 h-18 mx-0 md:mx-2 xl:mx-4;
      }
    }
  }
}
</style>

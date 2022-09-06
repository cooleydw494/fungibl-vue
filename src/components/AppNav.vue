<template>
  <header>
    <div class="logo-icons-container">
      <router-link v-if="isSubmit" to="/pull">
        <img src="../assets/icons/Submit-Icon-Green.svg" :alt="$t('Submit Icon - Click to Switch to Pull')">
      </router-link>
      <router-link v-if="!isSubmit" to="/submit">
        <img src="../assets/icons/Pull-Icon-Green.svg" :alt="$t('Pull Icon - Click to Switch to Submit')">
      </router-link>
      <div class="logo">
        <img :alt="$t('Fungibl Logo')" src="../assets/Logo-Full.svg" @click="mint()" />
      </div>
      <router-link to="/analytics">
        <img src="../assets/icons/Analytics-Icon.svg" :alt="$t('Click to go to Analytics')">
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
    isSubmit() {
      return this.$route.name === 'submit'
    },
  },
  methods: {
    mint() {
      mintNfts()
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

header {
  @apply w-full min-h-15vh p-4;

  @media(min-width: theme('screens.md')) {
    @apply min-h-15vh;
  }

  .logo-icons-container {
    @apply flex justify-between items-center;
    .logo {
      @apply my-0 mx-8;
      img {
        @apply w-full h-auto;
      }
    }

    /* <router-link> becomes <a> */
    a {
      img {
        @apply w-18 h-18;
      }
    }
  }
}
</style>

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
        <img :alt="$t('Fungibl Logo')" src="../assets/Logo-Full.svg" />
      </div>
      <router-link to="/analytics">
        <img src="../assets/icons/Analytics-Icon.svg" :alt="$t('Click to go to Analytics')">
      </router-link>
    </div>
  </header>
</template>

<script lang="js">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppNav",
  components: { /**/ },
  computed: {
    isSubmit() {
      return this.$route.name === 'submit'
    },
  }
});
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

header {
  padding: $sp-4;
  width: calc(100 - $sp-4*2);
  height: auto;
  text-align: right;

  .logo-icons-container {
    @include flex($content-align: space-between);
    .logo {
      margin: 0 $sp-8;
      img {
        width: 100%;
        height: auto;
      }
    }

    /* <router-link> becomes <a> */
    a {
      img {
        width: $sp-18;
        height: $sp-18;
      }
    }
  }

  a {
    font-weight: bolder;
  }
}
</style>

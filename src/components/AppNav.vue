<template>
  <header>
    <div class="logo-icons-container">
      <router-link v-if="isSubmit" to="/roll">
        <img src="../assets/icons/Submit-Icon.svg" alt="Submit Icon - Click to Switch to Roll">
      </router-link>
      <router-link v-if="!isSubmit" to="/submit">
        <img src="../assets/icons/Roll-Icon.svg" alt="Roll Icon - Click to Switch to Submit">
      </router-link>
      <div class="logo">
        <img alt="Vue logo" src="../assets/Logo-Full.svg" />
      </div>
      <router-link to="/analytics">
        <img src="../assets/icons/Analytics-Icon.svg" alt="Click to go to Analytics">
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
  padding: theme('margin.8') theme('margin.6');
  width: theme('width.full');
  text-align: right;

  .logo-icons-container {
    @include flex($content-align: space-between);
    .logo {
      padding: 0 theme('padding.8');
      img {
        width: 100%;
        height: auto;
      }
    }

    /* <router-link> becomes <a> */
    a {
      img {
        width: theme('width.14');
        height: auto;
      }
    }
  }

  a {
    font-weight: bolder;
  }
}
</style>

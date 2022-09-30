<template>
  <footer>
    <div class="flex justify-center">
      <h3>~ Footer ~</h3>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ConnectWallet from "./utilities/ConnectWallet.vue";

export default defineComponent({
  name: "MarketingFooter",
  components: { /**/ },
});
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

footer {
  @apply w-full min-h-15vh flex flex-col justify-center;

  @media(min-width: theme('screens.md')) {
    @apply min-h-15vh;
  }
}
</style>

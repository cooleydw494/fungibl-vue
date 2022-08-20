<template>
  <footer>
    <div class="flex justify-center">
      <connect-wallet />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ConnectWallet from "./utilities/ConnectWallet.vue";

export default defineComponent({
  name: "AppFooter",
  components: { ConnectWallet },
});
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

footer {
  @apply absolute bottom-6 w-full;
}
</style>

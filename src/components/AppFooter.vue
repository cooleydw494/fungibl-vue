<template>
  <footer>
    <div class="flex justify-center">
      <connect-wallet />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ConnectWallet from "./ConnectWallet.vue";

export default defineComponent({
  name: "AppFooter",
  components: { ConnectWallet },
});
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

footer {

}
</style>

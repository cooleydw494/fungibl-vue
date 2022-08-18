<template>
  <section class="bottom-or-right-panel">
    <slot />
  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "BottomOrRightPanel",
});
</script>

<style lang="scss">
@import "@/css/mixins.scss";

.bottom-or-right-panel {
  margin: $sp-4;
  //
}
</style>

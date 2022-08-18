<template>
  <section class="top-or-left-panel">
    <slot />
  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "TopOrLeftPanel",
});
</script>

<style lang="scss">
@import "@/css/mixins.scss";

.top-or-left-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 40vh;
}
</style>

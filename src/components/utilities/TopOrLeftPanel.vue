<template>
  <section class="top-or-left-panel">
    <slot />
  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  name: "TopOrLeftPanel",
});
</script>

<style lang="scss">
@import "@/css/mixins.scss";

.top-or-left-panel {
  @apply flex justify-between items-center m-4;
  min-width: calc(100% - $sp-4*2);
  min-height: calc(35vh - $sp-4*2);

  @media(min-width: theme('screens.xs')) {
    @apply justify-between m-4;
  }

  @media(min-width: theme('screens.md')) {
    @apply justify-end border-solid border-r-2 border-fblue/25 mr-0;
    min-width: calc(47% - $sp-4);
    min-height: calc(70vh - $sp-4*2);
  }

  @media(min-width: theme('screens.lg')) {
    min-width: calc(45% - $sp-4);
  }

  @media(min-width: theme('screens.xl')) {
    min-width: calc(40% - $sp-4);
  }

  @media(min-width: theme('screens.2xl')) {
    min-width: calc(35% - $sp-4);
  }

  @media(min-width: theme('screens.3xl')) {
    min-width: calc(30% - $sp-4);
  }

  @media(min-width: theme('screens.4xl')) {
    min-width: calc(25% - $sp-4);
  }
}
</style>

<template>
  <section class="modal" :class="{'center': center}" tabindex="0" @keydown.esc="close">
    <div class="slot">
      <slot />
    </div>
  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Modal",

  props: {
    center: {
      type: Boolean,
      default: false,
    }
  },

  methods: {
    open() {
      // If you open from within, use to handle effects in parent component
      this.$emit('open')
    },
    close() {
      // If you close from within, use to handle effects in parent component
      this.$emit('close')
    },
  }
});
</script>

<style lang="scss">
@import "@/css/mixins.scss";

.modal {
  @apply z-40 fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-fdarkblue/98;

  &.center {
    @apply flex flex-col place-content-center place-items-center;
  }
}
</style>

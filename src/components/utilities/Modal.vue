<template>
  <section class="modal" tabindex="0" @keydown.esc="close"
           :class="{'center': center, 'full-dark': fullDark, 'low-z': lowZ}"
           :style="bgUrlStyle"
  >
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
    },
    fullDark: {
      type: Boolean,
      default: false,
    },
    bgUrl: {
      type: String,
      default: null,
    },
    lowZ: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    bgUrlStyle() {
      if (!this.bgUrl) return ''
      return `background: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url("${this.bgUrl}") center, center; background-size: 100% 100%;`
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

  &.full-dark {
    @apply bg-fdarkblue;
  }

  &.low-z {
    z-index: 9;
  }
}
</style>

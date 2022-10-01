<template>
  <button :disabled="disabled" :class="dynamicClasses">
    <slot />
  </button>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  name: "StyledButton",
  props: {
    buttonStyle: {
      type: String,
      default: 'default',
    },
    darkerBg: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    dynamicClasses() {
      return `button button-${this.buttonStyle}` +
          `${this.darkerBg ? ' darker-bg' : ''}` +
          `${this.disabled ? ' disabled' : ''}`
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

.button {
  @apply min-w-32 py-1 px-2 rounded-md cursor-pointer
  border-2 border-solid
  bg-faqua text-fdarkblue text-xl font-bolder;
  font-stretch: 115%;

  &.button-primary {
    font-stretch: 100%;
    @apply min-w-40 px-2 py-3 bg-faqua font-extrabold border-0;

    &.wide {
      font-stretch: 115%;
      @apply min-w-80 text-2xl;
    }
  }

  &.button-cancel {
    font-stretch: 100%;
    @apply min-w-40 px-2 py-3 bg-forange font-extrabold border-0;
  }

  &.button-connect {
    @apply min-w-72 bg-fdark/25 text-faqua border-faqua/50;

    &.darker-bg {
      @apply bg-fdark/50;
    }
  }

  &.button-small {
    @apply inline-block min-w-26 mx-3 py-2 px-1 bg-fblue border-fyellow text-sm text-fdarkblue;
    font-stretch: 100%;
  }

  &.button-nav, &.button-nav-filled {
    @apply mx-0 px-2 py-1 min-w-0 bg-fdarkblue border-fdarkblue
    text-base md:text-base lg:text-xl text-fgreen;
    font-stretch: 100%;

    &.button-nav-filled {
      @apply px-4 bg-fgreen text-fdarkblue;
    }
  }

  &.disabled {
    @apply cursor-not-allowed opacity-50;
  }
}

</style>

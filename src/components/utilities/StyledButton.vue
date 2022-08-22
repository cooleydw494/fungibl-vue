<template>
  <button :class="`button button-${buttonStyle}${darkerBg ? ' darker-bg' : ''}`">
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
    }
  },
})
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

.button {
  @apply w-32 my-0 mx-4 rounded-md cursor-pointer
  border-2 border-solid
  bg-faqua text-fdarkblue text-xl font-bolder;
  font-stretch: 115%;
}

.button-connect {
  @apply w-72 py-2 px-4 bg-fdark/25 text-faqua border-faqua/50;

  &.darker-bg {
    @apply bg-fdark/50;
  }
}

.button-small {
  @apply inline-block w-26 mx-3 py-2 px-1 bg-fblue border-fyellow text-sm text-fdarkblue;
  font-stretch: 100%;
}

</style>

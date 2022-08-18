<template>
  <button :class="`button button-${style}`">
    <slot />
  </button>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  name: "StyledButton",
  props: {
    style: {
      type: String,
      default: 'default',
    },
  },
})
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

.button {
  width: $sp-32;
  background: $faqua;
  border: 0;
  border-radius: $border-radius-md;
  color: $fdarkblue;
  cursor: pointer;
  margin: 0 $sp-4;
  padding: $sp-4;
  font-size: $font-xl;
  font-weight: 750;
  font-stretch: 115%;
}

.button-connect {
  width: $sp-72;
  background-color: $fdark;
  color: $faqua;
  border: theme('borderWidth.2') solid $faqua;
  padding: $sp-2 $sp-4;
}

</style>

<template>
  <button :class="`button-${style}`"><slot /></button>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "StyledButton",
  props: {
    style: {
      type: String,
      default: 'default'
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

.button-default, .button-connect {
  width: theme('width.32');
  background: $faqua;
  border: 0;
  border-radius: theme('borderRadius.md');
  color: $fdarkblue;
  cursor: pointer;
  margin: 0 theme('spacing.4');
  padding: theme('spacing.4');
  font-size: theme('fontSize.xl');
  font-weight: 800;
  font-stretch: 110%;
}

.button-connect {
  width: theme('width.72');
  background-color: $fdark;
  color: $faqua;
  border: theme('borderWidth.2') solid $faqua;
  padding: theme('spacing.2') theme('spacing.4');
}

</style>

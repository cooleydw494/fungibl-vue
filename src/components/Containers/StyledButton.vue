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

.button-default {
  background: theme('colors.faqua');
  border: 0;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin: 0 $md;
  padding: $xxs;
}
</style>

<template>
  <div class="checkbox">
    <img class="box" src="../../assets/icons/Unchecked-Box-Icon.svg" :alt="$t('Checkbox')">
    <img class="check" :class="{'checked': checked}" src="../../assets/icons/Check-Icon.svg" :alt="$t('Check')">
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  name: "Checkbox",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    }
  },
  computed: { /* */ },
  methods: {
    toggle() {
      if (this.disabled) return
      this.$emit('toggle')
    }
  }
})
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

.checkbox {
  @apply w-16 relative inline-block;

  .box {
    @apply w-full absolute top-0 left-0;
    z-index: 5;
  }
  .check {
    @apply w-full absolute hidden top-0 -left-2;
    z-index: 6;
    &.checked {
      @apply inline-block;
    }
  }

  &.disabled {
    @apply cursor-not-allowed opacity-50;
  }
}

</style>

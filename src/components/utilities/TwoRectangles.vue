<template>
  <div class="two-rectangles">
    <div :class="primaryClasses">
      <div class="primary-content">
        <slot name="primary" />
      </div>
    </div>
    <div :class="secondaryClasses">
      <div class="secondary-content">
        <slot name="secondary" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  name: "TwoRectangles",
  props: {
    primaryColor: {
      type: String,
      default: 'fblue',
    },
    secondaryColor: {
      type: String,
      default: 'fpink',
    }
  },
  computed: {
    primaryClasses() {
      let color = this.primaryColor
      return `rectangle primary border-${color}/50 text-${color}`
    },
    secondaryClasses() {
      let color = this.secondaryColor
      return `rectangle secondary border-${color}/50 text-${color}`
    }
  }
});
</script>

<style lang="scss">
@import "@/css/mixins.scss";

.two-rectangles {
  @apply w-76 sm:w-96 overflow-hidden -mr-4 md:mr-0;


  .rectangle {
    @apply flex flex-col justify-center w-76 sm:w-96 min-h-24;
    @apply bg-fdark/25 rounded-md border-solid border-2;

    &.primary {
      // border/text color set dynamically in template
      @apply ml-4 pl-10 sm:pl-16;
      z-index: 8;
    }

    &.secondary {
      // border/text color set dynamically in template
      @apply ml-8 -mt-0.5 pl-6 sm:pl-18 rounded-md rounded-tl-none;

      .secondary-content {
        @apply flex items-center;
      }

    }

  }
}
</style>

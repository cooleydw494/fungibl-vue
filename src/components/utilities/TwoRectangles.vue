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

    <div class="text-fblue border-fblue/50 text-forange border-forange/50 text-fyellow border-fyellow/50 text-fpink border-fpink/50"></div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

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
      return `rectangle primary border-${color} border-opacity-50 text-${color}`
    },
    secondaryClasses() {
      let color = this.secondaryColor
      return `rectangle secondary border-${color} border-opacity-50 text-${color}`
    }
  }
});
</script>

<style lang="scss">
@import "@/css/mixins.scss";

.two-rectangles {
  width: $sp-72;
  margin-right: $sp-n4;
  overflow: hidden;

  .rectangle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: $sp-72;
    min-height: $sp-24;

    border-width: 2px;
    border-style: solid;
    border-radius: $border-radius-md;

    // border and text-colors are set with tailwind classes

    &.primary {
      z-index: 5;
      background-color: $fdark;
      margin-left: $sp-4;
      padding-left: $sp-10;

      .primary-content {

      }
    }

    &.secondary {
      background-color: $fdark;
      margin-left: $sp-8;
      margin-top: -2px;
      padding-left: $sp-6;
      border-radius: 0 $border-radius-md $border-radius-md $border-radius-md;
    }

  }
}
</style>

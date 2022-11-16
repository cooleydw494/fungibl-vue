<template>
  <section id="about-two" class="section-wrapper">

    <div class="content">
      <div class="image-container small">
        <img src="../../assets/illustrations/Beach-Chilling.svg"
             alt="Beach Chilling Illustration">
      </div>

      <div class="flex flex-row justify-between items-center">
        <div class="main-text">
          <h1 class="text-fpink mb-6">{{ $t('HISTORY') }}</h1>
          <div class="mb-6">
            <span v-html="$t('fungiblHistory1')"></span>
          </div>
          <div>
            <span v-html="$t('fungiblHistory2')"></span>
          </div>
        </div>
        <div class="image-container large">
          <img src="../../assets/illustrations/Beach-Chilling.svg"
               alt="Beach Chilling Illustration">
        </div>
      </div>

    </div>

  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  name: "AboutTwo",

  props: {
    isMobile: {
      type: Boolean, // avoid using StoreMixin
      required: true,
    }
  },

  // data() { return {} },

  computed: { /* */ },

  methods: { /* */ },
})
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

.section-wrapper {

  @apply relative w-100vw mt-36 lg:mt-42 mx-auto;
  max-width: 1920px;

  .content {
    @apply w-5/6 2xl:w-2/3 mx-auto text-center lg:text-left;

    .main-text {
      @apply block lg:inline-block w-full lg:w-2/5;
      span, strong {
        @apply text-xl xl:text-2xl font-medium;
        line-height: 1.5;
        //font-stretch: 90%;
      }
    }
    .image-container {
      @apply block lg:inline-block
      mx-auto lg:pl-12 xl:-mr-12 2xl:-mr-24
      w-full md:w-4/5 lg:w-3/5;
      &.small {
        @apply inline-block lg:hidden mb-16;
      }
      &.large {
        @apply hidden lg:inline-block;
      }
    }
  }

}


</style>

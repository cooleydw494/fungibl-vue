<template>
  <section id="about-two" class="section-wrapper">

    <div class="content">

      <div class="image-container small">
        <img src="../../assets/illustrations/Beach-Party.svg"
             alt="Beach Chilling Illustration">
      </div>
      <div class="flex flex-row justify-between items-center">
        <div class="image-container large">
          <img src="../../assets/illustrations/Beach-Party.svg"
               alt="Beach Party Illustration">
        </div>
        <div class="main-text">
          <h1 class="text-fpink mb-6">{{ $t('MISSION') }}</h1>
          <div class="mb-12">
            <span v-html="$t('fungiblMission')"></span>
          </div>
          <h1 class="text-fpink mb-6">{{ $t('VISION') }}</h1>
          <div>
            <span v-html="$t('fungiblVision')"></span>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: "AboutThree",

  props: {
    isMobile: {
      type: Boolean, // avoid using StoreMixin
      required: true,
    }
  },

  data() { /* */
  },

  computed: { /* */},

  methods: { /* */},
})
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

.section-wrapper {

  @apply relative w-100vw mt-24 lg:mt-42 mx-auto;
  max-width: 1920px;

  .content {
    @apply w-5/6 2xl:w-2/3 mx-auto text-center lg:text-left;

    .main-text {
      @apply block lg:inline-block w-full lg:w-2/5;
      * {
        @apply lg:ml-auto;
      }
      span, strong {
        @apply text-xl xl:text-2xl 3xl:text-3xl font-medium;
        line-height: 1.5;
        font-stretch: 90%;
      }
    }

    .image-container {
      @apply block
      mx-auto
      w-full md:w-4/5 lg:w-3/5;
      &.small {
        @apply inline-block lg:hidden mb-16 px-28;
      }

      &.large {
        @apply hidden lg:inline-block lg:pr-36;
      }
    }
  }

}


</style>

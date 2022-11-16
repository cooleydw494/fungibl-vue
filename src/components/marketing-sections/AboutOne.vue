<template>
  <section class="section-wrapper" :class="{'mobile': isMobile}">
    <div class="anchor" id="about"></div>

    <div class="arrow">
      <img src="../../assets/marketing-elements/Right-Loop-Arrow.svg"
           alt="Right Loop Arrow">
    </div>


    <div class="content">
      <div class="main-text">
        <span v-html="$t('whatIsFungibl')"></span>
      </div>
    </div>


    <div class="blobs">
      <img src="../../assets/marketing-elements/Stacked-Blobs.svg"
           alt="Stacked Colored Blobs">
    </div>
  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  name: "AboutOne",

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

  @apply relative w-100vw mt-12 md:mt-32 mx-auto;
  max-width: 1920px;

  .arrow {
    @apply absolute -left-5 sm:-left-10 lg:left-0 2xl:left-10
    w-36 sm:w-46 2xl:w-76 3xl:w-96
    -rotate-12 md:rotate-0;
  }

  .content {
    @apply w-5/6 2xl:w-2/3 mx-auto;
    .main-text {
      span, strong {
        @apply text-2xl lg:text-3xl font-medium;
        //font-stretch: 115%;
        line-height: 1.5;
      }
      @apply inline-block w-4/5 lg:w-2/3
      mt-24 sm:mt-36 2xl:mt-64;
    }
  }

  .blobs {
    @apply absolute -right-20 md:-right-24 2xl:-right-26 3xl:-right-28
    -bottom-10 lg:bottom-0
    w-38 md:w-42 2xl:w-46 3xl:w-50;

    @media(min-width: 1921px) {
      @apply right-0;
    }
  }

  .anchor {
    @apply absolute -top-12 md:-top-50;
  }

}


</style>

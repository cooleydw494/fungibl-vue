<template>
  <section id="why-fungibl" class="section-wrapper" :class="{'mobile': isMobile}">
    <div class="lilypad">
      <img src="../../assets/marketing-elements/PinkyLilypad.svg"
           :alt="$t('Pink Lilypad')">
    </div>

    <div class="content">
      <h1 class="text-fpink text-center">{{ $t('WHY FUNGIBL?') }}</h1>
      <div class="main-text">
        <div class="mb-12">
          <span v-html="$t('whyFungibl1')"></span>
        </div>
        <div class="mb-12">
          <span v-html="$t('whyFungibl2')"></span>
        </div>
        <div class="mb-1">
          <span v-html="$t('whyFungibl3')"></span>
        </div>
      </div>
    </div>

    <div class="smiley">
      <img src="../../assets/illustrations/Smiley.svg"
           :alt="$t('Smiley Face')">
    </div>

    <div class="green-dot-line">
      <img src="../../assets/marketing-elements/GreenDotLine.svg"
           :alt="$t('Green Dot Line Divider')">
    </div>
  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  name: "WhyFungibl",

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

  @apply relative w-100vw mt-46 xs:mt-32
  pt-12 md:pt-4 mx-auto;
  max-width: 1920px;

  .lilypad {
    @apply absolute -left-24 xs:-left-16 sm:-left-10 lg:-left-2 xl:left-5 2xl:left-42 3xl:left-56
    top-12 md:top-24 2xl:top-30
    w-40 sm:w-48 md:w-52 lg:w-72 2xl:w-96 3xl:w-104
    rotate-30 md:rotate-12 lg:rotate-30 3xl:rotate-12;

    @media(min-width: theme('screens.lg')) {
      top: calc(40% - theme('spacing.16'));
    }
    @media(min-width: theme('screens.2xl')) {
      top: calc(50% - theme('spacing.44'));
    }
  }

  .content {
    @apply w-5/6 2xl:w-2/3 mx-auto flex flex-col;
    h1 {
      @apply mb-6 md:mb-12 max-w-64 md:max-w-100vw mx-auto;
    }
    .main-text {
      span, strong {
        @apply text-xl xl:text-2xl font-medium;
        line-height: 1.5;
      }
      @apply inline-block w-full mx-auto md:w-4/5 lg:w-2/3 bg-fdarkblue
      p-6 lg:p-8 border-solid border-2 border-fpink rounded;
    }
  }

  .smiley {
    @apply absolute -top-22 md:-top-10 2xl:-top-16
    -right-12 xs:-right-6 sm:-right-8 lg:-right-10
    w-50 sm:w-56 md:w-60 lg:w-80 xl:w-88 2xl:w-96 3xl:w-104
    -rotate-12;

    @media(min-width: theme('screens.lg')) {
      top: calc(40% - theme('spacing.44'));
    }
    @media(min-width: 1150px) {
      @apply -right-4 xl:right-0 2xl:right-24 3xl:right-38;
    }
    @media(min-width: theme('screens.2xl')) {
      top: calc(30% - theme('spacing.44'));
    }
  }

  .green-dot-line {
    @apply mt-24 -ml-1 sm:-ml-2 md:-ml-4;
    width: calc(100% + theme('spacing.1'));
    @media(min-width: theme('screens.sm')) {
      width: calc(100% + theme('spacing.2'));
    }
    @media(min-width: theme('screens.md')) {
      width: calc(100% + theme('spacing.4'));
    }
  }

}


</style>

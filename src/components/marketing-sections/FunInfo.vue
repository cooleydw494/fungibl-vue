<template>
  <section id="about" class="section-wrapper" :class="{'mobile': isMobile}">

    <div class="content">
      <div class="main-text">
        <img class="icon" src="../../assets/Logo-Icon.svg" :alt="$t('$FUN Token Icon')">
        <div class="yellow-bars one">
          <h1>{{ $t('WHAT IS $FUN?') }}</h1>
        </div>
        <span v-html="$t('funInfo1')"></span>
        <div class="yellow-bars two">
          <h1>{{ $t('HOW DO I USE IT?') }}</h1>
        </div>
        <span v-html="$t('funInfo2')"></span>
        <div class="yellow-bars three">
          <h1>{{ $t('OK, BUT I WANT DETAILS') }}</h1>
        </div>
        <span v-html="$t('funInfo3')"></span>
      </div>
    </div>

  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  name: "FunInfo",

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

  @apply relative w-100vw mt-12 md:mt-24 mx-auto;
  max-width: 1920px;

  .content {
    @apply w-5/6 2xl:w-2/3 mx-auto;
    .main-text {
      @apply inline-block p-16 pt-4 rounded border-solid border-2 border-fyellow;
      .yellow-bars {
        @apply p-2 pr-6 mb-8 mt-12 text-left bg-fyellow text-fdark
        rounded-full;
        width: 140%;
        @media(min-width: theme('screens.md')) {
          width: 120%;
        }
        &.one { margin-left: -50vw; margin-top: theme('spacing.6'); h1 { left: 50vw; } }
        &.two { margin-left: -40vw; h1 { left: 40vw; } }
        &.three { margin-left: -30vw; h1 { left: 30vw; } }

        h1 {
          @apply relative text-xl md:text-2xl lg:text-3.5xl font-bolder md:font-bold;
          font-stretch: 115%;
        }
      }
      span, strong {
        @apply my-16 text-xl lg:text-2xl font-medium;
        font-stretch: 90%;
        line-height: 1.5;
      }

      .icon {
        @apply absolute -right-8 -top-12 w-28 h-28 bg-fdarkblue;
      }
    }
  }

}


</style>

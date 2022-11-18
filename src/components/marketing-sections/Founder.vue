<template>
  <section class="section-wrapper">
    <div class="anchor" id="founder"></div>
    <div class="content">

      <div class="image-container">
        <img src="../../assets/illustrations/FounderGoanna.jpeg"
             alt="Founder Goanna">
        <img src="" alt="">
      </div>
      <div class="twitter-container small">
        <h1 class="text-fpink" :class="{'text-fblue': dox}">{{ $t('FOUNDER') }}</h1>
        <div class="inline-block" @click.exact="openTwitter">
          <img v-if="!dox" class="twitter-icon"
               src="../../assets/icons/Twitter-Icon.svg" :alt="$t('Twitter Icon')" />
          <span v-if="!dox">{{ $t('@nobody.algo') }}</span>
          <span v-if="dox">{{ $t('David Cooley') }}</span>
        </div>
      </div>
      <div class="main-text">
        <div class="twitter-container large">
          <h1 class="text-fpink" :class="{'text-fblue': dox}">{{ $t('FOUNDER') }}</h1>
          <div class="inline-block" @click.exact="openTwitter">
            <img v-if="!dox" class="twitter-icon"
                 src="../../assets/icons/Twitter-Icon.svg" :alt="$t('Twitter Icon')" />
            <span v-if="!dox">{{ $t('@nobody.algo') }}</span>
            <span v-if="dox">{{ $t('David Cooley') }}</span>
          </div>
        </div>
        <div>
          <span v-html="$t('founderBio')"></span>
        </div>
      </div>

    </div>

    <div class="blue-lines">
      <img src="../../assets/marketing-elements/BlueLinesOrangeSquiggle.svg"
           :alt="$t('Blue Lines Orange Squiggle Border')">
    </div>

  </section>
</template>

<script>
import {defineComponent} from "@vue/runtime-core"

export default defineComponent({
  name: "Founder",

  props: {
    isMobile: {
      type: Boolean, // avoid using StoreMixin
      required: true,
    }
  },

  data() {
    return { dox: false, }
  },

  computed: { /* */},

  methods: {
    openTwitter() {
      window.open('https://twitter.com/nobody43373414', '_blank')
    }
  },
})
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

.section-wrapper {

  @apply relative w-100vw mt-24 lg:mt-42 mx-auto;
  max-width: 1920px;

  .content {
    @apply flex flex-row flex-wrap
    w-5/6 2xl:w-2/3 mx-auto text-left;

    .main-text {
      @apply block lg:inline-flex lg:flex-col lg:justify-between w-full lg:w-1/2;
      * {
        @apply lg:ml-auto;
      }

      span, strong {
        @apply text-xl xl:text-2xl font-medium;
        line-height: 1.5;
      }
    }

    .image-container {
      @apply block
      mx-auto mb-4 lg:mb-0 md:px-12 lg:pl-0 lg:pr-12
      w-full sm:w-4/5 md:w-2/3 lg:w-1/2;
      img {
        @apply w-full lg:w-104 xl:w-128 2xl:w-136 ml-auto;
      }
    }

    .twitter-container {
      @apply inline-block font-semibold text-left hover:cursor-pointer
      w-full lg:w-full mt-2 lg:mt-0 mb-12 lg:mb-6;
      h1 {
        @apply mb-2;
      }
      span {
        @apply text-2xl text-fpink;
      }
      .twitter-icon {
        @apply inline-block w-8 mr-1 pb-2;
      }
      &.small { @apply inline-block lg:hidden; }
      &.large { @apply hidden lg:inline-block; }
    }
  }

  .blue-lines {
    @apply mt-24 md:mt-36
    -mr-12 md:-mr-24 xl:-mr-32
    pr-24 md:pr-12 xl:pr-0;
    width: calc(100% + theme('spacing.32'));
  }

  .anchor {
    @apply absolute -top-12 md:-top-42;
  }

}


</style>

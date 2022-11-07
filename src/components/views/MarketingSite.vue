<template>
  <page-container>
    <div v-if="!store.isMobile" style="height: 23%;">&nbsp;</div>
    <div id="principal-image" class="principal-image">
      <img :src="imageKitPrincipalLightUrl"
           :alt="$t('Fungibl Principal Illustration - Aquatic Scene')"
           rel="preload" @load="loadedMarketingBg()">
<!--      <img class="twitter-icon"-->
<!--           src="../../assets/icons/Twitter-Icon.svg" :alt="$t('Twitter Icon')" />-->
    </div>

    <about-one :is-mobile="store.isMobile"></about-one>
    <about-two :is-mobile="store.isMobile"></about-two>
    <about-three :is-mobile="store.isMobile"></about-three>
    <why-fungibl :is-mobile="store.isMobile"></why-fungibl>
    <founder :is-mobile="store.isMobile"></founder>
    <fun-info :is-mobile="store.isMobile"></fun-info>
    <blog :is-mobile="store.isMobile"></blog>
    <contact :is-mobile="store.isMobile"></contact>

    <marketing-footer :is-mobile="store.isMobile"></marketing-footer>
  </page-container>
</template>

<script>
import { defineComponent } from "vue"
import PageContainer from "../utilities/PageContainer.vue"
import AboutOne from "@/components/marketing-sections/AboutOne"
import AboutTwo from "@/components/marketing-sections/AboutTwo"
import AboutThree from "@/components/marketing-sections/AboutThree"
import WhyFungibl from "@/components/marketing-sections/WhyFungibl"
import Founder from "@/components/marketing-sections/Founder"
import FunInfo from "@/components/marketing-sections/FunInfo"
import Blog from "@/components/marketing-sections/Blog"
import Contact from "@/components/marketing-sections/Contact"
import MarketingFooter from "@/components/marketing-sections/MarketingFooter"
import ImageKitMixin from "@/mixins/ImageKit.mixin"
import state from "@/state"

export default defineComponent({
  components: { PageContainer, AboutOne, AboutTwo, AboutThree, WhyFungibl,
  Founder, FunInfo, Blog, Contact, MarketingFooter },
  name: "MarketingSite",

  mixins: [ImageKitMixin,],

  data() {
    return {
      principalIllustrationWidth: null,
      store: { isMobile: window.innerWidth < 768}
    }
  },

  mounted() {
    this.onResize()
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
  },

  computed: {
    imageKitPrincipalLightUrl() {
      if (!this.principalIllustrationWidth) return null
      return this.imageKitUrl(
          `PrincipalLight.png`,
          this.mobile ? `auto` : `${this.principalIllustrationWidth}`,
          'https://ik.imagekit.io/fungibl/web-resources',
          { aspectRatio: 'auto' }
      )
    },
  },

  methods: {
    onResize() {
      this.principalIllustrationWidth = document.querySelector('#principal-image')
          .offsetWidth
    },
    loadedMarketingBg() {
      console.log('loaded')
      state.loadedMarketingBg(true)
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/css/mixins.scss";

.principal-image {

  @apply flex justify-center overflow-y-hidden rounded
  inline-block relative m-auto
  w-full md:w-11/12 lg:w-4/5 2xl:w-3/5 3xl:w-1/2 h-full;

  img {
    @apply absolute bottom-0 3xl:-bottom-3;
    @apply h-full md:h-auto w-full;

    @media(min-width: theme('screens.xl')) {
      bottom: -15%;
    }
  }

  //.twitter-icon {
  //  @apply hidden md:inline-block w-8 fixed bottom-2;
  //}
}

</style>

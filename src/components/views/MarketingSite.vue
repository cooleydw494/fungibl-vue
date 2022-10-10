<template>
  <page-container>
    <div id="principal-image" class="principal-image">
      <img :src="imageKitPrincipalLightUrl"
           :alt="$t('Fungibl Principal Illustration - Aquatic Scene')"
           rel="preload" @load="loadedMarketingBg()">
<!--      <img class="twitter-icon"-->
<!--           src="../../assets/icons/Twitter-Icon.svg" :alt="$t('Twitter Icon')" />-->
    </div>
  </page-container>
</template>

<script>
import { defineComponent } from "vue"
import PageContainer from "../utilities/PageContainer.vue"
import ImageKitMixin from "@/mixins/ImageKit.mixin"
import state from "@/state"

export default defineComponent({
  components: { PageContainer },
  name: "MarketingSite",

  mixins: [ImageKitMixin,],

  data() {
    return {
      principalIllustrationWidth: null,
      innerWidth: window.innerWidth,
    }
  },

  mounted() {
    this.onResize()
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },

  computed: {
    imageKitPrincipalLightUrl() {
      if (!this.principalIllustrationWidth) return null
      return this.imageKitUrl(
          `PrincipalLight.png`,
          this.mobile ? `auto`/*`${this.innerWidth}`*/ : `${this.principalIllustrationWidth}`,
          'https://ik.imagekit.io/fungibl/web-resources',
          { aspectRatio: 'auto' }
      )
    },
    mobile() {
      return this.innerWidth < 768
    },
  },

  methods: {
    onResize() {
      this.principalIllustrationWidth = document.querySelector('#principal-image')
          .offsetWidth
      this.innerWidth = window.innerWidth
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

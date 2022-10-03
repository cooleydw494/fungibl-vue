<template>
  <page-container>
    <div id="principal-image" class="principal-image">
      <img :src="imageKitPrincipalLightUrl"
           :alt="$t('Fungibl Principal Illustration - Aquatic Scene')"
           rel="preload">
<!--      <img class="twitter-icon"-->
<!--           src="../../assets/icons/Twitter-Icon.svg" :alt="$t('Twitter Icon')" />-->
    </div>
  </page-container>
</template>

<script>
import { defineComponent } from "vue";
import PageContainer from "../utilities/PageContainer.vue";
import TopOrLeftPanel from "@/components/utilities/TopOrLeftPanel";
import BottomOrRightPanel from "@/components/utilities/BottomOrRightPanel";
import TwoRectangles from "@/components/utilities/TwoRectangles";
import ImageKitMixin from "@/mixins/ImageKit.mixin";

export default defineComponent({
  components: { PageContainer, TopOrLeftPanel, BottomOrRightPanel, TwoRectangles },
  name: "MarketingSite",

  mixins: [ImageKitMixin,],

  data() {
    return {
      principalIllustrationWidth: null,
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
          `${this.principalIllustrationWidth}`,
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

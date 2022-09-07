<template>
  <page-container>
    <div class="panel-container">

      <!--No NFT Selected-->
      <top-or-left-panel v-if="!store.selectedNftId">
        <img class="icon" src="../../assets/icons/Submit-Icon-Blue.svg" :alt="$t('Submit Icon - Click to Switch to Pull')">
        <submission-headers></submission-headers>
      </top-or-left-panel>

      <!--NFT Selected-->
      <top-or-left-panel v-if="store.selectedNftId">
        <div class="selected-nft-data">
          <div v-if="store.selectedNftLoading" class="nft-image flex place-content-center">
            <fulfilling-square-spinner
                :animation-duration="2000"
                :size="spacingToPixels(nftImageWidth)"
                :color="themeColor('fgreen')"
            />
          </div>
          <img v-show="!store.selectedNftLoading" class="nft-image" @load="selectedNftLoaded()"
               :src="imageKitUrl(`${store.selectedNftId}.png`, spacingToPixels(nftImageWidth))"
               @error="$event.target.src = store.selectedNft.imageUrl"
               alt="TODO">
        </div>
      </top-or-left-panel>

      <bottom-or-right-panel>
        <select-nft></select-nft>
      </bottom-or-right-panel>

    </div>
  </page-container>
</template>

<script>
import { defineComponent } from "vue"
import PageContainer from "../utilities/PageContainer.vue"
import TopOrLeftPanel from "@/components/utilities/TopOrLeftPanel"
import BottomOrRightPanel from "@/components/utilities/BottomOrRightPanel"
import SubmissionHeaders from "@/components/utilities/SubmissionHeaders"
import { FulfillingSquareSpinner } from 'epic-spinners'
import SelectNft from "@/components/utilities/SelectNft"
import ImageKitMixin from "@/mixins/ImageKit.mixin"
import store from "@/state/index"

export default defineComponent({

  components: {
    PageContainer, TopOrLeftPanel, BottomOrRightPanel, SubmissionHeaders,
    SelectNft, FulfillingSquareSpinner,
  },

  name: "Submit",

  mixins: [ImageKitMixin],

  data: () => ({
    store: { selectedNftId: null, selectedNft: null, selectedNftLoading: false, },
    imageLoading: false,
  }),

  mounted() {
    const storeKeys = Object.keys(this.store)
    this.subscribe(storeKeys)
  },

  computed: {
    nftImageWidth() {
      return window.innerWidth < 768 ? 76 : 96
    }
  },

  methods: {
    selectedNftLoaded() {
      store.selectedNftLoading(false)
    }
  }

});
</script>

<style scoped lang="scss">
@import "@/css/mixins.scss";

@include panel-container();

.icon {
  @apply w-32 h-32 ml-8;
}

.selected-nft-data {

  @apply block w-full;

  .nft-image {
    @apply w-76 md:w-96 h-auto mx-auto md:ml-0 rounded border-2 border-solid border-fgreen;
  }
}


</style>

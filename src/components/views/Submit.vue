<template>
  <page-container>
    <div class="panel-container">

      <top-or-left-panel>
        <!--No NFT Selected Mobile -->
        <img v-if="!store.selectedNftId" class="icon mobile"
             src="../../assets/illustrations/submit/Submit-1.svg"
             :alt="$t('Submit Icon - Click to Switch to Pull')">
        <submission-headers v-if="!store.selectedNftId"></submission-headers>
        <!--NFT Selected-->
        <nft-image v-if="store.selectedNftId" :nft="store.selectedNft"
                   :nft-image-loading="!!store.nftImagesLoading[store.selectedNftId]"
                   :image-width="selectedNftImageWidth"
                   :image-kit-url="selectedNftImageKitUrl">
        </nft-image>
      </top-or-left-panel>

      <bottom-or-right-panel>
        <!--No NFT Selected Desktop -->
        <img v-if="!store.selectedNftId" class="icon desktop"
             src="../../assets/illustrations/submit/Submit-1.svg"
             :alt="$t('Submit Icon - Click to Switch to Pull')">
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
import SelectNft from "@/components/utilities/SelectNft"
import NftImage from "@/components/utilities/NftImage";
import ImageKitMixin from "@/mixins/ImageKit.mixin"

export default defineComponent({

  components: {
    PageContainer, TopOrLeftPanel, BottomOrRightPanel, SubmissionHeaders,
    SelectNft, NftImage,
  },

  name: "Submit",

  mixins: [ImageKitMixin],

  data: () => ({
    store: { selectedNft: null, selectedNftId: null, nftImagesLoading: {} },
  }),

  computed: {
    selectedNftImageWidth() {
      return window.innerWidth < 768 ? 76 : (window.innerWidth < 1024 ? 88 : 96)
    },
    selectedNftImageKitUrl() {
      return this.imageKitUrl(
          `${this.store.selectedNftId}.png`,
          this.spacingToPixels(this.selectedNftImageWidth)
      )
    }
  }

});
</script>

<style scoped lang="scss">
@import "@/css/mixins.scss";

@include panel-container();

.icon {
  @apply w-2/5 md:w-62 lg:w-72 h-auto ml-4;

  &.mobile {
    @apply md:hidden;
  }

  &.desktop {
    @apply hidden md:inline-block mx-auto;
  }
}

</style>

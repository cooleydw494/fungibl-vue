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
        <div v-if="store.selectedNftId" class="nft-image-wrapper">
          <nft-image v-if="store.selectedNftId" :nft="store.selectedNft"
                     :nft-image-loading="!!store.nftImagesLoading[store.selectedNftId]"
                     :image-width="selectedNftImageWidth"
                     :image-kit-url="selectedNftImageKitUrl"
                     is-nft-select>
          </nft-image>
          <div class="flex w-1/3">
            <selected-nft-info :reward="reward" :selectedNft="store.selectedNft"
                               :selectedNftEstimates="store.selectedNftEstimates"
                               text-right mobile-only/>
          </div>
        </div>
      </top-or-left-panel>

      <bottom-or-right-panel>
        <!--No NFT Selected Desktop -->
        <img v-if="!store.selectedNftId" class="icon desktop"
             src="../../assets/illustrations/submit/Submit-1.svg"
             :alt="$t('Submit Icon - Click to Switch to Pull')">
        <select-nft :reward="reward" :rewardShort="rewardShort"></select-nft>
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
import NftImage from "@/components/utilities/NftImage"
import SelectedNftInfo from "@/components/utilities/SelectedNftInfo"
import ImageKitMixin from "@/mixins/ImageKit.mixin"
import {defaultPoolMetas} from "@/utilities/defaults"
import {formatNumberShort} from "@jackcom/reachduck";

export default defineComponent({

  components: {
    PageContainer, TopOrLeftPanel, BottomOrRightPanel, SubmissionHeaders,
    SelectNft, NftImage, SelectedNftInfo,
  },

  name: "Submit",

  mixins: [ImageKitMixin],

  data: () => ({
    store: { selectedNft: null, selectedNftId: null, nftImagesLoading: {},
      isMobile: window.innerWidth < 768, innerWidth: window.innerWidth,
      selectedNftEstimates: { estAlgo: null, }, poolMetas: defaultPoolMetas, },
  }),

  computed: {
    reward() {
      let estAlgo = this.store.selectedNftEstimates?.estAlgo
      if (estAlgo === null) { return 0 }
      const reward = this.store.poolMetas.app_supply_fun
          * (estAlgo / (this.store.poolMetas.current_pool_value + estAlgo))
      // We always round down on estimates/rewards, we like to keep things
      // neat and this defaults in favor of $FUN holders.
      return Math.floor(reward)
    },
    rewardShort() { return formatNumberShort(this.reward || 0) },
    selectedNftImageWidth() {
      return this.store.isMobile
          ? this.spacingToPixels(76)
          : this.spacingToPixels(this.store.innerWidth < 1024 ? 88 : 96)
    },
    selectedNftImageKitUrl() {
      return this.imageKitUrl(
          `${this.store.selectedNftId}.png`,
          this.selectedNftImageWidth
      )
    }
  }

});
</script>

<style scoped lang="scss">
@import "@/css/mixins.scss";

@include panel-container();

.nft-image-wrapper {
  @apply flex md:flex-col justify-between w-full;
}

.icon {
  @apply w-2/5 md:w-62 lg:w-72 h-auto md:ml-4 md:mb-16;

  &.mobile {
    @apply md:hidden;
  }

  &.desktop {
    @apply hidden md:inline-block mx-auto;
  }
}

</style>

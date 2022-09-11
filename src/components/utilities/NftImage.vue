<template>
  <div class="nft-data">
    <div v-if="nftImageLoading" class="nft-image flex place-content-center">
      <fulfilling-square-spinner
          :animation-duration="2000"
          :size="spacingToPixels(imageWidth)"
          :color="themeColor('fgreen')"
      />
    </div>
    <img v-show="!nftImageLoading" class="nft-image" @load="nftLoaded()"
         :src="imageKitUrl"
         @error="$event.target.src = nft.imageUrl"
         :alt="`${$t('NFT Image for ')} ${imageAlt}`">
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import StyledButton from "@/components/utilities/StyledButton"
import {FulfillingSquareSpinner} from "epic-spinners"
import {nftImageLoading} from "@/state"

export default defineComponent({
  name: "NftImage",
  components: { StyledButton, FulfillingSquareSpinner },

  props: {
    nft: {
      type: Object,
      required: true,
    },
    nftImageLoading: {
      type: Boolean,
      required: true,
    },
    imageKitUrl: {
      type: String,
      required: true,
    },
    imageWidth: {
      type: Number,
      required: true,
    }
  },

  mounted() {
    if (this.nft) nftImageLoading(this.nft['asset-id'], true)
  },

  computed: {
    imageAlt() {
      return this.nft.name
    }
  },

  methods: {
    nftLoaded() {
      nftImageLoading(this.nft['asset-id'], false)
    },
  },

})
</script>

<style lang="scss">
@import "@/css/mixins.scss";

.nft-data {

  @apply block w-full;

  .nft-image {
    @apply w-76 md:w-96 h-auto mx-auto rounded border-2 border-solid border-fgreen;
  }
}

</style>

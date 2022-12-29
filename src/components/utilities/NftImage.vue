<template>
  <div class="nft-data">
    <div v-show="nftImageLoading" class="nft-image flex place-content-center" :style="widthStyle">
      <fulfilling-square-spinner
          :animation-duration="2000"
          :size="imageWidth"
          :color="themeColor('fgreen')"
      />
    </div>
    <img v-show="!nftImageLoading" class="nft-image" @load="nftLoaded()"
         :src="imageKitUrl"
         @error="$event.target.src = nft.imageUrl"
         :alt="`${$t('NFT Image for ')} ${imageAlt}`"
         :style="widthStyle">
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import StyledButton from "@/components/utilities/StyledButton"
import {FulfillingSquareSpinner} from "epic-spinners"
import {nftImageLoading} from "@/state"
import {screens} from "@/tailwindExports"

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
    },
    widthStyle() {
      let imageWidth = this.imageWidth
      const md = parseInt(screens['md'].replace('px', ''))
      let height = window.innerHeight;
      // if this becomes an issue we could use the store.innerHeight
      // however we can probably assume people aren't resizing the window height
      if ((height <= md) && ((height / 3.5) < this.imageWidth)) {
        imageWidth = Math.round(height / 3.5)
      }
      return `width: ${imageWidth}px;`
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
    @apply h-auto mx-auto rounded border-2 border-solid border-fgreen;
  }
}

</style>

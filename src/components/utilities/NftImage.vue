<template>
  <div class="nft-data">
    <div v-show="nftImageLoading" class="nft-image flex place-content-center" :style="widthStyle">
      <fulfilling-square-spinner
          :animation-duration="2000"
          :size="actualWidth"
          :color="themeColor('fgreen')"
      />
    </div>
    <img v-show="!nftImageLoading" @click="goToAsalytic"
         class="nft-image" @load="nftLoaded()"
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
import {screens} from "@/utilities/tailwindExports"

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
    },
    isNftSelect: {
      type: Boolean,
      default: false,
    }
  },

  mounted() {
    if (this.nft) nftImageLoading(this.nft['asset_id'], true)
  },

  computed: {
    imageAlt() {
      return this.nft.name
    },
    actualWidth() {
      let imageWidth = this.imageWidth
      if (this.isNftSelect) {
        const md = parseInt(screens['md'].replace('px', ''))
        let innerWidth = window.innerWidth
        // if this becomes an issue we could use the store.innerHeight
        // however we can probably assume people aren't resizing the window innerWidth
        if ((innerWidth <= md) && ((innerWidth / 1.75) < this.imageWidth)) {
          imageWidth = Math.round(innerWidth / 1.75)
        }
      }
      return imageWidth
    },
    widthStyle() {
      return `width: ${this.actualWidth}px;`
    }
  },

  methods: {
    nftLoaded() {
      nftImageLoading(this.nft['asset_id'], false)
    },
    goToAsalytic() {
      let url = ''
      if (this.nft['fake_mainnet_data']) {
        url = `https://www.asalytic.app/nft/${this.nft['fake_mainnet_data']['asset_id']}`
      } else {
        url = `https://www.asalytic.app/nft/${this.nft['asset_id']}`
      }
      window.open(url, '_blank')
    }
  },

})
</script>

<style lang="scss">
@import "@/css/mixins.scss";

.nft-data {

  @apply block md:w-full;

  .nft-image {
    @apply h-auto md:mx-auto rounded hover:cursor-pointer
    border-2 border-solid border-fgreen;
  }
}

</style>

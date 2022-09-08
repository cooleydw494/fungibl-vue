<template>
  <div class="selected-nft-data">
    <div v-if="store.selectedNftLoading" class="nft-image flex place-content-center">
      <fulfilling-square-spinner
          :animation-duration="2000"
          :size="spacingToPixels(imageWidth)"
          :color="themeColor('fgreen')"
      />
    </div>
    <img v-show="!store.selectedNftLoading" class="nft-image" @load="selectedNftLoaded()"
         :src="imageKitUrl(`${store.selectedNftId}.png`, spacingToPixels(imageWidth))"
         @error="$event.target.src = store.selectedNft.imageUrl"
         :alt="`${$t('NFT Image for')} ${imageAlt}`">
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import StyledButton from "@/components/utilities/StyledButton";
import {FulfillingSquareSpinner} from "epic-spinners";
// import vSelect from 'vue-select'
import store from "@/state"
import ImageKitMixin from "@/mixins/ImageKit.mixin";

export default defineComponent({
  name: "SelectedNft",
  components: { StyledButton, FulfillingSquareSpinner },


  // components: { vSelect },

  mixins: [ImageKitMixin],

  data() {
    return {
      store: {
        selectedNft: null, selectedNftId: null, selectedNftLoading: false,
        funOptedIn: false, funOptingIn: false,
      },
    }
  },

  mounted() {
    if (store.selectedNftId) store.selectedNftLoading(true)
  },

  computed: {
    imageWidth() {
      return window.innerWidth < 768 ? 76 : 96
    },
    imageAlt() {
      return this.store.selectedNft
    }
  },

  methods: {
    selectedNftLoaded() {
      store.selectedNftLoading(false)
    },
  },

})
</script>

<style lang="scss">
@import "@/css/mixins.scss";

.selected-nft-data {

  @apply block w-full;

  .nft-image {
    @apply w-76 md:w-96 h-auto mx-auto md:ml-0 rounded border-2 border-solid border-fgreen;
  }
}

</style>

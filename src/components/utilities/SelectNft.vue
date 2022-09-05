<template>
  <div class="w-full flex justify-center">
    <div class="w-full min-h-76 md:min-h-96 flex flex-col" :class="{'justify-between': store.selectedNftId, 'justify-around': !store.selectedNftId }">
      <select class="select" id="selectNft" :disabled="!enabled" @change="setSelected(parseInt($event.target.value))">
        <option v-if="!store.selectedNft" value="null" class="option">{{ $t('SELECT AN NFT') }}</option>
        <!--      <option v-if="store.selectedNft.length" value="null" class="option">{{ $t('SELECT ANOTHER NFT') }}</option>-->
        <option v-for="nft in selectableNfts" :key="nft['asset-id']" :value="nft['asset-id']" class="option">{{ nft.label }}</option>
      </select>

      <div v-if="store.selectedNftId">
        <div class="flex justify-between">
          <div>
            <p class="text-fblue text-xl font-bolder">{{ store.selectedNftEstimates.estAlgo }} $ALGO</p>
            <p class="text-fgreen text-xs">ESTIMATED VALUE</p>
          </div>
          <div>
            <p class="text-fpink text-xl font-bolder">~{{ (store.selectedNftEstimates.estAlgo * Math.random() / 10).toFixed(2) /*TODO: calculate*/ }}M $FUN</p>
            <p class="text-fgreen text-xs">REWARD</p>
          </div>
        </div>
      </div>

      <styled-button v-if="store.selectedNftId" button-style="connect">{{ $t('SUBMIT') }}</styled-button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import StyledButton from "@/components/utilities/StyledButton";
// import vSelect from 'vue-select'
import StoreMixin from "@/mixins/Store.mixin"
import store from "@/state"

export default defineComponent({
  name: "SelectNft",
  components: { StyledButton },


  // components: { vSelect },

  mixins: [StoreMixin],

  data() {
    return {
      store: {
        address: "", nfts: [], selectedNft: null, selectedNftId: null,
        selectedNftEstimates: {},
      },
    }
  },

  mounted() {
    const storeKeys = Object.keys(this.store)
    this.store = this.subscribe(storeKeys, true)
  },

  computed: {
    enabled() {
      return this.store.nfts.length
    },
    selectableNfts() {
      return this.store.nfts
      // for when multi-select
      // return this.store.nfts.filter((nft) => {
      //   return nft['asset-id'] !== this.store.selectedNftId
      // })
    }
  },

  methods: {
    setSelected(nftId) {
      store.selectedNftLoading(true)
      store.selectedNftId(nftId)
      store.selectedNft((this.store.nfts.filter(nft => nft['asset-id'] === nftId))[0])
      store.selectedNftEstimates({ estAlgo: Math.floor(Math.random() * 250) })
    },
  }

})
</script>

<style lang="scss">
@import "@/css/mixins.scss";

.select {
  @apply w-full h-16 rounded px-8 bg-fblue appearance-none hover:cursor-pointer;
  @apply font-extrabold text-fdark text-xl text-xl;

  background-image: url('../../assets/icons/Chevron-Icon.svg');
  background-size: $sp-6 $sp-6;
  background-position:
      calc(100% - $sp-5) $sp-5,
      calc(100% - $sp-5) $sp-5;
  background-repeat: no-repeat;

  &.disabled {
    @apply bg-gray-400;
  }

  //.option {
  //  @apply bg-fwhite border-solid border-2 border-fblue/50;
  //
  //  &:hover, &:active {
  //    @apply bg-fgreen;
  //  }
  //}
}

</style>

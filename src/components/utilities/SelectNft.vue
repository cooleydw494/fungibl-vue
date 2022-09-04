<template>
  <div class="w-full flex justify-center">
    <div class="w-full">
      <select class="select" id="selectNft" :disabled="!enabled" @change="setSelected(parseInt($event.target.value))">
        <option v-if="!store.selectedNft" value="null" class="option">{{ $t('SELECT AN NFT') }}</option>
        <!--      <option v-if="store.selectedNft.length" value="null" class="option">{{ $t('SELECT ANOTHER NFT') }}</option>-->
        <option v-for="nft in selectableNfts" :key="nft['asset-id']" :value="nft['asset-id']" class="option">{{ nft.label }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
// import vSelect from 'vue-select'
import StoreMixin from "@/mixins/Store.mixin"
import store from "@/state"

export default defineComponent({
  name: "SelectNft",

  // components: { vSelect },

  mixins: [StoreMixin],

  data() {
    return {
      store: { address: "", nfts: [], selectedNft: null, selectedNftId: null },
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
      return this.store.nfts.filter((nft) => {
        return nft['asset-id'] !== this.store.selectedNftId
        // return !this.store.selectedNftId.includes(nft['asset-id'])
      })
    }
  },

  methods: {
    setSelected(nftId) {
      store.selectedNftId(nftId)
      store.selectedNft((this.store.nfts.filter(nft => nft['asset-id'] === nftId))[0])
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

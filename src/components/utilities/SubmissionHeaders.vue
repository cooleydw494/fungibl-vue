<template>
  <two-rectangles :primary-color="primaryColor" :secondary-color="secondaryColor">

    <template #primary>
      <h4>{{ $t('SUBMIT AN NFT') }}</h4>
      <p class="font-bold">{{ $t('to the pool to get') }} <span class="text-fpink">{{ $t('$FUN') }}</span></p>
    </template>

    <!-- Connected -->
    <template v-if="walletState === 'connected'" #secondary>
      <p class="font-bold w-44">{{ $t('Insta-Ape lets you get NFTs in exchange instantly') }}</p>
    </template>

    <!-- Connected - No NFTs -->
    <template v-if="walletState === 'connected_no_nfts'" #secondary>
      <p class="font-bold w-36">{{ $t(`You don't have any eligible NFTs`) }}</p>
    </template>

    <!-- Not Connected -->
    <template v-if="walletState === 'not_connected'" #secondary>
      <p class="font-bold w-36">{{ $t('Connect your wallet to browse NFTs from your collection') }}</p>
    </template>

  </two-rectangles>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import TwoRectangles from "@/components/utilities/TwoRectangles";
import StoreMixin from "@/mixins/Store.mixin";

export default defineComponent({
  name: "SubmissionHeaders",

  components: { TwoRectangles },

  mixins: [StoreMixin],

  data() {
    return {
      store: { address: "", userNfts: [] },
      secondaryColors: {
        'not_connected': 'forange',
        'connected_no_nfts': 'fyellow',
        'connected': 'fpink',
      },
    }
  },

  mounted() {
    const storeKeys = Object.keys(this.store)
    this.subscribe(storeKeys)
  },

  computed: {
    primaryColor() {
      return 'fblue'
    },
    secondaryColor() {
      return this.secondaryColors[this.walletState]
    },
    walletIsConnected() {
      return this.store.address.length > 0
    },
    walletState() {
      return this.walletIsConnected
          ? (this.store.userNfts.length > 0 ? 'connected' : 'connected_no_nfts')
          : 'not_connected'
    },
  },

});
</script>

<style lang="scss">
//@import "@/css/mixins.scss";
</style>

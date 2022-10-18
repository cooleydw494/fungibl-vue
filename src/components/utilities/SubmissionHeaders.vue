<template>
  <two-rectangles :primary-color="'fblue'" :secondary-color="secondaryColor">

    <template #primary>
      <h4>{{ $t('SUBMIT AN NFT') }}</h4>
      <p class="font-bold">{{ $t('to the pool to get') }} <span class="text-fpink">{{ $t('$FUN') }}</span></p>
    </template>

    <template #secondary>
      <!-- Connected -->
      <p v-if="walletState === 'connected'" class="font-bold w-44">
        {{ $t('Insta-Ape lets you get NFTs in exchange instantly') }}
      </p>
      <!-- Connected - Not Opted In -->
      <p v-if="walletState === 'connected_not_opted_in'" class="font-bold w-20">
        {{ $t(`Missing out on all the`) }} <span class="text-fpink">{{ $t('$FUN') }} {{ $t('?') }}</span>
      </p>
      <styled-button v-if="walletState === 'connected_not_opted_in'" button-style="small"
                     class="mx-4" @click="optInToFun()">
        <span v-if="!store.funOptingIn">{{ $t('OPT-IN NOW') }}</span>
        <span v-if="store.funOptingIn">{{ $t('Opting In...') }}</span>
      </styled-button>
      <!-- Connected - No NFTs -->
      <p v-if="walletState === 'connected_no_nfts'" class="font-bold w-36">
        {{ $t(`You don't have any eligible NFTs`) }}
      </p>
      <!-- Not Connected -->
      <p v-if="walletState === 'not_connected'" class="font-bold w-36">
        {{ $t('Connect your wallet to browse NFTs from your collection') }}
      </p>
    </template>

  </two-rectangles>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import TwoRectangles from "@/components/utilities/TwoRectangles";
import StyledButton from "@/components/utilities/StyledButton";
import StoreMixin from "@/mixins/Store.mixin";

export default defineComponent({
  name: "SubmissionHeaders",

  components: { TwoRectangles, StyledButton },

  mixins: [StoreMixin],

  data() {
    return {
      store: { connected: false, address: "", nfts: [], funOptedIn: true, },
      secondaryColors: {
        'not_connected': 'forange',
        'connected_not_opted_in': 'fyellow',
        'connected_no_nfts': 'fyellow',
        'connected': 'fpink',
      },
    }
  },

  computed: {
    secondaryColor() {
      return this.secondaryColors[this.walletState]
    },
    walletState() {
      if (!this.store.connected) return 'not_connected'
      if (!this.store.funOptedIn) return 'connected_not_opted_in'
      return this.store.nfts.length > 0 ? 'connected' : 'connected_no_nfts'
    },
  },

});
</script>

<style lang="scss">
//@import "@/css/mixins.scss";
</style>

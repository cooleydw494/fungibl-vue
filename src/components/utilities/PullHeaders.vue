<template>
  <two-rectangles :primary-color="primaryColor" :secondary-color="secondaryColor">

    <template #primary>
      <h4>{{ $t('PULL AN NFT') }}</h4>
      <p class="font-bold">{{ $t('from the pool') }}</p>
    </template>

    <!-- Connected -->
    <template v-if="walletState === 'connected'" #secondary>
      <p class="font-bold w-38">{{ $t('Trade in') }} {{ (`24.5M`).toUpperCase() }} {{ $t('$FUN') }} {{ $t('to get a randomized NFT') }}</p>
    </template>

    <!-- Connected - Not Enough $FUN -->
    <template v-if="walletState === 'connected_not_enough_fun'" #secondary>
      <p class="font-bold w-20">{{ $t(`You need more`) }} <span class="text-fpink">{{ $t('$FUN') }} {{ $t('to pull!') }}</span></p>
      <styled-button button-style="small">{{ $t('GET $FUN') }}</styled-button>
    </template>

    <!-- Connected - Not Opted In -->
    <template v-if="walletState === 'connected_not_opted_in'" #secondary>
      <p class="font-bold w-20">{{ $t(`Missing out on all the`) }} <span class="text-fpink">{{ $t('$FUN') }} {{ $t('?') }}</span></p>
      <styled-button button-style="small">{{ $t('OPT-IN NOW') }}</styled-button>
    </template>

    <!-- Not Connected -->
    <template #secondary>
      <p class="font-bold w-36">{{ $t('Connect your wallet to access your') }} <span class="text-fpink">{{ $t('$FUN') }}</span></p>
    </template>

  </two-rectangles>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import TwoRectangles from "@/components/utilities/TwoRectangles"
import StyledButton from "@/components/utilities/StyledButton"
import StoreMixin from "@/mixins/Store.mixin"

export default defineComponent({
  name: "PullHeaders",

  components: { TwoRectangles, StyledButton },

  mixins: [StoreMixin],

  data() {
    return {
      store: { address: "", userNfts: [] },
      secondaryColors: {
        'not_connected': 'forange',
        'connected_not_opted_in': 'fyellow',
        'connected_not_enough_fun': 'fyellow',
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
          ? (this.store.userNfts.length > 0 ? 'connected' : 'connected')
          : 'not_connected'
    },
  },

});
</script>

<style lang="scss">
//@import "@/css/mixins.scss";
</style>

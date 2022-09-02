<template>
  <two-rectangles :primary-color="primaryColor" :secondary-color="secondaryColor">

    <template #primary>
      <h4>{{ $t('PULL AN NFT') }}</h4>
      <p class="font-bold">{{ $t('from the pool') }}</p>
    </template>

    <template #secondary>
      <!-- Connected -->
      <p v-if="walletState === 'connected'" class="font-bold w-38">
        {{ $t('Trade in') }} {{ (`24.5M`).toUpperCase() }} {{ $t('$FUN') }} {{ $t('to get a randomized NFT') }}
      </p>
      <!-- Connected - Not Enough $FUN -->
      <p v-if="walletState === 'connected_needs_fun'" class="font-bold w-20">
        {{ $t(`You need more`) }} <span class="text-fpink">{{ $t('$FUN') }}{{ $t('!') }}</span>
      </p>
      <styled-button v-if="walletState === 'connected_needs_fun'" button-style="small"
                     @click.native="$router.push('submit')">
        {{ $t('GET $FUN') }}
      </styled-button>
      <!-- Connected - Not Opted In -->
      <p v-if="walletState === 'connected_not_opted_in'" class="font-bold w-20">
        {{ $t(`Missing out on all the`) }} <span class="text-fpink">{{ $t('$FUN') }} {{ $t('?') }}</span>
      </p>
      <styled-button v-if="walletState === 'connected_not_opted_in'" button-style="small"
                     @click.native="optInToFun()">
        <span v-if="!store.funOptingIn">{{ $t('OPT-IN NOW') }}</span>
        <span v-if="store.funOptingIn">{{ $t('Opting In...') }}</span>
      </styled-button>
      <!-- Not Connected -->
      <p v-if="walletState === 'not_connected'" class="font-bold w-36">
        {{ $t('Connect your wallet to access your') }} <span class="text-fpink">{{ $t('$FUN') }}</span>
      </p>
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
      store: { connected: false, connecting: false, disconnecting: false,
        address: "", nfts: [], pullCost: 0,
        funOptedIn: false, funOptingIn: false, funBalance: "", },
      secondaryColors: {
        'not_connected': 'forange',
        'connected_not_opted_in': 'fyellow',
        'connected_needs_fun': 'fyellow',
        'connected': 'fpink',
      },
    }
  },

  mounted() {
    const storeKeys = Object.keys(this.store)
    this.store = this.subscribe(storeKeys, true)
  },

  computed: {
    primaryColor() {
      return 'fblue'
    },
    secondaryColor() {
      return this.secondaryColors[this.walletState]
    },
    walletState() {
      if (!this.store.connected) return 'not_connected'
      if (!this.store.funOptedIn) return 'connected_not_opted_in'
      if (this.store.funBalance < this.store.pullCost) return 'connected_needs_fun'
      return 'connected'
    },
  },

});
</script>

<style lang="scss">
//@import "@/css/mixins.scss";
</style>

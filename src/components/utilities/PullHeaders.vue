<template>
  <two-rectangles :primary-color="primaryColor" :secondary-color="secondaryColor">

    <template #primary>
      <h4>{{ $t('PULL AN NFT') }}</h4>
      <p class="font-bold">{{ $t('from the pool') }}</p>
    </template>

    <template #secondary>
      <!-- Connected -->
      <p v-if="walletState === 'connected'" class="font-bold w-38">
        {{ $t('Trade in') }} {{ pullCostShort }} {{ $t('$FUN') }} {{ $t('to get a randomized NFT') }}
      </p>
      <!-- Connected - Not Enough $FUN -->
      <p v-if="walletState === 'connected_needs_fun'" class="font-bold w-20">
        {{ $t(`You need more`) }} <span class="text-fpink">{{ $t('$FUN') }}{{ $t('!') }}</span>
      </p>
      <styled-button v-if="walletState === 'connected_needs_fun'" button-style="small"
                     class="mx-4" @click="$router.push('submit')">
        {{ $t('GET $FUN') }}
      </styled-button>
      <!-- Connected - Not Opted In -->
      <p v-if="walletState === 'connected_not_opted_in'" class="font-bold w-20">
        {{ $t(`Missing out on all the`) }} <span class="text-fpink">{{ $t('$FUN') }} {{ $t('?') }}</span>
      </p>
      <styled-button v-if="walletState === 'connected_not_opted_in'" button-style="small"
                     class="mx-4" @click="optInToFun()">
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
import {defaultPoolMetas} from "@/defaults"
import TwoRectangles from "@/components/utilities/TwoRectangles"
import StyledButton from "@/components/utilities/StyledButton"
import StoreMixin from "@/mixins/Store.mixin"
import {formatNumberShort} from "@jackcom/reachduck";

export default defineComponent({
  name: "PullHeaders",

  components: { TwoRectangles, StyledButton },

  mixins: [StoreMixin],

  data() {
    return {
      store: { connected: false, address: "", nfts: [],
        funOptedIn: true, funOptingIn: false, funBalance: "",
        poolMetas: defaultPoolMetas },
      secondaryColors: {
        'not_connected': 'forange',
        'connected_not_opted_in': 'fyellow',
        'connected_needs_fun': 'fyellow',
        'connected': 'fpink',
      },
    }
  },

  computed: {
    primaryColor() {
      return 'fblue'
    },
    secondaryColor() {
      return this.secondaryColors[this.walletState]
    },
    pullCostShort() {
      return formatNumberShort(this.store.poolMetas.current_pull_cost)
    },
    walletState() {
      if (!this.store.connected) return 'not_connected'
      if (!this.store.funOptedIn) return 'connected_not_opted_in'
      if (this.store.funBalance < (this.store?.poolMetas?.current_pull_cost || 6969696969))
        return 'connected_needs_fun'
      return 'connected'
    },
  },

});
</script>

<style lang="scss">
//@import "@/css/mixins.scss";
</style>

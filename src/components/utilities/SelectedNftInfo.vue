<template>
  <div class="wrapper" :class="{'two-rows': twoRows, 'textRight': textRight, 'mobile-only': mobileOnly}">

    <div class="value-label hover:cursor-pointer" @click="goToAsalytic(assetId)">
      <p class="text-fwhite value">{{ assetId }}</p>
      <p class="label">{{ $t('ASA ID') }}</p>
    </div>

    <div class="value-label items-end">
      <p class="text-fyellow value">{{ selectedNft.rarity_rank }} / {{ selectedNft.total_supply }}
        <!--              <img class="inline-block w-4 h-3.5 -mt-1" src="../../assets/icons/Fungibl-F.svg" alt="$FUN Symbol">-->
      </p>
      <p class="label">{{ $t('RARITY') }}</p>
    </div>

    <div class="value-label" :title="selectedNftEstimates.estAlgo">
      <p v-if="selectedNftEstimates.estAlgo" class="text-fblue value">
        {{ selectedNftEstimates.estAlgo }} {{ $t('$ALGO') }}
        <!--              <img class="inline-block w-3.5 h-4 -mt-1" src="../../assets/icons/Algorand-Icon.svg" alt="$ALGO Symbol">-->
      </p>
      <p v-else class="text-fblue value">---</p>
      <p class="label">{{ $t('EST. VALUE') }}</p>
    </div>

<!--    <div class="value-label desktop-only">&nbsp;</div>-->

    <div class="value-label items-end" :title="reward">
      <p v-if="reward" class="text-fpink value">~{{ rewardShort }} {{ $t('$FUN') }}
        <!--              <img class="inline-block w-4 h-3.5 -mt-1" src="../../assets/icons/Fungibl-F.svg" alt="$FUN Symbol">-->
      </p>
      <p v-else class="text-fpink value">---</p>
      <p class="label">{{ $t('EST. REWARD') }}</p>
    </div>

  </div>
</template>
<script>
import {formatNumberShort} from "@jackcom/reachduck";

export default {
  name: 'SelectedNftInfo',
  props: {
    selectedNft: {
      type: Object,
      required: true,
    },
    reward: {
      type: Number,
      required: true,
    },
    selectedNftEstimates: {
      type: Object,
      required: true,
    },
    twoRows: {
      type: Boolean,
      default: false,
    },
    textRight: {
      type: Boolean,
      default: false,
    },
    mobileOnly: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    assetId() {
      const nft = this.selectedNft
      console.log(nft)
      return nft?.fake_mainnet_data?.asset_id || nft.asset_id
    },
    rewardShort() { return formatNumberShort(this.reward || 0) },
  },
  methods: {
    goToAsalytic(assetId) {
      window.open(`https://www.asalytic.app/nft/${assetId}`, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>

.wrapper {
  @apply flex flex-wrap content-between md:content-around text-left;
  .value-label {
    @apply w-full flex flex-col justify-items-end;
    .value {
      @apply text-base md:text-xl font-bolder;
    }
    .label {
      @apply text-fgreen text-xs;
    }

    &.desktop-only {
      @apply hidden md:flex;
    }
  }

  &.two-rows {
    .value-label {
      @apply w-1/2;
    }
  }

  &.textRight {
    @apply text-right;
  }

  &.mobile-only {
    @apply md:hidden;
  }
}

</style>

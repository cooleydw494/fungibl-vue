<template>
  <div class="wrapper">

    <div class="value-label hover:cursor-pointer" @click="goToAsalytic(pulledNft.asset_id)">
      <p class="text-fwhite value">{{ pulledNft.asset_id }}</p>
      <p class="label">{{ $t('ASA ID') }}</p>
    </div>

    <div class="value-label">
      <p class="text-fyellow value">{{ pulledNft.rarity_rank }} / {{ pulledNft.total_supply }}
      </p>
      <p class="label">{{ $t('RARITY') }}</p>
    </div>

    <div class="value-label">&nbsp;</div>

    <div class="value-label">
      <p v-if="pulledNft.submit_est_algo" class="text-fblue value">
        {{ pulledNft.submit_est_algo }} {{ $t('$ALGO') }}
      </p>
      <p class="label">{{ $t('ENTRY EST.') }}</p>
    </div>
    <div class="value-label">
      <p v-if="pulledNft.pull_est_algo" class="text-fblue value">
        {{ pulledNft.pull_est_algo }} {{ $t('$ALGO') }}
      </p>
      <p class="label">{{ $t('EXIT EST.') }}</p>
    </div>

    <div class="value-label">
      <p class="text-faqua value">~{{ relativeValue }}%</p>
      <p class="label">{{ $t('RELATIVE VALUE') }}</p>
    </div>

  </div>
</template>
<script>

export default {
  name: 'PulledNftInfo',
  props: {
    pulledNft: {
      type: Object,
      required: true,
    },
  },
  computed: {
    relativeValue() {
      return Math.round((this.pulledNft.pull_est_algo / this.pulledNft.submit_est_algo) * 100)
    }
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
  @apply flex flex-wrap content-between md:content-around
  rounded border-solid border-2 border-fblue/25;
  .value-label {
    @apply w-1/3 flex flex-col justify-center my-4;
    .value {
      @apply text-base md:text-xl font-bolder;
    }
    .label {
      @apply text-fgreen text-xs;
    }
  }
}

</style>

<template>
  <section class="analytics">
    <div class="first-row">
      <div class="featured-nft">
        <img :src="featuredNftUrl" :alt="$t('Featured Pool NFT')">
      </div>
      <div class="current-metas">
        <div class="metas">
          <div class="meta">
            <div class="value-label">
              <p class="value text-faqua">FUNFT #056</p>
              <p class="label">{{ $t('FEATURED') }}</p>
            </div>
          </div>
          <div class="meta">
            <div class="value-label">
              <p class="value text-faqua">{{ 3458455 }}</p>
              <p class="label">{{ $t('ASA ID') }}</p>
            </div>
          </div>
          <div class="meta">
            <div class="value-label">
              <p class="value">{{ store.poolMetas.current_nft_count }}</p>
              <p class="label">{{ $t('NFT COUNT') }}</p>
            </div>
          </div>
          <div class="meta">
            <div class="value-label">
              <p class="text-fwhite value">{{ costRewardRatio }}</p>
              <p class="label">{{ $t('COST/REWARD RATIO') }}</p>
            </div>
          </div>
          <div class="meta">
            <div class="value-label">
              <p class="text-fpink value">{{ currentPullCostShort }} {{ $t('$FUN') }}</p>
              <p class="label">{{ $t('PULL COST') }}</p>
            </div>
          </div>
          <div class="meta">
            <div class="value-label">
              <p class="text-fpink value">{{ currentAvgRewardShort }} {{ $t('$FUN') }}</p>
              <p class="label">{{ $t('AVG REWARD') }}</p>
            </div>
          </div>
          <div class="meta">
            <div class="value-label">
              <p class="text-fblue value">{{ store.poolMetas.current_pool_value }} {{ $t('$ALGO') }}</p>
              <p class="label">{{ $t('EST POOL VALUE') }}</p>
            </div>
          </div>
          <div class="meta">
            <div class="value-label">
              <p class="text-fblue value">{{ avgNftValue }} {{ $t('$ALGO') }}</p>
              <p class="label">{{ $t('AVG NFT VALUE') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="second-row">
      <div class="chart w-full">
        <FunLineChart class="w-full" ref="funChart" :chartId="'funChart'" :iterations="logs" :minTime="minTime" :maxTime="maxTime" :defaultOpts="[['current_pull_cost', 1], ['current_avg_reward', 2]]"></FunLineChart>
      </div>
<!--        <div class="counts inline-block w-1/5">-->
<!--          {{ JSON.stringify(counts) }}-->
<!--        </div>-->
    </div>
    <div class="third-row">
      <button v-for="(duration, index) in ['30m', '1h', '12h', '1d', '7d', '30d']"
              :key="index"
              @click="changeDuration(duration)"
              :class="{/* bg-purple-200 */'text-fdark bg-fblue/75': this.duration === duration, 'bg-fdark/25': this.duration !== duration}"
              class="m-1 p-1 px-4 rounded text-xxs font-bold"
      >
        {{ duration }}
      </button>
<!--        <button @click="toggleTrendline"-->
<!--                :class="{/* bg-purple-200 */'text-fdark bg-fblue/75': showTrendline, 'bg-fdark/25': !showTrendline}"-->
<!--                class="m-1 p-1 px-2 rounded text-xxs font-bold">-->
<!--          {{ $t(`Trend Line`) }}-->
<!--        </button>-->
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue"
import TopOrLeftPanel from "@/components/utilities/TopOrLeftPanel"
import BottomOrRightPanel from "@/components/utilities/BottomOrRightPanel"
import StyledButton from "@/components/utilities/StyledButton"
import FunLineChart from "@/components/utilities/FunLineChart"
import {defaultPoolMetas} from "@/utilities/defaults"
import {formatNumberShort} from "@jackcom/reachduck"
import moment from 'moment'
import {get} from "@/utilities/api"
import StoreMixin from "@/mixins/Store.mixin"

export default defineComponent({
  components: { TopOrLeftPanel, BottomOrRightPanel, StyledButton, FunLineChart,},
  name: "Analytics",

  mixins: [StoreMixin,],

  data() {
    return {
      store: { connected: false, funBalance: 0, account: null,
        poolMetas: defaultPoolMetas, address: "", assets: [],
        isMobile: window.innerWidth < 768, },
      duration: '1d',
      showTrendline: false,
      latestLogsInterval: null,
      logs: [],
      counts: { 'submits': 0, 'pulls': 0, 'submitRate': 0, },
    }
  },

  mounted() {
    this.getLogs()
  },

  beforeUnmount() {
    if (this.latestLogsInterval) {
      clearInterval(this.latestLogsInterval)
    }
  },

  computed: {
    featuredNftUrl() {
      return 'https://nftstorage.link/ipfs/bafybeih6gl7yqbios3thgyg3ps5e53dv7u477d4oue2uwb5tdshyugogza/25.jpeg'
    },
    maxTime() {
      return moment()
    },
    minTime() {
      switch(this.duration) {
        case '30m':
          return moment().subtract(30, 'minutes').valueOf()
        case '1h':
          return moment().subtract(1, 'hours').valueOf()
        case '12h':
          return moment().subtract(12, 'hours').valueOf()
        case '1d':
          return moment().subtract(1, 'days').valueOf()
        case '7d':
          return moment().subtract(7, 'days').valueOf()
        case '30d':
          return moment().subtract(30, 'days').valueOf()

      }
    },
    avgNftValue() {
      return (this.store.poolMetas.current_pool_value / this.store.poolMetas.current_nft_count).toFixed(2)
    },
    costRewardRatio() {
      return (this.store.poolMetas.current_pull_cost / this.store.poolMetas.current_avg_reward).toFixed(2)
    },
    currentPullCostShort() {
      return formatNumberShort(this.store.poolMetas.current_pull_cost)
    },
    currentAvgRewardShort() {
      return formatNumberShort(this.store.poolMetas.current_avg_reward)
    }
  },

  methods: {
    changeDuration(duration) {
      this.duration = duration
      this.getLogs()
    },
    getLogs() {
      if (this.latestLogsInterval) clearInterval(this.latestLogsInterval)
      get(`pool-metas/logs?duration=${this.duration}`).then((res) => {
        this.logs = res.logs
        this.counts = res.counts
        setTimeout(() => {
          this.$refs.funChart.setChartData()
        }, 250)
        this.latestLogsInterval = setInterval(() => {
          this.getLatestLogs()
        }, 15000)
      }).catch((err) => {
        this.oop(err, 'Something went wrong retrieving Pool Meta Logs')
      })
    },
    getLatestLogs() {
      if (!this.logs.length) return
      const lastIdParam = `?last_log_id=${this.logs[this.logs.length-1].id}`
      get(`pool-metas/latest-logs${lastIdParam}&duration=${this.duration}`).then((res) => {
        if (res.latest_logs.length) {
          this.logs = [...this.logs, ...res.latest_logs]
          this.counts = res.counts
          setTimeout(() => {
            this.$refs.funChart.setChartData()
          }, 250)
        }
      }).catch((err) => {
        this.oop(err, 'Something went wrong retrieving Pool Meta Logs')
      })
    }
  }

})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/css/mixins.scss";

.analytics {
  max-width: 640px;
  @apply w-full mx-auto px-2 xs:px-6 md:px-0;

  .first-row {
    @apply w-full flex justify-between items-stretch;
    .featured-nft {
      @apply inline-block mr-1 border-2 border-solid border-fgreen/25 rounded;
      width: calc(theme('width.2/5') - theme('margin.1'));
      @media(min-width: theme('screens.sm')) {
        width: calc(theme('width.1/4') - theme('margin.1'));
      }
      img {

      }
    }
    .current-metas {
      @apply flex  ml-1 border-2 border-solid border-fblue/25 rounded;
      width: calc(theme('width.3/5') - theme('margin.1'));
      @media(min-width: theme('screens.sm')) {
        width: calc(theme('width.3/4') - theme('margin.1'));
      }

      .metas {
        @apply flex flex-wrap p-4;
        .meta {
          @apply flex w-1/2 sm:w-1/4;
          .value-label {
            min-width: theme('width.4/5');
            @apply mx-auto;
            .value { @apply text-xs font-bolder mb-0.5; }
            .label { @apply text-2xs font-normal text-fgreen mb-2; }
          }
        }
      }
    }
  }

  .second-row {
    @apply w-full mt-2 py-2 text-fwhite bg-fdark/25 border-solid border-2 border-fblue/25 rounded;
  }

  .third-row {
    @apply flex justify-between py-1 px-3 mb-4 bg-fdarkblue text-fwhite
    border-solid border-2 border-fblurple/25 rounded;
  }

}

</style>

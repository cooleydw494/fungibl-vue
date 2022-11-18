<template>
  <div class="text-fwhite">
    <div>
<!--      <button-->
<!--          class="w-16 bg-blue-200 px-2 py-1 m-1 rounded text-xxs"-->
<!--          @click="this.shouldDraw = !this.shouldDraw"-->
<!--      >-->
<!--        {{ this.shouldDraw ? 'Pause' : 'Draw' }}-->
<!--      </button>-->
      <div class="flex justify-between py-1 px-3 mb-4">
        <button v-for="(opt, index) in Object.values(datasetOpts)"
                :key="index"
                @click="toggleDatasetOpt(opt)"
                :class="{/* bg-purple-200 */'text-fdark': opt.state > 0, 'bg-fdark/25': opt.state === 0}"
                class="m-1 p-1 rounded text-xxs font-bold"
                :style="optStyles(opt)"
        >
          {{ opt.title }}
        </button>
      </div>
    </div>
    <Line
        ref="chart"
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="chartId"
        :plugins="null"
        :css-classes="null"
        :styles="null"
        :width="null"
        :height="null"
    >
    </Line>
  </div>
</template>
<script>
// import {LineController} from 'chart.js'
import {Line} from 'vue-chartjs'
import gradient from 'chartjs-plugin-gradient'
import chartTrendline from "chartjs-plugin-trendline"
import annotationPlugin from "chartjs-plugin-annotation"
import {colors} from "@/tailwindExports.ts"
import {
  Chart as ChartJS,
  Title, Tooltip, Legend, LinearScale, CategoryScale, PointElement,
  LineElement, Filler, TimeScale,
} from 'chart.js'
import 'chartjs-adapter-moment'
import moment from 'moment'
ChartJS.register(
    // First-party
    Title, Tooltip, Legend, LinearScale, CategoryScale, PointElement,
    LineElement, Filler, TimeScale,
    // Third-party
    gradient, chartTrendline, annotationPlugin,
    // Pizza-party
    // (lol)
)

export default {
  name: 'FunLineChart',
  components: {Line},
  props: {

    chartId: {
      type: String,
      default: 'funChart1',
    },

    iterations: { // The chart's data.datasets
      type: Array,
      default() {
        return [
          {'cost_reward_ratio': 1, 'current_pool_value': 10500},
          {'cost_reward_ratio': 1.2, 'current_pool_value': 8000},
          {'cost_reward_ratio': 1.1, 'current_pool_value': 12000},
          {'cost_reward_ratio': .9, 'current_pool_value': 10000}
        ]
      },
    },

    eventLabels: {
      type: Object,
      default() { return { rugs: [], fungibleDumps: [], betaDumps: [], lowValFloods: [], highValFloods: [] } },
    },

    defaultOpts: {
      type: Array,
      default() { return [] },
    },

    minTime: {
      required: true,
    },
    maxTime: {
      required: true,
    },
    showTrendline: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      chartData: {},
      chartOptions: {},
      datasetOpts: {
        current_pull_cost: { name: 'current_pull_cost', 'title': 'Pull Cost', state: 0, compatibleRanges: ['current_avg_reward']},
        current_avg_reward: { name: 'current_avg_reward', 'title': 'Avg Reward', state: 0, compatibleRanges: ['current_pull_cost']},
        cost_reward_ratio: { name: 'cost_reward_ratio', 'title': 'Cost/Reward', state: 0, compatibleRanges: []},
        current_pool_value: { name: 'current_pool_value', 'title': 'Pool Value', state: 0, compatibleRanges: []},
        current_nft_count: { name: 'current_nft_count', 'title': 'Pool Count', state: 0, compatibleRanges: []},
        avg_nft_value: { name: 'avg_nft_value', 'title': 'Avg NFT Val', state: 0, compatibleRanges: []},
        // submissionBias: { name: 'submissionBias', 'title': 'Submit Bias', state: 0, compatibleRanges: []},
        // maxPoolVolatility: { name: 'maxPoolVolatility', 'title': 'Max Volatility', state: 0, compatibleRanges: []},
        // positiveVolatilityBias: { name: 'positiveVolatilityBias', 'title': 'Volatility Bias', state: 0, compatibleRanges: []},
      },
      shouldDraw: true,
      gradients: [
        {
          backgroundColor: {
            axis: 'y',
            indexedColors: {
              0: 'rgba(216, 255, 122, 0.5)',
              1: 'rgba(216, 255, 122, 0.45)',
              2: 'rgba(216, 255, 122, 0)'
            },
            colors: {}, // populate based on range dynamically
          },
          borderColor: colors['fgreen'],
        },
        {
          backgroundColor: {
            axis: 'y',
            indexedColors: {
              0: 'rgba(50, 194, 251, 0.9)',
              1: 'rgba(50, 194, 251, 0.45)',
              2: 'rgba(50, 194, 251, 0)'
            },
            colors: {}, // populate based on range dynamically
          },
          borderColor: colors['fblue'],
        },
      ]
    }
  },
  async mounted() {
    this.defaultOpts.forEach((defaultOpt) => {
      this.datasetOpts[defaultOpt[0]].state = defaultOpt[1]
    })
    this.setChartOptions(true)
    this.setChartData(true)
    // let tries = 0
    // do {
    //   tries++
    //   await this.sleep(250)
    // } while (this.iterations.length && tries < 10)
    // this.setChartOptions(true)
    // this.setChartData(true)
  },
  beforeUnmount() {
    this.$refs.chart.destroy()
  },
  computed: {
    enabledOpts() {
      return Object.values(this.datasetOpts).filter(opt => opt.state > 0)
    },
    enabledOptCount() {
      return Object.keys(this.enabledOpts).length
    },
    optStyles() {
      return (opt) => {
        let style = opt.state > 0 ?
            `background-color: ${this.gradients[opt.state-1].borderColor};`
            : ``
        return style
      }
    },
  },
  methods: {
    setChartData(init = false) {
      let datasets = []

      Object.values(this.enabledOpts).forEach((opt) => {
        let data = this.arrayOfProp(this.iterations, opt.name, true)
        if (data.length) {
          const plotInactivity = data[data.length-1]
          plotInactivity['x'] = moment().valueOf()
          data = [...data, plotInactivity]
        }
        let propOnlyData = this.arrayOfProp(this.iterations, opt.name, false)
        let min = Math.min(...propOnlyData)
        let max = Math.max(...propOnlyData)
        let mid = Math.round((((min + max) / 2) * 1e2) / 1e2)
        let gradient = this.gradients[opt.state-1]
        gradient.backgroundColor.colors = {}
        gradient.backgroundColor.colors[min] = gradient.backgroundColor.indexedColors[0]
        gradient.backgroundColor.colors[mid] = gradient.backgroundColor.indexedColors[1]
        gradient.backgroundColor.colors[max] = gradient.backgroundColor.indexedColors[2]

        let dataset = {
          label: opt.title,
          data: data,
          gradient: gradient,
          fill: true,
          borderColor: gradient.borderColor,
          lineTension: .05,
          borderWidth: 2,
          yAxisID: 'y_'+opt.name,
          xAxisID: 'created_at',
          // trendlineLinear: {
          //   colorMin: gradient.borderColor,
          //   colorMax: gradient.borderColor,
          //   lineStyle: "dotted", // dotted or solid
          //   width: 2,
          //   projection: false,
          // },
        }

        datasets.push(dataset)
      })

      this.chartData = {
        datasets: datasets,
      }
    },
    setChartOptions(init = false) {
      let chartOptions = {
        scales: {
          created_at: {
            axis: 'x',
            type: 'time',
            time: {
              // unit: 'hour',
              // round: 'hour',
              displayFormats: {
                hour: 'H:mm',
                day: 'MM-DD',
              }
            },
            min: this.minTime,
            max: this.maxTime,
            title: {
              color: colors['fwhite'],
            },
            ticks: {
              source: 'optimal',
            }
          },
        },
        elements: {
          point: {
            radius: 0,
          },
        },
        plugins: {
          decimation: {
            enabled: true,
            algorithm: 'min-max',
            // samples: 1,
          },
          legend: {
            display: false,
          },
          annotation: {
            annotations: {},
          },
        },
        responsive: true,
      }

      let min = null
      let max = null
      let minFirst = 0
      let minSecond = 0
      let maxFirst = 200000
      let maxSecond = 200000
      let enabledOpts = this.enabledOpts
      let dataFirst = this.arrayOfProp(this.iterations, enabledOpts[0].name)
      if (dataFirst.length !== 0) {
        minFirst = Math.min(...dataFirst)
        maxFirst = Math.max(...dataFirst)
      }
      if (enabledOpts.length === 2) {
        let dataSecond = this.arrayOfProp(this.iterations, enabledOpts[1].name)
        if (dataSecond.length !== 0) {
          minSecond = Math.min(...dataSecond)
          maxSecond = Math.max(...dataSecond)
        }
        if (enabledOpts[0].compatibleRanges.indexOf(enabledOpts[1].name) > -1) {
          min = minFirst < minSecond ? minFirst : minSecond
          max = maxFirst > maxSecond ? maxFirst : maxSecond
        }
      }

      Object.values(enabledOpts).forEach((opt, index) => {
        chartOptions.scales['y_'+opt.name] = {
          type: 'linear',
          display: true,
          position: index === 0 ? 'left' : 'right',
          min: min || (index === 0 ? minFirst : minSecond),
          max: max || (index === 0 ? maxFirst : maxSecond),
          title: {
            display: true,
            text: opt.title,
            color: colors['fwhite'],
          }
        }

        if (opt.name === 'cost_reward_ratio') {
          chartOptions.plugins.annotation = {
            annotations: {
              costRewardRatioGoalLine: {
                type: 'line',
                yMin: 1,
                yMax: 1,
                yScaleID: 'y_'+opt.name,
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
              },
              costRewardRatioGoalLabel: {
                type: 'label',
                xValue: this.iterations.length / 18,
                yValue: 1,
                yScaleID: 'y_'+opt.name,
                backgroundColor: 'rgba(255,150,150,.85)',
                content: ['Parity'],
                font: {
                  size: 9,
                },
                borderRadius: .25,
                padding: 1,
              },
            }
          }
        }
      })

      // if (this.enabledOptCount > 0 && this.currentIteration) {
      //   let firstOptName = enabledOpts[0].name
      //
      //   Object.values(this.eventLabels.betaDumps).forEach(((betaDump, index) => {
      //     chartOptions.plugins.annotation.annotations[`betaDump${index}`] = {
      //       type: 'label',
      //       xValue: betaDump.iteration,
      //       yValue: betaDump[firstOptName],
      //       yScaleID: firstOptName,
      //       backgroundColor: 'rgba(255,216,1,.85)',
      //       content: [`Beta`], //`100%`
      //       font: {
      //         size: 9,
      //       },
      //       borderRadius: .25,
      //       padding: 1,
      //     }
      //   }))
      //
      //   Object.values(this.eventLabels.fungibleDumps).forEach(((fungibleDump, index) => {
      //     chartOptions.plugins.annotation.annotations[`fungibleDump${index}`] = {
      //       type: 'label',
      //       xValue: fungibleDump.iteration,
      //       yValue: fungibleDump[firstOptName],
      //       yScaleID: firstOptName,
      //       backgroundColor: 'rgba(255,100,255,.85)',
      //       content: [`Vest`], //`${fungibleDump.vestRate}%`
      //       font: {
      //         size: 9,
      //       },
      //       borderRadius: .25,
      //       padding: 1,
      //     }
      //   }))
      //
      //   Object.values(this.eventLabels.rugs).forEach(((rug, index) => {
      //     chartOptions.plugins.annotation.annotations[`rug${index}`] = {
      //       type: 'label',
      //       xValue: rug.iteration,
      //       yValue: rug[firstOptName],
      //       yScaleID: firstOptName,
      //       backgroundColor: 'rgba(255,73,73,0.85)',
      //       content: [`RUG`], //`${rug.rugPercentage}%`
      //       font: {
      //         size: 9,
      //       },
      //       borderRadius: .25,
      //       padding: 1,
      //     }
      //   }))
      //
      //   Object.values(this.eventLabels.lowValFloods).forEach(((lowValFlood, index) => {
      //     chartOptions.plugins.annotation.annotations[`lowValFlood${index}`] = {
      //       type: 'label',
      //       xValue: lowValFlood.iteration,
      //       yValue: lowValFlood[firstOptName],
      //       yScaleID: firstOptName,
      //       backgroundColor: 'rgb(255,115,73)',
      //       content: [`LF`], //`${rug.rugPercentage}%`
      //       font: {
      //         size: 9,
      //       },
      //       borderRadius: .25,
      //       padding: 1,
      //     }
      //   }))
      //
      //   Object.values(this.eventLabels.highValFloods).forEach(((highValFlood, index) => {
      //     chartOptions.plugins.annotation.annotations[`highValFlood${index}`] = {
      //       type: 'label',
      //       xValue: highValFlood.iteration,
      //       yValue: highValFlood[firstOptName],
      //       yScaleID: firstOptName,
      //       backgroundColor: 'rgb(64,255,43)',
      //       content: [`HF`], //`${rug.rugPercentage}%`
      //       font: {
      //         size: 9,
      //       },
      //       borderRadius: .25,
      //       padding: 1,
      //     }
      //   }))
      // }

      this.chartOptions = chartOptions
    },
    toggleDatasetOpt(opt) {
      if (opt.state === 0 && this.enabledOptCount === 2) { return }
      let newState = 0
      switch (opt.state) {
        case 0:
          newState = 1
              break
        case 1:
          newState = 2
              break
        default:
          newState = 0
      }

      this.datasetOpts[opt.name].state = newState

      this.setChartData()
      this.setChartOptions()
    },
    arrayOfProp(arrayOfObj, prop, includeCreatedAt = false) {
      // arrayOfObj.map(x => x.prop) is nicer, but way less efficient
      let arrayOfProp = []
      const length = arrayOfObj.length
      let val = null
      for(let i = 0; i < length; i++) {
        if (prop === 'cost_reward_ratio') {
          val = arrayOfObj[i]['current_pull_cost'] / arrayOfObj[i]['current_avg_reward']
        } else if (prop === 'avg_nft_value') {
          val = arrayOfObj[i]['current_pool_value'] / arrayOfObj[i]['current_nft_count']
        } else {
          val = arrayOfObj[i][prop]
        }
        if (includeCreatedAt) {
          const obj = {}
          obj['x'] = moment(arrayOfObj[i].created_at).valueOf()
          obj['y'] = val
          arrayOfProp.push(obj)
        } else {
          arrayOfProp.push(val)
        }
      }
      return arrayOfProp
    },
  },
}
</script>

<style scoped>

</style>

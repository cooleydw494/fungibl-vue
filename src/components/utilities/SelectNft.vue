<template>
  <div class="w-full flex justify-center">
    <div class="w-full max-w-96 flex flex-col" :class="{'justify-between': store.selectedNftId, 'justify-around': !store.selectedNftId }">
      <select class="select mt-16" id="selectNft" v-model="selected" :disabled="!enabled"
              @change="setSelected(parseInt($event.target.value))"
              :class="{'md:mt-0': store.selectedNftId, 'md:mt-8': !store.selectedNftId }">
        <option v-if="!store.selectedNft" value="null" class="option">{{ $t('SELECT AN NFT') }}</option>
        <!--      <option v-if="store.selectedNft.length" value="null" class="option">{{ $t('SELECT ANOTHER NFT') }}</option>-->
        <option v-for="nft in selectableNfts" :key="nft['asset-id']" :value="nft['asset-id']" class="option">{{ nft.label }}</option>
      </select>

      <div v-if="store.selectedNftId" class="mt-8 md:min-h-48 flex flex-col justify-center">
        <div class="flex justify-between">
          <div>
            <p class="text-fblue text-xl font-bolder">{{ store.selectedNftEstimates.estAlgo }}
              <img class="inline-block w-3.5 h-4 -mt-1" src="../../assets/icons/Algorand-Icon.svg" alt="$ALGO Symbol">
            </p>
            <p class="text-fgreen text-xs">ESTIMATED VALUE</p>
          </div>
          <div :title="reward">
            <p class="text-fpink text-xl font-bolder">~{{ rewardShort }}
              <img class="inline-block w-4 h-3.5 -mt-1" src="../../assets/icons/Fungibl-F.svg" alt="$FUN Symbol">
            </p>
            <p class="text-fgreen text-xs">REWARD</p>
          </div>
        </div>
      </div>

      <div v-if="store.selectedNftId" class="w-full flex justify-between mt-8">
        <styled-button button-style="cancel" @click="reInitialize()">
          {{ $t('CANCEL') }}
        </styled-button>
        <styled-button button-style="primary" @click="initSubmission()">
          {{ $t('SUBMIT') }}
        </styled-button>
      </div>
    </div>

    <modal :override-show="showSubmissionModal" name="submission" @close="closeSubmissionModal()" center>
      <div class="max-w-2xl text-center min-h-60vh">

        <img v-if="['not_submitting'].includes(submitState)" class="illustration"
             src="../../assets/illustrations/submit/Submit-1.svg"
             :alt="`${$t('Submit Illustration')} 1`">
        <img v-if="['creating', 'initializing'].includes(submitState)" class="illustration animate-pulse"
             src="../../assets/illustrations/submit/Submit-2.svg"
             :alt="`${$t('Submit Illustration')} 2`">
<!--        <img v-if="['initializing'].includes(submitState)" class="illustration animate-pulse"-->
<!--             src="../../assets/illustrations/submit/Submit-3.svg"-->
<!--             :alt="`${$t('Submit Illustration')} 3`">-->
        <img v-if="['transferring'].includes(submitState)" class="illustration animate-pulse"
             src="../../assets/illustrations/submit/Submit-3.svg"
             :alt="`${$t('Submit Illustration')} 3`">
        <img v-if="['done'].includes(submitState)" class="illustration"
             src="../../assets/illustrations/submit/Submit-5.svg"
             :alt="`${$t('Submit Illustration')} 5`">

        <h2 v-if="submitState === 'not_submitting'" class="text-fblue font-extrabold mb-6">ARE YOU SURE?</h2>
        <h2 v-if="submitState === 'creating'" class="text-fblue font-extrabold mb-6">CREATING CONTRACT</h2>
        <h2 v-if="submitState === 'initializing'" class="text-fblue font-extrabold mb-6">INITIALIZING</h2>
        <h2 v-if="submitState === 'transferring'" class="text-fblue font-extrabold mb-6">TRANSFERRING</h2>
        <h2 v-if="submitState === 'done'" class="text-fblue font-extrabold mb-6">SUCCESS!</h2>


        <div v-if="submitState !== 'done'" class="text-fblue mb-8">
          <h5>You'll send 1 NFT to a smart contract</h5>
          <h5>and will receive <span class="text-fpink">~{{ rewardShort }} {{ $t('$FUN') }}</span></h5>
        </div>
        <div v-if="submitState !== 'done'" class="text-fyellow text-sm font-semibold mb-12">
          <p>Be aware that while estimates are based on</p>
          <p>very recent information, outcomes may vary</p>
        </div>

        <div v-if="submitState === 'not_submitting'" class="w-full flex justify-between mt-6">
          <styled-button button-style="cancel" @click="closeSubmissionModal()">
            {{ $t('CANCEL') }}
          </styled-button>
          <styled-button button-style="primary" @click="submitSelectedNft">
            {{ $t('SUBMIT') + $t('!') }}
          </styled-button>
        </div>
        <h2 v-if="submitState !== 'not_submitting' && submitState !== 'done'" class="text-faqua font-extrabold mb-6">CANNONBALL!</h2>

        <div v-if="submitState === 'done'">
          <h5 class="text-fblue mb-12">You will receive <span class="text-fpink">~{{ finalizedRewardShort }} {{ $t('$FUN') }}</span> momentarily</h5>
          <styled-button button-style="primary wide" @click="reInitialize()">
            {{ $t('DONE') }}
          </styled-button>
        </div>

      </div>
    </modal>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import StyledButton from "@/components/utilities/StyledButton"
import StoreMixin from "@/mixins/Store.mixin"
import store from "@/state"
import {nftImageLoading} from "@/state"
import {defaultPoolMetas} from "@/defaults"
import {formatNumberShort} from "@jackcom/reachduck";
import {useReach} from "@/reach";
import * as backend from "@/reach/contracts/build/index.main.mjs"
import {post} from "@/api"
import Modal from "@/components/utilities/Modal";

export default defineComponent({
  name: "SelectNft",
  components: { StyledButton, Modal },


  // components: { vSelect },

  mixins: [StoreMixin],

  data() {
    return {
      store: {
        address: "", nfts: [], selectedNft: null, selectedNftId: null,
        selectedNftEstimates: { estAlgo: 0 }, poolMetas: defaultPoolMetas,
        account: null,
      },
      selected: null,
      showSubmissionModal: false,
      // 'creating', 'initializing', 'transferring', 'done'
      submitState: 'not_submitting',
      finalizedReward: null,
      contractInfo: null,
      ctc: null,
    }
  },

  mounted() {
    this.selected = this.store.selectedNftId
  },

  computed: {
    enabled() {
      return this.store.nfts.length
    },
    selectableNfts() {
      return this.store.nfts
      // for when multi-select
      // return this.store.nfts.filter((nft) => {
      //   return nft['asset-id'] !== this.store.selectedNftId
      // })
    },
    reward() {
      let estAlgo = this.store.selectedNftEstimates?.estAlgo
      const reward = this.store.poolMetas.app_supply_fun
          * (estAlgo / (this.store.poolMetas.current_pool_value + estAlgo))
      // We always round down on estimates/rewards, we like to keep things
      // neat and this defaults in favor of $FUN holders.
      return Math.floor(reward)
    },
    rewardShort() { return formatNumberShort(this.reward) },
    finalizedRewardShort() { return formatNumberShort(this.finalizedReward) }
  },

  methods: {
    closeSubmissionModal(force = false) {
      this.showSubmissionModal =
          !(['not_submitting', 'done'].includes(this.submitState) || force)
      if (!this.showSubmissionModal) this.submitState = 'not_submitting'
    },
    reInitialize() {
      this.getPoolMetas(false)
      this.sleep(5000).then(() => this.getFunUserInfo())
      store.selectedNft(null)
      store.selectedNftId(null)
      store.selectedNftEstimates({ estAlgo: 0 })
      this.selected = null
      this.contractInfo = null
      this.finalizedReward = null
      this.closeSubmissionModal(true)
    },
    setSelected(nftId) {
      nftImageLoading(nftId)
      store.selectedNftId(nftId)
      store.selectedNft((this.store.nfts.filter(nft => nft['asset-id'] === nftId))[0])
      store.selectedNftEstimates({ estAlgo: Math.floor(Math.random() * 240) + 10 })
    },
    initSubmission() {
      this.finalizedReward = this.reward // TODO: this needs to happen after database stuff
      this.showSubmissionModal = true
    },
    async submitSelectedNft() {
      this.submitState = 'creating'
      this.ctc = this.store.account.contract(backend)
      this.stdLib = await useReach()
      await this.stdLib.withDisconnect(() => backend.Submitter(this.ctc, this)
          .catch((err) => {
            this.oop(err, 'Contract incomplete')
            this.reInitialize()
          }))
    },

    // The rest of these methods are triggered by Reach
    initializing() { this.submitState = 'initializing' },
    signingTransfer() { this.submitState = 'transferring' },
    async submitSuccess(assetId) {
      this.contractInfo = JSON.stringify(await this.ctc.getInfo(), null, 2)
      console.log('assetId', assetId)
      console.log('selectedNftId', this.store.selectedNftId)
      console.log('contractInfo', this.contractInfo)
      if (assetId != this.store.selectedNftId) {
        this.oop(null,`Asset ID of selected nft does not match asset id from contract. Contact support. IMPORTANT! Save this contract info and include in support ticket (also in console): ${this.contractInfo}`)
        return
      }
      await post('nfts/add-to-pool',
          { nfts: [{...this.store.selectedNft, estimated_value: this.store.selectedNftEstimates.estAlgo, contract_info: this.contractInfo }] })
          .then(() => {
            store.nfts(this.store.nfts.filter(nft => nft['asset-id'] !== this.store.selectedNftId))
            this.submitState = 'done'
          }).catch((err) => {
            this.oop(null,`Failed to sync NFT add with database / send $FUN. Contact support. IMPORTANT! Save this contract info and include in support ticket (also in console): ${this.contractInfo}`)
            this.reInitialize()
          })
      // this.stdLib.disconnect()
    },
    getNftAssetId() {
      return this.store.selectedNftId
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

  &#disabled {
    @apply bg-gray-400 cursor-not-allowed;
  }

  //.option {
  //  @apply bg-fwhite border-solid border-2 border-fblue/50;
  //
  //  &:hover, &:active {
  //    @apply bg-fgreen;
  //  }
  //}
}

.illustration {
  @apply w-64 h-auto mx-auto mb-8;
}

</style>

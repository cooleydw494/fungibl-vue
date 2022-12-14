<template>
  <page-container>
    <div class="panel-container">
      <top-or-left-panel>
        <div class="icon-container mobile">
          <!-- Image Mobile -->
          <img src="../../assets/illustrations/pull/Pull-1.svg" :alt="$t('Pull Illustration')">
          <h5 class="pool-count mobile">{{ store.poolMetas.current_nft_count }} {{ $t('NFTs') }}</h5>
        </div>
        <pull-headers></pull-headers>
      </top-or-left-panel>
      <bottom-or-right-panel>
        <!-- Image Desktop -->
        <div class="icon-container desktop md:-mt-32">
          <img src="../../assets/illustrations/pull/Pull-1.svg" :alt="$t('Pull Illustration')">
          <div class="flex justify-center">
            <h5 class="pool-count desktop">{{ store.poolMetas.current_nft_count }} {{ $t('NFTs') }}</h5>
          </div>
        </div>
        <div class="w-full text-center pt-16 md:pt-0">
          <styled-button button-style="primary wide" :disabled="walletState !== 'connected'"
                         @click="initPull">
            {{ $t('PULL') + $t('!') }}
          </styled-button>
        </div>
      </bottom-or-right-panel>
    </div>

    <modal v-if="showPullModal" @close="closePullModal()" center>
      <div class="max-w-2xl text-center">

        <img v-if="['not_pulling'].includes(pullState)" class="illustration"
             src="../../assets/illustrations/pull/Pull-1.svg"
             :alt="`${$t('Pull Illustration')} 1`">
        <img v-if="['attaching'].includes(pullState)" class="illustration animate-pulse"
             src="../../assets/illustrations/pull/Pull-2.svg"
             :alt="`${$t('Pull Illustration')} 2`">
        <img v-if="['opting_in'].includes(pullState)" class="illustration animate-pulse"
             src="../../assets/illustrations/pull/Pull-3.svg"
             :alt="`${$t('Pull Illustration')} 3`">
        <img v-if="['sending_fun', 'transferring_fun', 'transferring_nft'].includes(pullState)" class="illustration animate-pulse"
             src="../../assets/illustrations/pull/Pull-4.svg"
             :alt="`${$t('Pull Illustration')} 4`">

        <div v-if="pullState === 'done'" class="w-full flex justify-center">
          <nft-image :nft="pulledNftShim" class="mb-2"
                     :nft-image-loading="!!store.nftImagesLoading[pulledNftId]"
                     :image-width="pulledNftImageWidth"
                     :image-kit-url="pulledNftImageKitUrl">
          </nft-image>
        </div>

        <h2 v-if="pullState === 'not_pulling'" class="text-fblue font-extrabold mb-6">ARE YOU SURE?</h2>
        <h2 v-if="pullState === 'attaching'" class="text-fblue font-extrabold mb-6">ATTACHING TO CONTRACT</h2>
        <h2 v-if="pullState === 'sending_fun'" class="text-fblue font-extrabold mb-6">EXCHANGING $FUN AND ?NFT?</h2>
        <h2 v-if="pullState === 'opting_in'" class="text-fblue font-extrabold mb-6">OPTING IN</h2>
        <h2 v-if="pullState === 'transferring_fun'" class="text-fblue font-extrabold mb-6">TRANSFERRING $FUN TO <span class="text-fpink">FUNGIBL</span></h2>
        <h2 v-if="pullState === 'transferring_nft'" class="text-fblue font-extrabold mb-6">TRANSFERRING ?NFT? TO YOU</h2>
        <h2 v-if="pullState === 'done'" class="text-fblue font-extrabold mb-6"><span class="text-fpink">???</span> SAY HELLO TO <span class="text-fgreen">{{ pulledNftId }}</span> <span class="text-fpink">???</span></h2>


        <div v-if="pullState !== 'done'" class="text-fblue mb-12">
          <h5>You'll trade in <span class="text-fpink">~{{ finalizedPullCostShort || pullCostShort }} {{ $t('$FUN') }}</span></h5>
          <h5>for 1 randomized NFT</h5>
        </div>

        <div v-if="pullState === 'not_pulling'" class="mt-6 md:mt-0 md:min-w-96 flex justify-between">
          <styled-button button-style="cancel" @click="closePullModal()">
            {{ $t('CANCEL') }}
          </styled-button>
          <styled-button button-style="primary" @click="pull()">
            {{ $t('PULL') + $t('!') }}
          </styled-button>
        </div>
        <h2 v-if="pullState !== 'not_pulling' && pullState !== 'done'" class="text-faqua font-extrabold mb-6">LANDING A BIG ONE!</h2>

        <div v-if="pullState === 'done'">
          <h5 class="text-fblue mb-12">You will receive <span class="text-fgreen">{{ pulledNftId }}</span> momentarily</h5>
          <styled-button button-style="primary wide" @click="reInitialize(true)">
            {{ $t('DONE') }}
          </styled-button>
        </div>

      </div>
    </modal>
  </page-container>
</template>

<script>
import { defineComponent } from "vue"
import PageContainer from "../utilities/PageContainer.vue"
import TopOrLeftPanel from "@/components/utilities/TopOrLeftPanel"
import BottomOrRightPanel from "@/components/utilities/BottomOrRightPanel"
import PullHeaders from "@/components/utilities/PullHeaders"
import StyledButton from "@/components/utilities/StyledButton"
import Modal from "@/components/utilities/Modal"
import NftImage from "@/components/utilities/NftImage"
import {defaultPoolMetas} from "@/defaults"
import {formatNumberShort} from "@jackcom/reachduck"
import {nftImageLoading} from "@/state"
import {get, post} from "@/api"
import * as backend from "@/reach/contracts/build/index.main.mjs"
import ImageKitMixin from "@/mixins/ImageKit.mixin";

export default defineComponent({
  components: { PageContainer, TopOrLeftPanel, BottomOrRightPanel, PullHeaders,
  StyledButton, Modal, NftImage },
  name: "Pull",

  mixins: [ImageKitMixin],

  data() {
    return {
      store: { connected: false, funBalance: 0, funOptedIn: true, account: null,
        poolMetas: defaultPoolMetas, nftImagesLoading: {}, address: "",
        assets: [], },
      showPullModal: false,
      // attaching, sending_fun, transferring_fun, transferring_nft, done
      pullState: 'not_pulling',
      pulledNftId: null,
      finalizedPullCost: null,
      optInToken: null,
    }
  },

  computed: {
    walletState() {
      if (!this.store.connected) return 'not_connected'
      if (!this.store.funOptedIn) return 'connected_not_opted_in'
      if (this.store.funBalance < this.store.poolMetas.current_pull_cost)
        return 'connected_needs_fun'
      return 'connected'
    },
    finalizedPullCostShort() {
      return this.finalizedPullCost ? formatNumberShort(this.finalizedPullCost) : null
    },
    pullCostShort() {
      return formatNumberShort(this.store.poolMetas.current_pull_cost)
    },
    pulledNftShim() {
      const id = this.pulledNftId
      return id ? { 'asset-id' : id, name: id } : null
    },
    pulledNftImageWidth() {
      return window.innerWidth < 768 ? 76 : 96
    },
    pulledNftImageKitUrl() {
      return this.imageKitUrl(
          `${this.pulledNftId}.png`,
          this.spacingToPixels(this.pulledNftImageWidth)
      )
    }
  },

  methods: {
    closePullModal(force = false) {
      this.showPullModal =
          !(['not_pulling', 'done'].includes(this.pullState) || force)
      if (!this.showPullModal) this.pullState = 'not_pulling'
    },
    reInitialize(refreshData = false) {
      if (refreshData) {
        this.sleep(5000).then(() => {
          this.getAssets(true)
          this.getFunUserInfo()
        })
      }
      this.pulledNftId = null
      this.finalizedPullCost = null
      this.optInToken = null
      this.closePullModal(true)
    },
    initPull() { this.showPullModal = true },
    async pull() {
      this.pullState = 'attaching'
      const contractInfo = JSON.parse(await this.getRandomContractInfo())
      this.ctc = this.store.account.contract(backend, contractInfo)
      await backend.Puller(this.ctc, this)
          .catch((err) => {
            this.oop(err, 'Contract incomplete')
            this.reInitialize()
          })
    },
    async getRandomContractInfo() {
      const res = await get('random-contract-info').catch(err => {
        this.oop(err, 'Failed to fetch random NFT contract')
      })
      this.finalizedPullCost = res.finalized_pull_cost
      this.optInToken = res.opt_in_token
      return res.contract_info
    },

    // The rest of these methods are triggered by Reach
    async sendingTokenToContract() {
      console.log('sendingTokenToContract')
      this.pullState = 'opting_in'
      const acceptsToken = await this.store.account.tokenAccepted(this.optInToken)
      if (!acceptsToken) await this.store.account.tokenAccept(this.optInToken)
      this.pullState = 'sending_fun'
    },
    transferringTokenToFungiblApp() {
      console.log('transferringTokenToFungiblApp')
      this.pullState = 'transferring_fun'
    },
    transferringNftToPuller() {
      console.log('transferringNftToPuller')
      this.pullState = 'transferring_nft'
    },
    getPullCost() { return this.finalizedPullCost },
    getFunToken() { return this.FUN_ASSET_ID },
    getFungiblAppWallet() { return this.FUNGIBL_APP_WALLET },
    pullSuccess(nftAssetId) {
      this.pulledNftId = nftAssetId
      nftImageLoading(nftAssetId)
      this.pullState = 'done'
      // TODO: will need to split this off when implementing a more secure flow
      // post(`nfts/${nftAssetId}/pulled`).catch(err => {
      //   this.oop(err, 'Database was not informed of NFT pull, ' +
      //       'please notify Fungibl of this for the good of humanity')
      // })
    },
  }

})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/css/mixins.scss";

@include panel-container();

.pool-count {
  @apply text-fgreen mx-auto mt-2 text-center md:mb-6;

  &.mobile {
    @apply md:hidden;
  }

  &.desktop {
    @apply hidden md:inline-block;
  }
}

.icon-container {
  @apply w-5/12 md:w-64 lg:w-76 h-auto ml-4;

  &.mobile {
    @apply md:hidden;
  }

  &.desktop {
    @apply hidden md:inline-block mx-auto;
  }
}

.illustration {
  @apply w-76 h-auto mx-auto mb-8;
}

</style>

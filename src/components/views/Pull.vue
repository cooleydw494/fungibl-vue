<template>
  <page-container>
    <div class="panel-container">
      <top-or-left-panel>
        <img class="icon" src="../../assets/icons/Pull-Icon-Blue.svg" :alt="$t('Pull Icon - Click to Switch to Submit')">
        <pull-headers></pull-headers>
      </top-or-left-panel>
      <bottom-or-right-panel>
        <div class="flex justify-center mb-14">
          <h3 class="text-fpink" :title="store.poolMetas.current_pull_cost">
            {{ pullCostShort }} {{ $t('$FUN') }}
          </h3>
        </div>
        <div class="w-full text-center">
          <styled-button button-style="connect" :disabled="walletState !== 'connected'"
                         @click="initPull">
            {{ $t('PULL') }}
          </styled-button>
        </div>
      </bottom-or-right-panel>
    </div>

    <modal v-if="showPullModal" @close="closePullModal()" center>
      <div class="max-w-2xl text-center">

        <div v-if="pullState === 'done'">
          <nft-image :nft="pulledNftShim" class="mb-2"
                     :nft-image-loading="!!store.nftImagesLoading[pulledNftId]"
                     :image-width="pulledNftImageWidth"
                     :image-kit-url="pulledNftImageKitUrl">
          </nft-image>
        </div>

        <h2 v-if="pullState === 'not_pulling'" class="text-fblue font-extrabold mb-6">ARE YOU SURE?</h2>
        <h2 v-if="pullState === 'attaching'" class="text-fblue font-extrabold mb-6">ATTACHING TO CONTRACT</h2>
        <h2 v-if="pullState === 'sending_fun'" class="text-fblue font-extrabold mb-6">FUNDING CONTRACT WITH $FUN</h2>
        <h2 v-if="pullState === 'transferring_fun'" class="text-fblue font-extrabold mb-6">TRANSFERRING $FUN TO <span class="text-fpink">FUNGIBL</span></h2>
        <h2 v-if="pullState === 'transferring_nft'" class="text-fblue font-extrabold mb-6">TRANSFERRING ?NFT? TO YOU</h2>
        <h2 v-if="pullState === 'done'" class="text-fblue font-extrabold mb-6"><span class="text-fpink">♥</span> SAY HELLO TO <span class="text-fgreen">{{ pulledNftId }}</span> <span class="text-fpink">♥</span></h2>


        <div v-if="pullState !== 'done'" class="text-fblue mb-12">
          <h5>You'll trade in <span class="text-fpink">~{{ pullCostShort }} {{ $t('$FUN') }}</span></h5>
          <h5>for 1 randomized NFT</h5>
        </div>

        <div v-if="pullState === 'not_pulling'">
          <styled-button button-style="connect" @click="closePullModal()">
            {{ $t('CANCEL') }}
          </styled-button>
          <styled-button button-style="connect" @click="pull()" class="mt-6 md:mt-0 md:ml-8">
            {{ $t('PULL') }}
          </styled-button>
        </div>
        <h2 v-if="pullState !== 'not_pulling' && pullState !== 'done'" class="text-faqua font-extrabold mb-6">LANDING A BIG ONE!</h2>

        <div v-if="pullState === 'done'">
          <h5 class="text-fblue mb-12">You will receive <span class="text-fgreen">{{ pulledNftId }} momentarily</span></h5>
          <styled-button button-style="connect" @click="reInitialize()">
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
import StoreMixin from "@/mixins/Store.mixin"
import {nftImageLoading} from "@/state"
import {post} from "@/api"
import * as backend from "@/reach/contracts/build/index.main.mjs"

export default defineComponent({
  components: { PageContainer, TopOrLeftPanel, BottomOrRightPanel, PullHeaders,
  StyledButton, Modal, NftImage },
  name: "Pull",

  mixins: [StoreMixin],

  data() {
    return {
      store: { connected: false, funBalance: 0, funOptedIn: true,
        poolMetas: defaultPoolMetas},
      showPullModal: false,
      // attaching, sending_fun, transferring_fun, transferring_nft, done
      pullState: 'not_pulling',
      pulledNftId: null,
      finalizedPullCost: null,
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
          this.spacingToPixels(this.selectedNftImageWidth)
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
          this.getAssets()
          this.getFunUserInfo()
        })
      }
      this.pulledNftId = null
      this.finalizedPullCost = null
      this.closePullModal(true)
    },
    initPull() { this.showPullModal = true },
    async pull() {
      this.pullState = 'attaching'
      const contractInfo = await this.getRandomContractInfo()
      this.ctc = this.store.account.contract(contractInfo)
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
      return res.contract_info
    },

    // The rest of these methods are triggered by Reach
    sendingTokenToContract() { this.pullState = 'sending_fun' },
    transferringTokenToFungiblApp() { this.pullState = 'transferring_fun' },
    transferringNftToPuller() { this.pullState = 'transferring_nft' },
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

.icon {
  @apply w-32 h-32 ml-8;
}
</style>

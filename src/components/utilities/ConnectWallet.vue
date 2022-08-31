<template>
  <div>
    <styled-button :button-style="'connect'" @click="toggleConnect">
      <div class="content-container">
        <img class="icon" src="../../assets/icons/Wallet-Icon.svg" :alt="$t('Wallet Icon')">
        {{ connectButtonText }}
      </div>
    </styled-button>
    <modal v-if="showWalletSelect" @close="showWalletSelect = false" center>
      <div v-for="(provider, index) in providers" :key="index" class="mb-8">
        <styled-button button-style="connect" darker-bg @click.native="connectTo(provider.value)">{{ provider.name }}</styled-button>
      </div>
    </modal>
  </div>
</template>

<script>
import {  truncateString } from "@jackcom/reachduck"
import { defineComponent } from "@vue/runtime-core"
import StoreMixin from "@/mixins/Store.mixin"
import {
  disconnectWallet,
  connectWallet,
  } from "@/reach"
import {loadStdlib} from "@reach-sh/stdlib"
import { get, post } from "@/api"
import StyledButton from "./StyledButton.vue"
import Modal from "./Modal"
import {useIndexerClient} from "@jackcom/reachduck/lib/networks/ALGO.indexer"
import store from "@/state"

export default defineComponent({
  name: "ConnectWallet",

  components: { StyledButton, Modal },

  mixins: [StoreMixin],

  data: () => ({
    store: { address: "", account: null, },
    connecting: false,
    disconnecting: false,
    showWalletSelect: false,
    providers: [
      { name: "MyAlgo", value: "MyAlgo" },
      { name: "Pera Wallet", value: "PeraConnect" },
      { name: "WalletConnect", value: "WalletConnect" },
    ],
    txns: [],
  }),

  computed: {
    connectButtonText() {
      if (this.connecting) return 'Connecting...'
      if (this.disconnecting) return 'Disconnecting...'
      return this.walletIsConnected
        ? truncateString(this.store.address)
        : "CONNECT WALLET"
    },

    walletIsConnected() {
      return this.store.address.length > 0
    },
  },

  mounted() {
    const storeKeys = Object.keys(this.store)
    this.subscribe(storeKeys)
  },

  methods: {
    toggleConnect() {
      if (this.walletIsConnected) {
        this.disconnecting = true
        return disconnectWallet()
      }
      this.showWalletSelect = true
    },
    async connectTo(provider) {
      this.showWalletSelect = false
      this.connecting = true
      await connectWallet(provider).then(() => {
        get(`auth/request-challenge/${this.store.address}`).then(async res => {
          const needsAuth = !localStorage.getItem('funJwt')
              || localStorage.getItem('funAuthWallet') !== this.store.address
          if (needsAuth) localStorage.removeItem('funAuthWallet')
          let actions = needsAuth
              ? [await this.initWalletStuff(), await this.authForApi(res.challenge)]
              : [await this.initWalletStuff()]
          await Promise.all(actions)
          this.connecting = false
        })
      }).catch(err => {
        alert(err)
        this.connecting = false
      })
    },
    async initWalletStuff() {
      const assetsRes = await useIndexerClient()
          .lookupAccountAssets(this.store.address).do()
      console.log(assetsRes)
      return assetsRes
    },
    async authForApi(challenge) {
      try {
        const reach = loadStdlib()

        // const opts = {
        //   decimals: 0,
        //   supply: 1000000000,
        //   url: 'https://fungibl.algo.xyz',
        //   clawback: 'VNDWDGQYUBUDSS6R24JPQOUYHBUOKXD6JOFUSAWEHWQEZDS2BUFE5OASZY',
        //   freeze: 'VNDWDGQYUBUDSS6R24JPQOUYHBUOKXD6JOFUSAWEHWQEZDS2BUFE5OASZY',
        //   reserve: 'D7277RRGZ6PJZ2WA4BTWJGZ43BGCSTAKZ4ZUBVWNFELJTYAPHKVD2IURDQ',
        //   note: this.str2arr('Creating the $FUN token for Fungibl App on the Algorand Testnet Network'),
        // }
        // const tokenResponse = await reach.launchToken(this.store.account, 'FUN', 'FUN', opts)
        // console.log(tokenResponse)

        reach.setSigningMonitor(async (evt, pre, post) =>
            this.txns.push({evt, pre: await pre, post: await post}))
        await reach.transfer(this.store.account, this.store.account, 0, null, {note: this.str2arr(challenge)})
        do {
          await this.sleep(100)
        } while (this.txns.length === 0)
        const reachTxn = this.txns[0].evt[0].txn
        const accountTxns = await useIndexerClient()
            .lookupAccountTransactions(this.store.address).limit(1).do()
        const txn = accountTxns.transactions[0]
        txn.txn = reachTxn
        post('auth/login', {
          algorand_address: this.store.address, signed_tx: JSON.stringify(txn)
        }).then(res => {
          localStorage.setItem('funJwt', res.access_token)
          localStorage.setItem('funAuthenticatedWallet', this.store.address)
        }).catch(err => {
          alert('Issue with login transaction. You were not logged in to the API.')
          this.connecting = false
        })
      } catch (err) {
        console.log(err)
        alert(`Failed to sign authentication challenge transaction: ${JSON.stringify(err.message)}`)
        this.connecting = false
      }
    },
  },
})
</script>

<style lang="scss">
@import "@/css/mixins.scss";

.icon {
  @apply inline-block h-auto w-5 mr-4;
}

.content-container {
  @apply flex place-content-center;
}

</style>

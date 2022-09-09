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
          <styled-button button-style="connect" :disabled="walletState !== 'connected'">
            {{ $t('PULL') }}
          </styled-button>
        </div>
      </bottom-or-right-panel>
    </div>
  </page-container>
</template>

<script>
import { defineComponent } from "vue"
import PageContainer from "../utilities/PageContainer.vue"
import TopOrLeftPanel from "@/components/utilities/TopOrLeftPanel"
import BottomOrRightPanel from "@/components/utilities/BottomOrRightPanel"
import PullHeaders from "@/components/utilities/PullHeaders"
import StyledButton from "@/components/utilities/StyledButton";
import {defaultPoolMetas} from "@/defaults";
import {formatNumberShort} from "@jackcom/reachduck";

export default defineComponent({
  components: { PageContainer, TopOrLeftPanel, BottomOrRightPanel, PullHeaders,
  StyledButton, },
  name: "Pull",

  data() {
    return {
      store: { connected: false, funBalance: 0, funOptedIn: true,
        poolMetas: defaultPoolMetas}
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
    }
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

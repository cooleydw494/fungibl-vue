<template>
  <page-container>
    <div>
      <top-or-left-panel>
        <img class="icon" src="../../assets/icons/Pull-Icon-Blue.svg" :alt="$t('Pull Icon - Click to Switch to Submit')">
        <pull-headers></pull-headers>
      </top-or-left-panel>
      <bottom-or-right-panel>

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

export default defineComponent({
  components: { PageContainer, TopOrLeftPanel, BottomOrRightPanel, PullHeaders },
  name: "Pull",
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/css/mixins.scss";

.icon {
  @apply w-32 h-32 ml-8;
}
</style>

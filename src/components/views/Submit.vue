<template>
  <page-container>
    <div class="panel-container">

      <!--No NFT Selected-->
      <top-or-left-panel v-if="!store.selectedNftId">
        <img class="icon" src="../../assets/icons/Submit-Icon-Blue.svg" :alt="$t('Submit Icon - Click to Switch to Pull')">
        <submission-headers></submission-headers>
      </top-or-left-panel>

      <!--NFT Selected-->
      <top-or-left-panel v-if="store.selectedNftId">
        <img class="icon" src="../../assets/icons/Submit-Icon-Blue.svg" :alt="$t('Submit Icon - Click to Switch to Pull')">
        <submission-headers></submission-headers>
      </top-or-left-panel>

      <bottom-or-right-panel>
        <select-nft></select-nft>
      </bottom-or-right-panel>

    </div>
  </page-container>
</template>

<script>
import { defineComponent } from "vue"
import PageContainer from "../utilities/PageContainer.vue"
import TopOrLeftPanel from "@/components/utilities/TopOrLeftPanel"
import BottomOrRightPanel from "@/components/utilities/BottomOrRightPanel"
import SubmissionHeaders from "@/components/utilities/SubmissionHeaders"
import SelectNft from "@/components/utilities/SelectNft";
import StoreMixin from "@/mixins/Store.mixin"

export default defineComponent({

  components: {
    PageContainer, TopOrLeftPanel, BottomOrRightPanel, SubmissionHeaders,
    SelectNft,
  },

  name: "Submit",

  mixins: [StoreMixin],

  data: () => ({
    store: { selectedNftId: null, selectedNft: null, },
  }),

  mounted() {
    const storeKeys = Object.keys(this.store)
    this.subscribe(storeKeys)
  },

});
</script>

<style scoped lang="scss">
@import "@/css/mixins.scss";

@include panel-container();

.icon {
  @apply w-32 h-32 ml-8;
}

</style>

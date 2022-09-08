<template>
  <page-container>
    <div class="panel-container">

      <top-or-left-panel>
        <!--No NFT Selected-->
        <img v-if="!store.selectedNftId" class="icon" src="../../assets/icons/Submit-Icon-Blue.svg" :alt="$t('Submit Icon - Click to Switch to Pull')">
        <submission-headers v-if="!store.selectedNftId"></submission-headers>
        <!--NFT Selected-->
        <selected-nft v-if="store.selectedNftId"></selected-nft>
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
import SelectNft from "@/components/utilities/SelectNft"
import SelectedNft from "@/components/utilities/SelectedNft";
import ImageKitMixin from "@/mixins/ImageKit.mixin"

export default defineComponent({

  components: {
    PageContainer, TopOrLeftPanel, BottomOrRightPanel, SubmissionHeaders,
    SelectNft, SelectedNft,
  },

  name: "Submit",

  mixins: [ImageKitMixin],

  data: () => ({
    store: { selectedNftId: null, },
  }),

});
</script>

<style scoped lang="scss">
@import "@/css/mixins.scss";

@include panel-container();

.icon {
  @apply w-32 h-32 ml-8;
}

</style>

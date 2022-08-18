<template>
  <page-container>
    <div>
      <top-or-left-panel>
        <img class="icon" src="../../assets/icons/Submit-Icon.svg" :alt="$t('Submit Icon')">
        <two-rectangles primary-color="fblue" secondary-color="forange">
          <template #primary>
            <h4>SUBMIT AN NFT</h4>
            <p class="font-bold">to the pool to get <span class="text-fpink">$FUN</span></p>
          </template>
          <template #secondary>
            <p class="font-bold">Connect your wallet</p>
            <p class="font-bold">To browse NFTs from</p>
            <p class="font-bold">your collection</p>
          </template>
        </two-rectangles>
      </top-or-left-panel>
      <bottom-or-right-panel>

      </bottom-or-right-panel>
    </div>
  </page-container>
</template>

<script>
import { defineComponent } from "vue";
import PageContainer from "../utilities/PageContainer.vue";
import TopOrLeftPanel from "@/components/utilities/TopOrLeftPanel";
import BottomOrRightPanel from "@/components/utilities/BottomOrRightPanel";
import TwoRectangles from "@/components/utilities/TwoRectangles";

export default defineComponent({
  components: { PageContainer, TopOrLeftPanel, BottomOrRightPanel, TwoRectangles },
  name: "Submit",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/css/mixins.scss";

.icon {
  width: $sp-32;
  height: $sp-32;
  margin-left: $sp-8;
}
</style>

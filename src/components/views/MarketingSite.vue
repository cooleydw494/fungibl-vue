<template>
  <page-container>
    <div class="principal-image">
      <img src="../../assets/illustrations/PrincipalLight.png"
           :alt="$t('Fungibl Principal Illustration - Aquatic Scene')">
<!--      <img class="twitter-icon"-->
<!--           src="../../assets/icons/Twitter-Icon.svg" :alt="$t('Twitter Icon')" />-->
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
  name: "MarketingSite",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/css/mixins.scss";

.principal-image {

  @apply flex justify-center overflow-y-hidden rounded
  inline-block relative m-auto
  w-full md:w-11/12 lg:w-4/5 2xl:w-3/5 3xl:w-1/2 h-100vh md:h-80vh;

  img {
    @apply absolute bottom-0 xl:-bottom-15vh 3xl:-bottom-3;
    @apply h-100vh md:h-auto w-full;
    //bottom: -15vh;
  }

  //.twitter-icon {
  //  @apply hidden md:inline-block w-8 fixed bottom-2;
  //}
}

</style>

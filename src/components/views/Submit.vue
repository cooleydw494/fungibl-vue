<template>
  <page-container>
    <div>
      <top-or-left-panel>
        <img class="icon" src="../../assets/icons/Submit-Icon-Blue.svg" :alt="$t('Submit Icon - Click to Switch to Pull')">
        <submission-headers></submission-headers>
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
import SubmissionHeaders from "@/components/utilities/SubmissionHeaders"
import StoreMixin from "@/mixins/Store.mixin"

export default defineComponent({

  components: { PageContainer, TopOrLeftPanel, BottomOrRightPanel, SubmissionHeaders },

  name: "Submit",

  mixins: [StoreMixin],

  // data: () => ({
  //   store: { /* add anything this component uses */ },
  // }),

  // mounted() {
  //   const storeKeys = Object.keys(this.store)
  //   this.subscribe(storeKeys)
  // },

});
</script>

<style scoped lang="scss">
@import "@/css/mixins.scss";

.icon {
  @apply w-32 h-32 ml-8;
}

</style>

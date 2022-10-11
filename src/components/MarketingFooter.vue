<template>
  <footer :class="{'is-mobile' : store.isMobile}">
    <div class="flex justify-center z-50">
      <styled-button button-style="nav-filled-mobile"
                     @click="launchApp">
        {{ $t('LAUNCH APP') + $t('!') }}
      </styled-button>
    </div>
  </footer>
</template>

<script>
import { defineComponent } from "vue"
import StyledButton from "./utilities/StyledButton.vue"
import StoreMixin from "@/mixins/Store.mixin"
import state from "@/state"

export default defineComponent({
  name: "MarketingFooter",
  components: { StyledButton, },

  mixins: [StoreMixin],

  data() {
    return { store: { showPreviewModal: false, isMobile: window.innerWidth < 768, } }
  },

  methods: {
    launchApp() {
      state.showPreviewModal('launch')
      // const appUrl = `https://${this.isStaging()?'staging-':''}app.fungibl.fun`
      // window.open(appUrl, '_blank')
    },
  }

});
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

footer {
  @apply w-full flex flex-col justify-start items-center;
  min-height: 15%;

  &.is-mobile {
    @apply pt-6;
    bottom: 15%;
  }
}
</style>

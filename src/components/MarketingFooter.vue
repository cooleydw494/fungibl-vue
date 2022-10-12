<template>
  <footer :class="{'is-mobile' : store.isMobile}">
    <div class="button-container" :class="{'hide': !topOfPage && !store.showMobileMenu}">
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

  props: {
    topOfPage: {
      type: Boolean,
      default: true,
    }
  },

  data() {
    return { store: { showPreviewModal: false, showMobileMenu: false,
        isMobile: window.innerWidth < 768, } }
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
    @apply fixed -bottom-5 z-10 pt-6;

    .button-container {
      @apply flex justify-center z-50 opacity-100;
      transition: opacity 0.5s linear;
      &.hide {
        @apply opacity-0 pointer-events-none;
      }
    }
  }
}
</style>

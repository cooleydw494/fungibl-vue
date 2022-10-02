<template>
  <footer :class="{'is-mobile' : mobile}">
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
    return { innerWidth: window.innerWidth, store: { showPreviewModal: false } }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },

  computed: {
    mobile() {
      return this.innerWidth < 768
    }
  },

  methods: {
    launchApp() {
      state.showPreviewModal('launch')
      // const appUrl = `https://${this.isStaging()?'staging-':''}app.fungibl.fun`
      // window.open(appUrl, '_blank')
    },
    onResize() {
      this.innerWidth = window.innerWidth
    }
  }

});
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

footer {
  @apply w-full min-h-15vh flex flex-col justify-start items-center;

  &.is-mobile {
    @apply -mt-15vh;
  }
}
</style>

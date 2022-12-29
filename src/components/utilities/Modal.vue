<template>
  <section v-show="showModal" class="modal" tabindex="0" @keydown.esc="close"
           :class="{'center': center, 'full-dark': fullDark, 'low-z': lowZ, 'off': !currentlyShowing}"
           :style="`${bgUrlStyle} transition: opacity ${opacityTime} ease-out; ${opacityStyle}`"
  >
    <div class="slot">
      <slot />
    </div>
    <div v-if="closeButton" class="w-full flex justify-center px-4">
      <styled-button v-if="!store.isMobile" button-style="primary wide mt-12" @click="setModal(null)">
        {{ $t('CLOSE') }}
      </styled-button>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import state from "@/state"
import StyledButton from "@/components/utilities/StyledButton"
import StoreMixin from "@/mixins/Store.mixin"

export default defineComponent({
  name: "Modal",

  mixins: [StoreMixin],

  components: { StyledButton, },

  props: {
    name: {
      type: String,
      required: true,
    },
    overrideShow: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
    fullDark: {
      type: Boolean,
      default: false,
    },
    bgUrl: {
      type: String,
      default: null,
    },
    lowZ: {
      type: Boolean,
      default: false,
    },
    opacityTime: {
      type: String,
      default: '0.25s',
    },
    opacityTimeClose: {
      type: String,
      required: false,
    },
    noLogo: {
      type: Boolean,
      default: false,
    },
    closeButton: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return { opacityStyle: 'opacity: 0;', animatingOut: false,
      currentlyShowing: false, store: { currentModal: null, }, }
  },

  computed: {
    showModal() {
      const justOpened = (this.store.currentModal === this.name || this.overrideShow)
          && !this.currentlyShowing
      const justClosed = (this.store.currentModal !== this.name && !this.overrideShow)
          && this.currentlyShowing
      if (justOpened) this.justOpened()
      if (justClosed) this.justClosed()
      return this.store.currentModal || this.overrideShow || this.animatingOut
    },
    bgUrlStyle() {
      if (!this.bgUrl) return ''
      return `background: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url("${this.bgUrl}") center, center; background-size: 100% 100%;`
    }
  },

  methods: {
    open() {
      // this can be done elsewhere, just one way to do it
      state.currentModal(this.name)
    },
    close() {
      // this can be done elsewhere, just one way to do it
      state.currentModal(null)
    },
    justOpened() {
      this.currentlyShowing = true
      this.$emit('open')
      setTimeout(() => { this.opacityStyle = 'opacity: 1' }, 25)
    },
    async justClosed() {
      this.currentlyShowing = false
      this.$emit('close')
      this.animatingOut = true
      this.opacityStyle = 'opacity: 0'
      await this.sleep(parseFloat(this.opacityTimeClose || this.opacityTime) * 1000)
      this.animatingOut = false
    },
  }
});
</script>

<style lang="scss">
@import "@/css/mixins.scss";

.modal {
  @apply z-40 fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-fdarkblue/98;

  &.center {
    @apply flex flex-col place-content-center place-items-center;
  }

  &.full-dark {
    @apply bg-fdarkblue;
  }

  &.low-z {
    z-index: 9;
  }

  &.off {
    @apply z-0 pointer-events-none;
  }
}
</style>

<template>
  <section v-if="store.currentModal === name || animatingOut" class="modal" tabindex="0" @keydown.esc="close"
           :class="{'center': center, 'full-dark': fullDark, 'low-z': lowZ}"
           :style="`${bgUrlStyle} transition: opacity ${opacityTime} ease-out; ${opacityStyle}`"
  >
    <div class="slot">
      <slot />
    </div>
  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import state from "@/state"
import StoreMixin from "@/mixins/Store.mixin"

export default defineComponent({
  name: "Modal",

  mixins: [StoreMixin],

  props: {
    name: {
      type: String,
      required: true,
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
    simple: {
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
    }
  },

  data() {
    return { opacityStyle: 'opacity: 0;', animatingOut: false,
      store: { currentModal: null, }, }
  },

  mounted() {
    console.log('mounted')
    if (this.simple) {
      this.opacityStyle = 'opacity: 1;'
    }
  },

  computed: {
    bgUrlStyle() {
      if (!this.bgUrl) return ''
      return `background: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url("${this.bgUrl}") center, center; background-size: 100% 100%;`
    }
  },

  methods: {
    open() {
      state.currentModal(this.name)
      setTimeout(() => { this.opacityStyle = 'opacity: 1' }, 25)
      this.$emit('open')
    },
    async close() {
      if (!this.simple) {
        this.opacityStyle = 'opacity: 0'
      }
      this.animatingOut = true
      state.currentModal(null)
      this.$emit('close')
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
}
</style>

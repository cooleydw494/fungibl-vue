<template>
  <section class="page" :class="{'marketing': isMarketingSite, 'mobile': store.isMobile}">
    <slot />
  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import StoreMixin from "@/mixins/Store.mixin"

export default defineComponent({
  name: "PageContainer",

  mixins: [StoreMixin, ],

  data() {
    return { store: { isMobile: window.innerWidth < 768, }, }
  },

  computed: {
    isMarketingSite() {
      return window.location.hostname.indexOf('app') === -1
    },
  },
})
</script>

<style lang="scss">
@import "@/css/mixins.scss";

.page {
  height: 70%;
  &.mobile {
    height: 65%;
  }
  &.marketing {
    height: 80%;
    &.mobile {
      height: 100%;
    }
  }
  justify-content: flex-start;
  margin: 0 auto;
  padding: 0;
  text-align: left;

  > h1,
  > h2,
  > h3,
  > h4,
  > h5,
  > h6 {
    margin: 0.5rem 0;
  }

  > hr {
    background-color: $faqua;
    border: 0;
    height: 1px;
    margin: 1.5rem 0;
    opacity: 0.6;
  }
}
</style>

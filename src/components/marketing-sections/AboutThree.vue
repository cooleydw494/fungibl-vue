<template>
  <section id="about" class="section-wrapper" :class="{'mobile': isMobile}">

    <div class="content">
      <div class="main-text">
        <span v-html="$t('whatIsFungibl')"></span>
      </div>
    </div>

  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "AboutThree",

  props: {
    isMobile: {
      type: Boolean, // avoid using StoreMixin
      required: true,
    }
  },

  data() { /* */ },

  computed: { /* */ },

  methods: { /* */ },
})
</script>

<style lang="scss">
@import "@/css/mixins.scss";

.section-wrapper {

  @apply relative w-100vw mt-12 md:mt-24 mx-auto;
  max-width: 1920px;

  .content {
    @apply w-5/6 2xl:w-2/3 mx-auto;
    .main-text {
      span, strong {
        @apply text-2xl lg:text-3xl 3xl:text-4xl font-medium;
        font-stretch: 115%;
        line-height: 1.5;
      }
      @apply inline-block w-4/5 lg:w-2/3
      mt-24 sm:mt-36 2xl:mt-64;
    }
  }

}


</style>

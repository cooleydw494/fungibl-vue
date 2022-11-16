<template>
  <section id="marketing-footer" class="section-wrapper">

    <div class="content">

      <div class="links">
      </div>

      <div class="copyright">
        <h6 class="text-fwhite">&copy; FUNGIBL {{ currentYear }}</h6>
      </div>
      <p class="text-xs mt-2">This site is protected by reCAPTCHA and the Google
        <a href="https://policies.google.com/privacy">Privacy Policy</a> and
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>

    </div>

  </section>
</template>

<script>
import {defineComponent} from "@vue/runtime-core"

export default defineComponent({
  name: "MarketingFooter",

  props: {
    isMobile: {
      type: Boolean, // avoid using StoreMixin
      required: true,
    }
  },

  computed: {
    currentYear() {
      const date = new Date()
      return date.getFullYear()
    }
  },

})
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

.section-wrapper {

  @apply relative w-100vw pt-24 md:pt-36 pb-6 mx-auto;
  max-width: 1920px;

  .content {
    @apply w-full text-center;

    .copyright {
      @apply w-full font-light;
      font-stretch: 115%;
    }
  }

}


</style>

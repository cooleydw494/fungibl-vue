<template>
  <header>
    <div class="logo-container">
      <div class="logo">
        <img :alt="$t('Fungibl Logo')" src="../assets/Logo-Full.svg" />
      </div>
    </div>
    <div class="button-container">
      <styled-button v-for="(item, index) in navItems" :key="index"
                     :button-style="item.action === 'launch' ? 'nav-filled' : 'nav'"
                     @click="takeAction(item.action)">
        {{ $t(item.label) }}
      </styled-button>
    </div>
  </header>
</template>

<script lang="js">
import { defineComponent } from "vue"
import StyledButton from "@/components/utilities/StyledButton"

export default defineComponent({
  name: "MarketingNav",
  components: { StyledButton },

  data() {
    return {
      navItems: [
        { label: 'ABOUT', action: '#about' },
        { label: '$FUN', action: '#fun' },
        { label: 'BLOG', action: '#blog' },
        { label: 'FAQ', action: '#faq' },
        { label: 'CONTACT', action: '#contact' },
        { label: 'LAUNCH!', action: 'launch' },
      ],
    }
  },

  computed: {
    //
  },

  methods: {
    takeAction(action) {
      if (action === 'launch') {
        const appUrl = `https://${this.isStaging()?'staging-':''}app.fungibl.fun`
        window.open(appUrl, '_blank')
        return
      }
      // const el = document.getElementById(action)
      document.getElementById(action).scrollIntoView({ behavior: "smooth" })
    },
  },

})
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

header {
  @apply w-full min-h-15vh p-4;

  @media(min-width: theme('screens.md')) {
    @apply min-h-15vh;
  }

  .logo-container {
    @apply flex justify-around items-center pt-6;
    .logo {
      @apply z-50 my-0 mx-8;
      img {
        @apply w-full h-auto;
      }
    }
  }

  .button-container {
    @apply w-11/12 lg:w-4/5 2xl:w-3/5 3xl:w-1/2
    flex justify-between items-center mx-auto mt-8;
  }
}
</style>

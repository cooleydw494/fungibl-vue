<template>
  <header :class="{'mobile': mobile, 'menu-open': showMobileMenu || store.showPreviewModal}"
          :style="mobile ? `margin-bottom: -${innerHeight*.15}px`:``">

    <div v-if="mobile" class="flex justify-between place-items-center z-50">
      <img v-if="showMobileMenu || store.showPreviewModal" class="w-22 pt-2 pl-2"
           src="../assets/icons/Fungibl-Logo-Stacked-White.svg"
           :alt="$t('Fungibl Logo Square')">
      <img v-else class="w-22 pt-2 pl-2"
           src="../assets/icons/Fungibl-Logo-Stacked-Black.svg"
           :alt="$t('Fungibl Logo Square')">
      <img v-if="showMobileMenu || store.showPreviewModal" class="w-16 -mt-2 pr-2 hover:cursor-pointer"
           @click="toggleMobileMenu"
           src="../assets/icons/Close-Icon.svg" :alt="$t('Close Menu')">
      <img v-else class="w-18 -mt-2.5 pr-1 hover:cursor-pointer"
           @click="toggleMobileMenu"
           src="../assets/icons/Hamburger.svg" :alt="$t('Open Menu')">
    </div>

    <!-- DESKTOP -->
    <div v-if="!mobile" class="logo-container">
      <div class="logo">
        <img :alt="$t('Fungibl Logo')" src="../assets/Logo-Full.svg" />
      </div>
    </div>
    <div v-if="!mobile" class="button-container">
      <styled-button v-for="(item, index) in [...navItems, { label: 'LAUNCH!', action: 'launch' }]"
                     :key="index" @click="takeAction(item.action)"
                     :button-style="item.label === 'LAUNCH!' ? 'nav-filled' : 'nav'"
                     >
        {{ $t(item.label) }}
      </styled-button>
    </div>

    <modal v-show="showMobileMenu" @close="toggleMobileMenu"
           center mobile-menu :bg-url="imageKitPrincipalDarkUrl">
      <div class="button-container mobile">
        <styled-button class="mb-12"
                       v-for="(item, index) in navItems" :key="index"
                       :button-style="item.label === 'LAUNCH!' ? 'nav-filled-mobile' : 'nav-mobile'"
                       @click="takeAction(item.action)">
          {{ $t(item.label) }}
        </styled-button>
      </div>
      <img :src="imageKitPrincipalDarkUrl" style="display:none;" alt="hidden" rel="prefetch">
    </modal>

    <modal v-if="store.showPreviewModal" @close="closePreviewModal" center>
      <div class="text-lg font-bold text-center">
        <p><span class="font-bolder">Curious?</span> We're getting ready to tell you</p>
        <p>E V E R Y T H I N G you want to know.</p>
        <p class="mt-12">We're pumped to be launching the full site soon!</p>
        <p>In the meantime be sure to follow us on Twitter</p>
        <p>and check out the blog post.</p>
      </div>
      <div class="font-semibold text-base text-fblue text-center hover:cursor-pointer mt-12"
           @click="openTwitter">
        <p>
          <img class="twitter-icon"
               src="../assets/icons/Twitter-Icon.svg" :alt="$t('Twitter Icon')" />
          {{ $t('We appreciate your early support,') }}</p>
        <p>{{ $t('it encourages us to work hard for #algofam') }}</p>
      </div>
      <div class="w-full flex justify-center">
        <styled-button v-if="!mobile" button-style="primary mt-12" @click="closePreviewModal">
          {{ $t('CLOSE') }}
        </styled-button>
      </div>
    </modal>

  </header>
</template>

<script>
import { defineComponent } from "vue"
import Modal from "@/components/utilities/Modal"
import StyledButton from "@/components/utilities/StyledButton"
import state from "@/state"
import ImageKitMixin from "@/mixins/ImageKit.mixin";

export default defineComponent({
  name: "MarketingNav",
  components: { StyledButton, Modal, },

  mixins: [ImageKitMixin],

  data() {
    return {
      navItems: [
        { label: 'ABOUT', action: '#about' },
        { label: '$FUN', action: '#fun' },
        { label: 'BLOG', action: '#blog' },
        { label: 'FAQ', action: '#faq' },
        { label: 'CONTACT', action: '#contact' },
      ],
      showMobileMenu: false,
      store: { showPreviewModal: false, },
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    }
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
    },
    imageKitPrincipalDarkUrl() {
      return this.imageKitUrl(
          `PrincipalDark.png`,
          `${this.innerWidth}`,
          'https://ik.imagekit.io/fungibl/web-resources',
          { aspectRatio: 'auto' }
      )
    }
  },

  methods: {
    takeAction(action) {
      if (action === 'launch') {
        state.showPreviewModal('launch')
        // const appUrl = `https://${this.isStaging()?'staging-':''}app.fungibl.fun`
        // window.open(appUrl, '_blank')
        return
      }
      if (action === '#blog') {
        const blogUrl = 'https://nobody-algo.medium.com/whats-the-deal-with-fungibl-56f370d0e990'
        window.open(blogUrl, '_blank')
        return
      }
      state.showPreviewModal(action)
      // document.getElementById(action).scrollIntoView({ behavior: "smooth" })
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
      state.showPreviewModal(false)
    },
    onResize() {
      this.innerWidth = window.innerWidth
    },
    openTwitter() {
      window.open('https://twitter.com/FungiblApp', '_blank')
    },
    closePreviewModal() {
      state.showPreviewModal(false)
    }
  },

})
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

header {
  @apply w-full p-4;

  @media(max-width: theme('screens.md')) {
    height: 15%;
  }

  @media(min-width: theme('screens.md')) {
    @apply z-10;
    min-height: 15%;
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
    flex justify-between items-center mx-auto mt-8 pb-12 md:pb-0;

    @media(max-height: theme('screens.sm')) {
      @apply pb-36;
    }

    &.mobile {
      @apply flex-col;
    }
  }
}

.twitter-icon {
  @apply inline-block w-8 mr-2;
}

</style>

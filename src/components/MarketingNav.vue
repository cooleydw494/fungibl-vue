<template>
  <header :class="{'mobile': store.isMobile, 'menu-open': store.showMobileMenu || store.showPreviewModal}"
          :style="store.isMobile ? `margin-bottom: -${store.innerHeight*.15}px`:``">

    <div v-if="store.isMobile && store.loadedMarketingBg" class="mobile-nav-header">
      <img v-if="store.showMobileMenu || store.showPreviewModal" class="stacked-logo"
           :class="{'hide': !store.showPreviewModal && !store.showMobileMenu}"
           src="../assets/icons/Fungibl-Logo-Stacked-White.svg"
           :alt="$t('Fungibl Logo Square')">
      <img class="stacked-logo"
           :class="{'scrolled-down': !topOfPage, 'hide': store.showPreviewModal || store.showMobileMenu || !topOfPage}"
           src="../assets/icons/Fungibl-Logo-Stacked-Black.svg"
           :alt="$t('Fungibl Logo Square')">
      <img v-if="store.showMobileMenu || store.showPreviewModal" class="close-mobile-menu"
           @click="closeMobileMenu"
           src="../assets/icons/Close-Icon.svg" :alt="$t('Close Menu')">
      <img class="open-mobile-menu"
           :class="{'scrolled-down': !topOfPage, 'hide': store.showPreviewModal || store.showMobileMenu}"
           @click="toggleMobileMenu"
           src="../assets/icons/Hamburger.svg" :alt="$t('Open Menu')">
    </div>

    <!-- DESKTOP -->
    <div v-if="!store.isMobile" class="logo-container" :class="{'scrolled-down': !topOfPage}">
      <div class="logo" :class="{'scrolled-down': !topOfPage}">
        <img :alt="$t('Fungibl Logo')" src="../assets/Logo-Full.svg" />
      </div>
    </div>
    <div v-if="!store.isMobile" class="button-container desktop" :class="{'scrolled-down': !topOfPage}">
      <styled-button v-for="(item, index) in [...navItems, { label: 'LAUNCH!', action: 'launch' }]"
                     :key="index" @click="takeAction(item.action)"
                     :button-style="item.label === 'LAUNCH!' ? 'nav-filled' : 'nav'"
                     >
        {{ $t(item.label) }}
      </styled-button>
    </div>

    <modal v-if="store.showMobileMenu" ref="mobileMenu" @close="toggleMobileMenu" opacity-time="0.5s"
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

    <modal v-if="store.showPreviewModal" ref="previewModal" @close="closePreviewModal(true)" center>
      <div class="text-lg font-bold text-center">
        <p><span class="font-bolder">Curious?</span> We're getting ready to tell</p>
        <p class="mb-12">you ALL THE THINGS you want to know.</p>
<!--        <p>We're pumped to be launching the full site soon!</p>-->
        <p>In the meantime be sure to follow us on</p>
        <p><span class="text-fblue hover:cursor-pointer" @click="openTwitter">Twitter</span> and check out the <span class="text-fgreen hover:cursor-pointer" @click="takeAction('#blog')">BLOG</span> post.</p>
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
        <styled-button v-if="!store.isMobile" button-style="primary mt-12" @click="closePreviewModal">
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

  props: {
    topOfPage: {
      type: Boolean,
      default: true,
    }
  },

  data() {
    return {
      navItems: [
        { label: 'ABOUT', action: '#about' },
        { label: '$FUN', action: '#fun' },
        { label: 'BLOG', action: '#blog' },
        { label: 'FAQ', action: '#faq' },
        { label: 'CONTACT', action: '#contact' },
      ],
      store: { showPreviewModal: false, loadedMarketingBg: false,
        isMobile: window.innerWidth < 768, innerHeight: window.innerHeight,
        showMobileMenu: false, },
    }
  },

  computed: {
    imageKitPrincipalDarkUrl() {
      return this.imageKitUrl(
          `PrincipalDark.png`,
          `auto`,
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
    closeMobileMenu() {
      if (this.store.showPreviewModal) {
        this.$refs.previewModal.close()
      } else {
        this.$refs.mobileMenu.close()
      }
    },
    toggleMobileMenu() {
      if (this.store.showPreviewModal) {
        state.showPreviewModal(false)
      } else {
        state.showMobileMenu(!this.store.showMobileMenu)
      }
    },
    openTwitter() {
      window.open('https://twitter.com/FungiblApp', '_blank')
    },
    closePreviewModal(final = false) {
      if (final) {
        state.showPreviewModal(false)
      } else {
        this.$refs.previewModal.close()
      }
    }
  },

})
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

header {
  @apply fixed top-0 z-10 w-full p-4 md:bg-fdarkblue;

  @media(max-width: theme('screens.md')) {
    height: 15%;
  }

  @media(min-width: theme('screens.md')) {
    min-height: 15%;
  }

  .logo-container {
    @apply flex items-center pt-6;
    .logo {
      @apply z-50 my-0 mx-8 relative;
      left: calc(50% - theme('spacing.8') - 150px);
      transition: left 0.5s ease-out;
      &.scrolled-down {
        left: 0;
      }
      img {
        width: 300px;
        @apply h-auto;
      }
    }
  }

  .button-container {
    @apply w-11/12 lg:w-4/5 2xl:w-3/5 3xl:w-1/2
    flex justify-between items-center ml-auto mr-auto mt-8 pb-12 md:pb-0;

    transition: margin-top 0.5s ease-out, margin-left 0.5s ease-out, margin-right 0.5s ease-out;
    &.desktop.scrolled-down {
      @apply -mt-10 mr-6;
    }

    @media(max-height: theme('screens.sm')) {
      @apply pb-24;
    }

    &.mobile {
      @apply flex-col;
    }
  }

  .mobile-nav-header {
    @apply flex justify-between place-items-center z-50;

    .stacked-logo {
      transition: background-color 0.5s ease-out, opacity 0.5s ease-in;
      @apply w-23 h-23 p-1 bg-none rounded opacity-100;
      &.scrolled-down {
        //@apply bg-fgreen/95 /*border-2 border-fdarkblue*/;
        ////border-style: inset;
      }
      &.hide {
        @apply opacity-0 pointer-events-none absolute;
      }
    }

    .open-mobile-menu {
      transition: background-color 0.5s ease-out, opacity 0.5s ease-in;
      @apply w-23 h-23 hover:cursor-pointer bg-none rounded opacity-100;
      &.scrolled-down {
        @apply bg-fgreen/95 ml-auto /*border-2 border-fdarkblue*/;
        //border-style: inset;
      }
      &.hide {
        @apply opacity-0 pointer-events-none absolute right-0;
      }
    }

    .close-mobile-menu {
      @apply w-21 h-20 py-3 px-2 mr-1 hover:cursor-pointer;
    }
  }
}

.twitter-icon {
  @apply inline-block w-8 mr-2;
}

</style>

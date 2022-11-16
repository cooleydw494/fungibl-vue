<template>
  <section class="section-wrapper" :class="{'mobile': isMobile}">
    <div class="anchor" id="contact"></div>
    <div class="content">
      <div class="image-container">
        <img src="../../assets/illustrations/Mailman-Diver.svg"
             :alt="$t('Mailman Diver')">
      </div>
      <div class="form-container">
        <h1 class="text-fpink">{{ $t('CONTACT US') }}</h1>
        <div class="main-text">
          <span v-html="$t('contactText')"></span>
        </div>

        <div class="form">
          <div class="name-container">
            <label for="name">{{ $t('NAME') }}</label>
            <input v-model="formData.name" type="text" id="name" />
          </div>
          <div class="email-container">
            <label for="email">{{ $t('EMAIL') }}</label>
            <input v-model="formData.email" type="email" id="email">
          </div>
          <div class="message-container">
            <label for="message">{{ $t('MESSAGE') }}</label>
            <textarea v-model="formData.message" name="message" id="message" cols="120" rows="6"></textarea>
          </div>
        </div>

        <div class="stalk-us">
          <h4 class="text-fpink">{{ $t('STALK US') }} {{ $t(':') }}</h4>
          <img src="../../assets/icons/Twitter-Icon.svg" @click="openTwitter"
               :alt="$t('Twitter Icon')">
<!--          <img src="../../assets/icons/Discord-Icon.svg"-->
<!--               :alt="$t('Discord Icon')">-->
<!--          <img src="../../assets/icons/Instagram-Icon.svg"-->
<!--               :alt="$t('Instagram Icon')">-->
          <vue-recaptcha ref="captcha" :sitekey="siteKey"
                         loadRecaptchaScript @verify="submitForm" @expired="resetCaptcha" theme="dark">
            <styled-button v-show="!sendingForm" button-style="primary" :disabled="!formFieldsValid">
              {{ (formSent ? $t('THANKS!') : $t('SUBMIT')) }}
            </styled-button>
            <looping-rhombuses-spinner class="spinner" v-show="sendingForm"></looping-rhombuses-spinner>
          </vue-recaptcha>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import { post } from "../../api"
import StyledButton from "@/components/utilities/StyledButton"
import {LoopingRhombusesSpinner} from "epic-spinners"
import {VueRecaptcha} from 'vue-recaptcha'

export default defineComponent({
  name: "Contact",

  components: {StyledButton, VueRecaptcha, LoopingRhombusesSpinner},

  props: {
    isMobile: {
      type: Boolean, // avoid using StoreMixin
      required: true,
    }
  },

  data() {
    return {
      formData: {
        name: null,
        email: null,
        message: null,
      },
      formSent: false,
      sendingForm: false,
    }
  },

  computed: {
    formFieldsValid() {
      const nameValid = this.formData.name
      const emailValid = this.formData.email
      const messageValid = this.formData.message
      return nameValid && emailValid && messageValid && !this.formSent
    },
    siteKey() {
      return window.location.hostname === 'fungibl.fun'
          ? `6LfVjgkjAAAAABpv-fWFGdVCSvbxqAcqYf44SZIX`
          : `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`
    }
  },

  methods: {
    submitForm() {
      if (this.formSent) return
      if (!this.formFieldsValid) {
        alert('Check form fields and try again.')
        this.$refs.captcha.reset()
        return
      }
      this.sendingForm = true
      post(`process-contact-form`, this.formData)
          .then((/*res*/) => {
            this.formSent = true
            this.sendingForm = false
          })
          .catch((err) => {
            alert(err)
            this.resetCaptcha()
            this.sendingForm = false
          })
    },
    resetCaptcha() {
      this.$refs.captcha.reset()
    },
    openTwitter() {
      window.open('https://twitter.com/FungiblApp', '_blank')
    },
  },
})
</script>

<style lang="scss" scoped>
@import "@/css/mixins.scss";

.section-wrapper {

  @apply relative w-100vw mt-12 md:mt-24 mx-auto;
  max-width: 1920px;

  .content {
    @apply flex flex-wrap w-5/6 2xl:w-2/3 mx-auto items-center;
    .main-text {
      @apply mb-4;
      span, strong {
        @apply my-4 text-lg lg:text-xl 3xl:text-2xl font-medium;
        font-stretch: 90%;
      }
    }

    .image-container {
      @apply w-full md:w-1/3 lg:w-1/2 mb-6 md:mb-0 px-28 sm:px-36 md:pl-0 md:pr-0 lg:pr-18 xl:pr-36;
    }

    .form-container {
      @apply w-full md:w-2/3 lg:w-1/2 px-8;

      h1 {
        @apply text-3xl md:text-5xl;
      }

      label {
        @apply inline-block mt-4 mb-2 text-xl font-bolder text-fpink;
      }

      input { @apply w-full; }

      input, textarea {
        @apply block py-1 px-2 rounded
        bg-fdarkblue border-solid border-2 border-fwhite/75
        text-xl font-semibold;
      }

      .message-container {
        @apply w-full;

        textarea {
          @apply max-w-full;
        }
      }

      .stalk-us {
        @apply mt-8;
        h4, img { @apply inline-block; }

        img {
          @apply w-10 ml-3 -mt-2 hover:cursor-pointer;
        }

        .button {
          @apply absolute right-0 -bottom-2;
        }
        .spinner {
          @apply absolute right-12 bottom-0;
        }
      }

    }

  }

  .anchor {
    @apply absolute top-0 md:-top-68;
  }

}


</style>

<template>
  <section id="contact" class="section-wrapper" :class="{'mobile': isMobile}">

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
          <img src="../../assets/icons/Discord-Icon.svg"
               :alt="$t('Discord Icon')">
          <img src="../../assets/icons/Instagram-Icon.svg"
               :alt="$t('Instagram Icon')">
          <styled-button button-style="primary" :disabled="!formFieldsValid"
                         @click="submitForm">
            {{ $t('SUBMIT') }}
          </styled-button>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core"
import { post } from "../../api"
import StyledButton from "@/components/utilities/StyledButton"

export default defineComponent({
  name: "Contact",

  components: {StyledButton,},

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
      }
    }
  },

  computed: {
    formFieldsValid() {
      const nameValid = this.formData.name
      const emailValid = this.formData.email
      const messageValid = this.formData.message
      return nameValid && emailValid && messageValid
    },
  },

  methods: {
    submitForm() {
      if (!this.formFieldsValid) {
        alert('Check form fields and try again.')
        return
      }
      post(`process-contact-form`, this.formData)
          .then((/*res*/) => { alert('Message sent successfully')})
          .catch((/*err*/) => { alert('There was an error. Please try again later.') } )
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

  @apply relative w-100vw mt-48 mx-auto;
  max-width: 1920px;

  .content {
    @apply flex w-5/6 2xl:w-2/3 mx-auto items-center;
    .main-text {
      span, strong {
        @apply my-4 text-lg lg:text-xl 3xl:text-2xl font-medium;
        font-stretch: 90%;
      }
    }

    .image-container {
      @apply w-full md:w-1/2 md:pr-18 xl:pr-36;
    }

    .form-container {
      @apply w-full md:w-1/2 px-8;

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

      .button-container {
        @apply mt-4;
      }

      .stalk-us {
        @apply mt-10;
        h4, img { @apply inline-block; }

        img {
          @apply w-10 ml-3 -mt-2;
        }

        .button {
          @apply absolute right-0 -bottom-2;
        }
      }

    }

  }

}


</style>

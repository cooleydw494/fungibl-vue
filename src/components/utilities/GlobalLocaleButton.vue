<template>
  <styled-button type="button" @click="switchLanguage">
    <b>{{ languageSwitchText }}</b>
  </styled-button>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import StoreMixin from "@/mixins/Store.mixin";
import store from "@/state";
import StyledButton from "./StyledButton.vue";

export default defineComponent({
  name: "GlobalLocaleButton",

  components: { StyledButton },

  mixins: [StoreMixin],

  data: () => ({ store: store}),

  computed: {
    languageSwitchText() {
      return this.inactiveLanguage === 'es'
          ? 'Español'
          : 'English'
    },
    inactiveLanguage() {
      return this.$i18n.locale === 'en'
          ? 'es'
          : 'en'
    },
  },

  mounted() {
    const storeKeys = Object.keys(this.store);
    this.subscribe(storeKeys);
  },

  methods: {
    switchLanguage() {
      this.setLocale(this.inactiveLanguage)
    }
  },
});
</script>

<template>
  <section id="about" class="section-wrapper" :class="{'mobile': mobile}">
    <div class="content">

    </div>
  </section>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "AboutOne",

  props: {
    mobile: {
      type: Boolean,
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

  @apply w-100vw mt-12 bg-fpink;

  .content {

  }

}


</style>

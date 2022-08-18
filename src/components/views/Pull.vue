<template>
  <page-container>
    <div class="flex place-content-center">
      <h1>{{ $t('PULL') }}</h1>
    </div>
  </page-container>
</template>

<script>
import { defineComponent } from "vue";
import PageContainer from "@/components/utilities/PageContainer.vue";

export default defineComponent({
  name: "Pull",
  components: {
    PageContainer,
  },
});
</script>

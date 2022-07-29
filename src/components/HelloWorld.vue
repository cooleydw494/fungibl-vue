<template>
  <page-container class="hello text-center">
    <div class="flex justify-around mb-8">
      <global-locale-button></global-locale-button>
    </div>
    <h1 class="h2">{{ $t('I love you so much, my silly girl <3') }}</h1>
    <h3 class="text-2xl">{{ $t("You are my best friend. I can't do any of this without you.") }}</h3>
  </page-container>
</template>

<script>
import { defineComponent } from "vue";
import PageContainer from "./Containers/PageContainer.vue";
import GlobalLocaleButton from "@/components/GlobalLocaleButton";

export default defineComponent({
  components: { PageContainer, GlobalLocaleButton },
  name: "HelloWorld",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

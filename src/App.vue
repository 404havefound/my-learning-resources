<template>
  <the-header title="RememberMe"></the-header>
  <the-resources></the-resources>
  <!-- <stored-resources :rescources="storedResources"></stored-resources> -->
  <!-- 通过在组件上绑定元素，将数据通过props传递到子组件中 -->
</template>
<script>
//import LearningResource from "./components/learning-recource/LearningResource.vue";
//import StoredResources from "./components/learning-recource/StoredResources.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
import TheResources from "./components/learning-recource/TheResources.vue";
export default {
  components: {
    //LearningResource,
    //StoredResources,
    TheHeader,
    TheResources,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Tangerine");
* {
  box-sizing: border-box;
}
html {
  font-family: "Roboto", sans-serif;
}
body {
  margin: 0;
}
</style>

<template>
  <the-header title="RememberMe"></the-header>
  <stored-resources :rescources="storedResources"></stored-resources>
  <!-- 通过在组件上绑定元素，将数据通过props传递到子组件中 -->
</template>
<script>
//import LearningResource from "./components/learning-recource/LearningResource.vue";
import StoredResources from "./components/learning-recource/StoredResources.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
export default {
  components: {
    //LearningResource,
    StoredResources,
    TheHeader,
  },
  data() {
    return {
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentrtion.",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Lear to google...",
          link: "https://google.org",
        },
      ],
    };
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

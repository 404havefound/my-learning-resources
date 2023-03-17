<template>
  <ul>
    <learning-resource
      v-for="res in rescources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
    <!-- 使用v-for 要绑定值 -->
  </ul>
</template>
<script>
import LearningResource from "./LearningResource.vue";
export default {
  props: ["rescources"],
  components: {
    LearningResource,
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>

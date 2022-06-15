<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
  </div>
</template>
<script>
import Header from "./views/HeaderView.vue";

export default {
  components: {
    appHeader: Header,
  },
};
</script>

<style scoped>
.containers {
  display: flex;
}
</style>

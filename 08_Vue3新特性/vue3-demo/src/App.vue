<template>
  <Vue2Demo />
  <hr>
  <Vue3Demo />
</template>

<script>
import Vue2Demo from "./components/Vue2Demo.vue";
import Vue3Demo from "./components/Vue3Demo.vue";

export default {
  name: "App",
  components: {
    Vue2Demo,
    Vue3Demo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="toastHandle">提示框</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
  },
  methods: {
    toastHandle() {
      this.$toast("toast提示框", {
        duration: 10000,
        defaultType: "danger"
      });
      this.$toast['danger']('危险');
    },
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

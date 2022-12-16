<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"/>
    <MyComponent/>
    <MyJSX/>
    <button @click="clickHandle">弹出框</button>
  </div>
</template>

<script>
import MyComponent from "./components/MyComponent.vue";
import MyJSX from "./components/MyJSX.vue";

export default {
  name: "App",
  components: {
    MyComponent,
    MyJSX,
  },
  methods: {
    clickHandle() {
      this.$toast("测试", {
        duration: 3000,
        defaultType: "top",
      });
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

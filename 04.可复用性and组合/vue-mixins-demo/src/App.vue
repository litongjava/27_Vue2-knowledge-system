<template>
  <div id="app">
    <!--
    <img alt="Vue logo" src="./assets/logo.png" />
    <Child1 />
    <Child2 />
    <p>{{ vision }}</p>
    -->
    <MyDirective />
  </div>
</template>

<script>
import Child1 from "./components/Child1.vue";
import Child2 from "./components/Child2.vue";
import MyDirective from "./components/MyDirective.vue";

export default {
  name: "App",
  components: {
    Child1,
    Child2,
    MyDirective,
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

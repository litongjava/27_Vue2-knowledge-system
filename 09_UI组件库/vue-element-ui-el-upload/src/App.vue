<template>
<div id="app">
  <router-link to="/">HomeView</router-link>
  |
  <router-link to="/about">AboutView</router-link>
  |
  <router-link to="/upload">UploadView</router-link>
  <router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'app',
  components: {}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

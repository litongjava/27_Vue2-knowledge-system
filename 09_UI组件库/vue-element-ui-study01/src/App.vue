<template>
<div id="app">
  <HeaderNav></HeaderNav>
  <!-- <router-link to="/">HomeView</router-link>|
  <router-link to="/about">AboutView</router-link> -->
  <router-view></router-view>

</div>
</template>

<script>
import HeaderNav from "./components/HeaderNav"

export default {
  name: 'app',
  components: {
    HeaderNav,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>

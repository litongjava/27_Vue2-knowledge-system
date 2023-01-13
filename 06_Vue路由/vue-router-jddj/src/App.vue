<template>
  <div id="app">
    <router-view/>
    <BottomNav />
  </div>
</template>

<script>

import BottomNav from "./components/BottomNav"

export default {
  components:{
    BottomNav
  }
}
</script>

<style>
</style>

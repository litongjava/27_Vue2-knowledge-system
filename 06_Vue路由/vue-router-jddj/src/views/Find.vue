<template>
  <div>
    <FindNav />
    <router-view></router-view>
  </div>
</template>

<script>
import FindNav from "../components/FindNav"
export default {
  components:{
    FindNav
  }
}
</script>

<style>

</style>
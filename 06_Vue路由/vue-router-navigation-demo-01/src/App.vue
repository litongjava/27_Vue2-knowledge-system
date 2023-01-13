<template>
  <div id="app">
    <router-view />
    <BootomNav></BootomNav>
  </div>
</template>
<script>
import BootomNav from './components/BootomNav';

export default {
  components: {
    BootomNav
  }
};
</script>

<style></style>

<template>
<div class="hello">
  <h1>{{ msg }}</h1>
  <div class="line" id="line">
  </div>
  <div class="map" id="map"></div>
  <div class="world" id="world"></div>
  <div>111</div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    this.$charts.line("line");
    this.$charts.chinaMap("map");
    this.$charts.worldMap("world");
  }
}
</script>

<style scoped>
.line {
  width: 100%;
  height: 400px;
}

.map {
  width: 500px;
  height: 500px;
}

.world {
  width: 100%;
  height: 800px;
}
</style>

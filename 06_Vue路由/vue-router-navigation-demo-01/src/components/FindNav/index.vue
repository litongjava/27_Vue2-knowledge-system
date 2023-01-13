<template>
<div class="find">
  <ul class="find-nav">
    <li>
      <router-link to="/find/follow">关注</router-link>
    </li>
    <li>
      <router-link to="/find/cookbook">食谱</router-link>
    </li>
    <li>
      <router-link to="/find/community">种草社</router-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.find {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #fff;
}

.find-nav {
  overflow: hidden;
  clear: both;
  width: 40%;
  margin: 0 auto;
}

.find-nav li {
  float: left;
  width: 33.33%;
}

.active {
  color: green;
}
</style>

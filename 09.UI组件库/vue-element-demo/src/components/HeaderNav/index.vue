<template>
<div>
  <el-menu
    :default-active="activeIndex"
    background-color="#545c64"
    text-color="#fff"
    class="el-menu-demo"
    mode="horizontal"
    active-text-color="#ffd04b"
    router
    @select="handleSelect"
  >
    <el-menu-item index="/">
      <i class="el-icon-s-home"></i>
      首页
    </el-menu-item>
    <el-menu-item index="/about">
      <i class="el-icon-s-shop"></i>
      关于
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
</style>

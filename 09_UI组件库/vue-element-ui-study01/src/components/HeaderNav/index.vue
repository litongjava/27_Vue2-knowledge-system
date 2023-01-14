<template>
<div>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
           background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
           @select="handleSelect" router>
    <el-menu-item index="/"><i class="el-icon-s-home"></i>首页</el-menu-item>
    <el-menu-item index="/about"><i class="el-icon-s-shop"></i>关于</el-menu-item>
    <el-menu-item index="/el-form-demo">El-Form-demo</el-menu-item>
    <el-menu-item index="/el-form-rules-gruop">分组验证</el-menu-item>
    <el-menu-item index="/el-from-dynamic-validate">动态增减表单项</el-menu-item>
    <el-menu-item index="/el-from-custom-validate">自定义校验规则</el-menu-item>
    <el-menu-item index="/el-from-number-validate">数字类型验证</el-menu-item>
    <el-menu-item index="/el-from-float-validate">小数类型验证</el-menu-item>
    <el-menu-item index="/el-from-price-validate">价格验证</el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/"
    }
  },
  methods: {
    handleSelect(key, path) {
      console.log(key, path);
    }
  }
}
</script>

<style>

</style>

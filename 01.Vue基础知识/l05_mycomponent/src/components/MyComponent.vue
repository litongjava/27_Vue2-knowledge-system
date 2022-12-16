<template>
  <div>
    <h3>生命周期函数</h3>
    <button @click="message = '测试'">修改数据</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "life",
  data() {
    return {
      message: "hello",
    };
  },
  beforeCreate() {
    console.log("beforeCreate——>创建前");
    // 不要使用this对象获取数据
    console.log(this.message);
  },
  created() {
    console.log("created——>创建后");
    console.log(this.message);
  },
  beforeMount() {
    console.log("beforeMount——>渲染前");
  },
  mounted() {
    console.log("mounted——>渲染后");
  },
  beforeUpdate() {
    console.log("beforeUpdate——>修改前");
  },
  updated() {
    console.log("updated——>修改后");
  },
  beforeDestroy() {
    console.log("beforeDestroy——>销毁前");
  },
  destroyed() {
    console.log("destroyed——>销毁后");
  },
};
</script>

<style>
</style>
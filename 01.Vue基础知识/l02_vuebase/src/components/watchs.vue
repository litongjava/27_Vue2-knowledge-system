<template>
  <div>
    <h3>侦听器</h3>
    <input type="text" v-model="message" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  watch: {
    message(newVal, oldVal) {
      console.log("newVal:" + newVal);
      console.log("oldVal:" + oldVal);
      // 搜索的处理:如果用户两次搜索的值是一样的，那么还有必要每次都重新做网络请求
      if (newVal === "上次用完传递过来的数据") {
        console.log("不用重新搜索");
      } else {
        console.log("重新搜索");
      }
    },
  },
};
</script>

<style>
</style>
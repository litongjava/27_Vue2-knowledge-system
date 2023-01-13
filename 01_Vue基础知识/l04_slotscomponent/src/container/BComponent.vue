<template>
  <div>
    <h3>BComponent</h3>
    <button @click="message = '我是新的字符串'">修改文本</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "BComponent",
  data() {
    return {
      message: "我是BComponent",
    };
  },
};
</script>

<style>
</style>
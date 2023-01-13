<template>
  <div>
    <h3>我的第一个真实组件</h3>
    <button @click="clickHandle">Add:{{ count }}</button>
  </div>
</template>
<script>
export default {
  name: "MyComponent",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    clickHandle() {
      this.count += 1;
    },
  },
};
</script>
<style scoped>
</style>
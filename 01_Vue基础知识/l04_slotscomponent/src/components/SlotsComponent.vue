<template>
  <div>
    <p>我是插槽</p>
    <slot name="header">这是一个容器块</slot>
    <div>结构的分割线</div>
    <slot name="footer" :message="message"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "我是Slots数据",
    };
  },
};
</script>

<style>
</style>
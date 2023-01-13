<template>
  <div>
    <h3>Child1</h3>
    <button @click="sendHandle">发送数据</button>
    <button @click="showInputHandle">显示输入框并获得焦点</button>
    <input type="text" v-show="flag" ref="search" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "测试数据",
      flag: false,
    };
  },
  methods: {
    sendHandle() {
      this.$bus.$emit("onMsg", this.msg);
    },
    showInputHandle() {
      // DOM更新是一个异步操作
      this.flag = true;
      //测试失败,不生效
      //此时dom并没有立即更新,dom还没有显示出来,使用refs是获取不到输入框的,自然也获取不到焦点
      //vue的响应式并不是数据变化之后立即让dom发生变化,而是有一定的策略进行dom的更新,是一个异步的形式
      //this.$refs.search.focus();
      this.$nextTick(() => {
        // DOM已经更新了,更新之后再去获取焦点
        this.$refs.search.focus();
      });
    },
  },
};
</script>

<style>
</style>
<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ reverseMessage }}</p>
    <p>{{ reverseMethodMessage() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello",
    };
  },
  // 计算属性:在数据不发生变化的时候，可以直接引用
  computed: {
    /**
     * 字符串反转操作
     */
    reverseMessage() {
      return this.message.split("").reverse().join("");
    },
  },
  methods: {
    reverseMethodMessage() {
      return this.message.split("").reverse().join("");
    },
  },
};
</script>

<style>
</style>
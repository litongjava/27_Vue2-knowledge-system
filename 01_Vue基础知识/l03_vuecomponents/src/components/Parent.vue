<template>
  <div>
    Parent
    <Child :message="message" :age="age" :list="list" />
    <button @click="message = '全新的数据'">修改数据</button>
    <hr />
    <Child2 @onEvent="messageHandle" />
    <p>{{ child2Data }}</p>
  </div>
</template>

<script>
import Child from "./Child.vue";
import Child2 from "./Child2.vue";

export default {
  name: "Parent",
  data() {
    return {
      message: "数据测试",
      age: 20,
      list: ["iwen", "sxt", "itbaizhan"],
      child2Data:""
    };
  },
  methods: {
    messageHandle(data) {
      this.child2Data = data;
    },
  },
  components: {
    Child,
    Child2,
  },
};
</script>

<style>
</style>
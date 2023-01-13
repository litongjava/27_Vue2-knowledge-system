<template>
  <div>
    <h3>Parent</h3>
    <button @click="clickHandle">控制Child显示</button>
    <!-- <Child v-show="flag" @update:isShow="function(data){flag=data}"/> -->
    <!-- <Child v-show="flag" @update:isShow="data => flag = data"/> -->
    <Child :message="message" :age="age"></Child>
    <Child v-show="flag" :isShow.sync="flag" />
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  data() {
    return {
      message: "测试数据",
      age:20,
      flag: false,
    };
  },
  components: {
    Child,
  },
  methods: {
    clickHandle() {
      this.flag = true;
    },
    // showAndHideHandle(data){
    //     this.flag = data;
    // }
  },
};
</script>

<style>
</style>
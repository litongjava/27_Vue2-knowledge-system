<template>
  <div>
    <h3>数组的更新检测</h3>
    <button @click="changeHandle">按钮</button>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
    <h3>对象的更新检测</h3>
    <button @click="changeObjHandle">按钮</button>
    <ul>
      <li v-for="(value, key, index) in userInfo" :key="index">
        {{ key }}:{{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      list: ["iwen", "ime", "itbaizhan"],
      newList: ["sxt", "test"],
      userInfo: {
        name: "iwen",
        age: 20,
      },
    };
  },
  methods: {
    changeHandle() {
      this.list = this.list.concat(this.newList);
    },
    changeObjHandle() {
      // this.userInfo.job = "it"
      // 官方提供了专门用来修改对象的方案Vue.set()  $set();
      // Vue.set(this.userInfo,'job','it');
      this.$set(this.userInfo, "job", "it");
    },
  },
};
</script>

<style>
</style>
<template>
  <div>
    <h3>事件处理</h3>
    <p>{{ count }}</p>
    <button v-on:click="countAddHandle">按钮</button>
    <ul>
      <li
        v-on:click="itemClickHandle(item, $event)"
        v-for="(item, index) in lists"
        v-bind:key="index"
      >
        {{ item }}
      </li>
    </ul>
    <a v-on:click.prevent="iwenClickHandle" href="http://iwenwiki.com">iwen</a>
    <input v-on:keyup.enter="keyupHandle" type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      lists: ["iwen", "sxt", "itbaizhan"],
    };
  },
  // 事件处理方法
  methods: {
    countAddHandle(event) {
      this.count += 1;
      event.target.innerHTML = "按钮" + this.count;
    },
    itemClickHandle(item, event) {
      console.log(item);
      console.log(event.target.innerHTML);
      event.target.style.background = "red";
    },
    iwenClickHandle(event) {
      // event.preventDefault()
      console.log("iwen");
    },
    keyupHandle(event) {
      // console.log(event.keyCode);
      // if(event.keyCode === 13){
      //     console.log("会车，提交等操作");
      // }
      console.log("提交");
    },
  },
};
</script>

<style>
</style>
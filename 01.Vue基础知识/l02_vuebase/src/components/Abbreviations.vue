<template>
  <div>
    <h3>缩写</h3>
    <p v-bind:class="classActive">hello</p>
    <p :class="classActive">缩写Hello</p>
    <button v-on:click="clickHandle">按钮1</button>
    <button @click="clickHandle">按钮2</button>
    <ul>
      <li v-for="(item, index) in [1, 2, 3]" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classActive: "active",
    };
  },
  methods: {
    clickHandle() {
      console.log("文本");
    },
  },
};
</script>

<style>
</style>
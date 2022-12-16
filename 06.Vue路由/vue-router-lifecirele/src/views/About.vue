<template>
<div class="about">
  <h1>This is an about page</h1>
  <button @click="updateDataHandle">修改数据</button>
  <p>{{message}}</p>
</div>
</template>
<script>
export default {
  data() {
    return {
      message: "初始化"
    }
  },
  methods: {
    updateDataHandle() {
      this.message = "修改数据";
    }
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<template>
  <div>
    <h3>Child {{message}}-{{age}}</h3>
    <button @click="message='全新的数据'">修改数据</button>
    <button @click="clickHandle">隐藏Child</button>
  </div>
</template>

<script>
export default {
  methods: {
    clickHandle() {
      this.$emit("update:isShow", false);
    },
  },
  //props:["message","age"]
  props:{
    message:{
      type:String,
    },
    age:{
      type:Number,
    }

  }
};
</script>

<style>
</style>
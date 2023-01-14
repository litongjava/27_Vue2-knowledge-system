<template>
  <div>
      <h3>Vue2版本</h3>
      <p>{{ message }}</p>
      <p>{{ getMessage }}</p>
      <button @click="updateMessage">修改数据</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      message:"测试文本"
    }
  },
  methods:{
    updateMessage(){
      this.message = "修改数据"
    }
  },
  mounted(){
    // console.log("组件已经渲染完成");
  },
  watch:{
    message(newVal,oldVal){
      // console.log("新的值:",newVal);
      // console.log("旧的值:",oldVal);
    }
  },
  computed:{
    getMessage(){
      return this.message;
    }
  }
}
</script>

<style>

</style>
<template>
  <div>
      <h3>自定义指令</h3>
      <div>
        <input type="text" v-focus>
        <p v-red>Hello</p>
        <p v-green>我是局部指令</p>
      </div>
      <!-- v-if="true" -->
      <div>
        <button @click="message = '改变内容'">改变内容</button>
        <p v-myShow="flag">{{ message }}</p>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      message:"查看钩子函数",
      flag:true
    }
  },
  directives:{
    green:{
      inserted(el) {
        el.style.color = 'green'
      }
    }
  }
}
</script>

<style>

</style>
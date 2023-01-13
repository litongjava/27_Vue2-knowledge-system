<template>
  <div class="hello">
    <p>{{ message }}</p>
    <p>{{ version }}</p>
    <p>{{ iwenLink }}</p>
    <div v-html="iwenLink"></div>
    <p v-bind:class="classActive">高亮</p>
    <p v-bind:id="ids">绑定id</p>
    <p v-bind:data-id="ids">自定义属性是否可以绑定</p>
    <p>{{ 10 > 5 ? "真的" : "假的" }}</p>
    <p>{{ number + 1 }}</p>
    <p>{{ message.split('').reverse().join('') }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      message:"Hello Vue",
      version:"2.x",
      iwenLink:"<a href='http://iwenwiki.com'>iwenBlog</a>",
      classActive:"error",
      ids:"1001",
      number:10
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

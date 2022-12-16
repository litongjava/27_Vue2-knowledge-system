<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ $root.G_Count }}</p>
    <p>{{ $root.setCount() }}</p>
    <p>{{ getCount }}</p>
    <p>{{ $parent.message }}</p>
    <button @click="clickHandle">获取元素</button>
    <div class="container">
      <p ref="container">Hello ref</p>
    </div>
    <Child />
  </div>
</template>

<script>

import Child from "./Child.vue"

export default {
  name: 'HelloWorld',
  data(){
    return{
      test:"测试文本"
    }
  },
  components:{
    Child
  },
  props: {
    msg: String
  },
  computed:{
    getCount(){
      return this.$root.setCount()
    }
  },
  methods:{
    clickHandle(){
      this.$refs.container.innerHTML = '我是重新赋值的数据';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

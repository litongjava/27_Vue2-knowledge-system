<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="clickHandle">获取HelloWorld</button>
    <HelloWorld ref="HelloWorld" msg="Welcome to Your Vue.js App"/>
    <MyComponent />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyComponent from "./components/MyComponent.vue"

export default {
  name: 'App',
  data(){
    return{
      message:"测试操作"
    }
  },
  provide(){
    return{
      flag:"测试信息",
      getMsg:this.getMsg
    }
  },
  components: {
    HelloWorld,
    MyComponent
  },
  methods:{
    clickHandle(){
      console.log(this.$refs.HelloWorld.test);
    },
    getMsg(){
      return "message"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

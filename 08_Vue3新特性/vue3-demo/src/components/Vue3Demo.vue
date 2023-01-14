<template>
  <h3>Vue3版本</h3>
  <p>{{ message }}</p>
  <p>{{ myMessage }}</p>
  <p>{{ user.name }} - {{ user.age }}</p>
  <button @click="updateMessage('参数')">修改数据</button>
  <button @click="sendMessageHandle">发送数据给Child</button>
  <Child msg="props传递数据"/>
  <ul>
    <li v-for="(item,index) in bannerNav.banner" :key="index">
      <p>{{ item.title }}</p>
    </li>
  </ul>
</template>

<script>

import { ref,reactive, onMounted, watch,computed,provide } from "vue"
import Child from "./Child"
import emitter from "../utils/mitt"
import axios from "axios"

export default {
  setup(){
    // 单一数据源可以使用ref
    // 复杂数据源或者对象格式，可以使用reactive
    const message = ref("Vue3测试文本")
    const user = reactive({
      name:"iwen",
      age:20
    })

    const bannerNav = reactive({
      banner:[]
    })

    const updateMessage = (data) =>{
      message.value = "修改了数据" + data
      user.name = "ime"
      user.age = 30
    }

    const sendMessageHandle = () =>{
      emitter.emit("onCustomEvent",'Vue3Demo的数据')
    }

    onMounted(() =>{
      // console.log("Vue3组件已经渲染");
      axios.get("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
      .then(res =>{
        bannerNav.banner = res.data.banner
      })
      .catch(error =>{
        console.log(error);
      })
    })

    watch(message,(newVal,oldVal) =>{
      // console.log("新的值:",newVal);
      // console.log("旧的值:",oldVal);
    })

    const myMessage = computed(() => message.value)

    const eventHandle = () =>{
      console.log("数据而已");
      message.value = "数据而已"
    }

    provide("customData","provide发送数据")
    provide("onEvent",eventHandle)

    return {
      message,
      user,
      bannerNav,
      myMessage,
      updateMessage,
      sendMessageHandle
    }
  },
  components:{
    Child
  }
}
</script>

<style>

</style>
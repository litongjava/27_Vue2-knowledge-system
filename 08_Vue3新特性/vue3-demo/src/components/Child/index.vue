<template>
  <h3>Child页面</h3>
  <p>{{ message }}</p>
  <p>{{ msg }}</p>
  <p>{{ myData }}</p>
  <Children />
</template>

<script>

import emitter from "../../utils/mitt"
import { inject } from "vue"
import Children from "./Children.vue"

export default {
  data(){
    return{
      message:""
    }
  },
  props:{
    msg:{
      type:String,
      default:""
    }
  },
  mounted(){
    emitter.on("onCustomEvent",data =>{
      this.message = data;
    })
  },
  setup(props,ctx){
    // console.log(props.msg);
    // 在setup中是没有this对象的
    // console.log(ctx);
    const myData = inject("customData");

    return {
      myData
    }
  },
  components:{
    Children
  }
}
</script>

<style>

</style>
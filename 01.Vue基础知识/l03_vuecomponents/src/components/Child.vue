<template>
  <div>
      Child:{{ message }} - 年龄:{{ age }}
      <ul>
        <li v-for="(item,index) in list" :key="index">{{ item }}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name:"Child",
  // props:["message","age"]
  props:{
    message:{
      type:String,
      required:true
    },
    age:{
      type:[Number,String],
      default:0
    },
    // 数组和对象的默认值写法：default:[] -> 工厂模式
    // 数字和字符串可以直接写：default:0,default:""
    list:{
      type:Array,
      default:function(){
        return []
      }
    }
  }
}
</script>

<style>

</style>
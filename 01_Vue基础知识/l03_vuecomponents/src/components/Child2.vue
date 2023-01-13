<template>
  <div>
      <h3>Child2</h3>
      <button @click="clickHandle">发送数据给Parent</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            message:"Child2的数据"
        }
    },
    methods:{
        clickHandle(){
            this.$emit("onEvent",this.message)
        }
    }
}
</script>

<style>

</style>
<template>
  <div>
      <h3>搜索页面</h3>
      <input type="text" v-model="message">
      <p>{{ message }}</p>
      <hr>
      <input type="text" :value="messages" @input="changeMessages">
      <p>{{ messages }}</p>
  </div>
</template>

<script>

import { mapState,mapMutations } from "vuex"

export default {
    computed:{
        ...mapState(["messages"]),
        message:{
            get(){
                return this.$store.state.message
            },
            set(value){
                this.$store.commit("updateMessage",value)
            }
        }
    },
    methods:{
        ...mapMutations(['updataMessages']),
        changeMessages(e){
            this.updataMessages(e.target.value)
        }
    }
}
</script>

<style>

</style>
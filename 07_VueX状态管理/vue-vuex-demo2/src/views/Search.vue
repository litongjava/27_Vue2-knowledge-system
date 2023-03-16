<template>
<div>
  <h3>搜索页面</h3>
  <input type="text" v-model="message">
  <p>{{ message }}</p>
  <hr/>
  <input type="text" :value="messages" @input="chanageMessage">

</div>
</template>

<script>
import {mapState,mapMutations} from "vuex"
export default {
  methods:{
    ...mapMutations(["updataMessages"]),
    chanageMessage(e){
      this.updataMessages(e.target.value);
    }
  },
  computed:{
    ...mapState(["messages"]),
    message:{
      get(){
        return this.$store.state.message;
      },
      set(value){
        this.$store.commit("updateMessage",value)
      }
    }
  }
}
</script>

<style>

</style>

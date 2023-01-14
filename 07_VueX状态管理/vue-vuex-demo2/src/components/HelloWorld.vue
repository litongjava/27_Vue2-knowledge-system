<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ $store.state.count }}</p>
    <p>{{ getCount }}</p>
    <p>Count={{ count }}</p>
    <p>{{ user.nick }}</p>
    <p>{{ user.age }}</p>
  </div>
</template>

<script>

import { mapState } from "vuex"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // 利用计算属性读取state状态
  // computed:{
  //   getCount(){
  //     return this.$store.state.count
  //   }
  // }
  // computed:mapState({
  //   count:state => state.count,
  //   user:state => state.user
  // })
  // computed:mapState(["count","user"])
  computed:{
    ...mapState(["count","user"]),
    getCount(){
      return this.$store.state.count
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

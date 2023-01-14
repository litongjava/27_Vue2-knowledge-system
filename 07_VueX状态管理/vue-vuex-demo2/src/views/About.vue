<template>
  <div>
    <h3>关于页面</h3>
    <p>{{ $store.state.count }}</p>

    <p>{{ $store.getters.getCount }}</p>
    <p>{{ $store.getters.getCountParams('frank') }}</p>

    <p>{{ getCount }}</p>
    <p>{{ getCountParams('sakura') }}</p>

    <input type="text" v-model="num">
    <button @click="addHandle">增加</button>
    <button @click="minHandle">减少</button>
    <button @click="newRulesHandle">新增字段</button>
    <button @click="bannerHandle">获取banner数据</button>
    <p>Count={{ count }}</p>
    <ul>
      <li v-for="(item,key,index) in user" :key="index">
        <p>{{ key }}:{{ item }}</p>
      </li>
    </ul>
    <ul>
      <li v-for="(item,index) in banner" :key="index">
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapState,mapMutations,mapActions,mapGetters } from "vuex"
import { MIN_COUNT } from "../store/mutation-types"

export default {
  data(){
    return{
      num:0
    }
  },
  computed:{
    ...mapState(["count","user","banner"]),
    ...mapGetters(["getCount","getCountParams"])
  },
  methods:{
    ...mapMutations(["addCount","updateUser"]),
    ...mapActions(["asyncUpdateBanner"]),
    addHandle(){
      // this.$store.commit("addCount",{
      //   num:parseInt(this.num)
      // })
      // this.$store.commit({
      //   type:"addCount",
      //   num:parseInt(this.num)
      // })
      this.addCount({
        num:parseInt(this.num)
      })
    },
    minHandle(){
      this.$store.commit(MIN_COUNT,Number(this.num))
    },
    newRulesHandle(){
      // this.$store.commit({
      //   type:"updateUser",
      //   key:"job",
      //   value:"it"
      // })
      this.updateUser({
        key:"job",
        value:"itbaizhan"
      })
    },
    bannerHandle(){
      // this.$store.dispatch("asyncUpdateBanner")
      this.asyncUpdateBanner(100);
    }
  }
}
</script>

<style>

</style>

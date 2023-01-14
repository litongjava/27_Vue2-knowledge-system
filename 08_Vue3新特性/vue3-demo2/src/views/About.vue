<template>
  <h3>About</h3>
  <p>{{ $route.params.id }}</p>
  <p>{{ store.state.count }}</p>
  <p>{{ count }}</p>
  <button @click="addHandle">增加</button>
  <button @click="gotoHome">跳转到首页</button>
  <Child1 />
  <Child2 />
  <teleport to=".toast">
    <h3>{{ toast }}</h3>
  </teleport>
  <Demo />
</template>

<script>


import { computed,ref } from "vue"
import { useRouter,useRoute } from "vue-router"
import { useStore } from "vuex"
import Child1 from "../components/Child1.vue"
import Child2 from "../components/Child2.vue"
import Demo from "../components/Demo.vue"

export default {
  setup(){
    const router = useRouter();
    const route = useRoute();

    const toast = ref("提示框")

    const store = useStore();

    const count = computed(() => store.state.count)

    const gotoHome = () =>{
      router.push("/")
    }

    const addHandle = () =>{
      store.commit("setCount",100)
    }

    // console.log(route.params.id);

    return{
      gotoHome,
      store,
      count,
      addHandle,
      toast
    }
  },
  // methods:{
  //   gotoHome(){
  //     this.$router.push("/")
  //   }
  // }
  components:{
    Child1,
    Child2,
    Demo
  }
}
</script>

<style>

</style>
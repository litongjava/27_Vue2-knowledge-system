<template>
  <h3>Child1</h3>
  <p v-if="flag">这是一个文本</p>
  <button @click="changeFlagHandle">切换</button>
</template>

<script>
import { ref } from 'vue'
import { flagMethod } from "./flagMethod"
import { onMounted } from 'vue';

export default {
  setup(){
    // const flag = ref(true);

    const { flag,changeFlagHandle } = flagMethod();

    // const changeFlagHandle = () =>{
    //   flag.value = false
    // }

    onMounted(() =>{
      console.log("初始化2");
    })

    return {
      flag,
      changeFlagHandle
    }
  }
}
</script>

<style>

</style>
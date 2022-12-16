<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <div>
      <van-rate v-model="value" />
    </div>
  </div>
</template>

<script>

import { ref } from "vue"

export default {
  name: "Home",
  components: {},
  setup(){
    const value = ref(3)

    return{
      value
    }
  }
};
</script>
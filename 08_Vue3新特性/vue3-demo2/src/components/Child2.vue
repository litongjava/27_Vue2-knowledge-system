<template>
  <h3>Child2</h3>
  <p v-if="flag">哈哈啊哈哈</p>
  <button @click="changeFlagHandle">修改</button>
</template>

<script>
import { flagMethod } from "./flagMethod";

export default {
  setup() {
    const { flag, changeFlagHandle } = flagMethod();

    return {
      flag,
      changeFlagHandle,
    };
  },
};
</script>

<style>
</style>
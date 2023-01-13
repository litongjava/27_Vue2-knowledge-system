<template>
  <div>
    <h3>Child2</h3>
    <button @click="clickHandle">切换</button>
    <p v-if="flag">是否完成加载</p>
    <p>{{ vision }}</p>
    <p>{{ token }}</p>
  </div>
</template>

<script>
import myMixin from "./flag";
export default {
  mixins: [myMixin],
};
</script>

<style>
</style>
<template>
  <div>
    <h3>Child1</h3>
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
  data() {
    return {
      flag: true,
      user: {
        username: "ime",
        password: "123456",
      },
    };
  },
  mounted() {
    console.log(this.$data);
  },
};
</script>

<style>
</style>
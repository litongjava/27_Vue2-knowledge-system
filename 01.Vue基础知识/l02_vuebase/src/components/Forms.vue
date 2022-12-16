<template>
  <div>
    <h3>表单输入绑定</h3>
    <textarea v-model="username"></textarea>
    <input type="text" v-model.lazy="username" />
    <p>{{ username }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    };
  },
};
</script>

<style>
</style>
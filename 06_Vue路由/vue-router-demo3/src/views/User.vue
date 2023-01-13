<template>
  <div>
    <h3>用户页面</h3>
    <button @click="gotoHomeHandle">调整到首页</button>
    <button @click="gotoAboutHandle">跳转到关于</button>

  </div>
</template>

<script>
export default {
  methods: {
    gotoHomeHandle() {
      // this.$router.push("/home");
      //this.$router.replace("/home");
      this.$router.replace({name: "Home"})
    },
    gotoAboutHandle() {
      // this.$router.push({
      //   path: "/about",
      // });
      this.$router.push({name: "About"})
    },
  },
};
</script>

<style>

</style>

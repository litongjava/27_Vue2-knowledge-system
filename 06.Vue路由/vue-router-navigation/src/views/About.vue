<template>
  <div>
    <h3>About页面</h3>
    <p>id={{ $route.params.id }}</p>
    <button @click="gotoSelfHandle">改变参数</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "test data"
    }
  },
  beforeRouteEnter(to, from, next) {
    // console.log("beforeRouteEnter->", this);
    // console.log("beforeRouteEnter-from->", from);
    // console.log("beforeRouteEnter-to->", to);
    // next(vm => {
    //   console.log(vm.message);
    // });
    next();
  },
  beforeRouteUpdate(to, from, next) {
    // console.log("beforeRouteUpdate->",this);
    // console.log(this.message);
    // console.log("beforeRouteUpdate-from->", from);
    // console.log("beforeRouteUpdate-to->", to);
    next();
  },
  beforeRouteLeave(to, from, next) {
    // console.log("beforeRouteLeave->",this);
    // console.log(this.message);
    // console.log("beforeRouteLeave-from->", from);
    // console.log("beforeRouteLeave-to->", to);
    next();
  },
  methods: {
    gotoSelfHandle() {
      this.$router.push({
        name: "About",
        params: {
          id: 1002
        }
      })
    }
  }
};
</script>

<style>
</style>

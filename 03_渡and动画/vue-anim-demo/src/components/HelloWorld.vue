<template>
  <div class="hello">
    <button @click="clickFlagHandle">切换</button>
    <transition name="fade">
      <h1 v-if="flag">{{ msg }}</h1>
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutUp"
    >
      <h1 v-if="flag">测试动画</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      flag: false,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    clickFlagHandle() {
      this.flag = this.flag === false ? true : false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
  font-size: 16px;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
  font-size: 24px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}

h1 {
  font-size: 24px;
}
</style>

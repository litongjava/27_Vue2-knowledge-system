<template>
  <div>
    <!-- 只能存在一个单一的根容器 -->
    <p v-if="flag">我是孙悟空</p>
    <p v-else>我是六耳猕猴</p>

    <template v-if="flag">
      <p>举头望明月</p>
      <p>低头思故乡</p>
    </template>

    <template v-else>
      <p>白毛浮绿水</p>
      <p>红掌拨清波</p>
    </template>

    <div v-if="flag">
      <p>举头望明月</p>
      <p>低头思故乡</p>
    </div>

    <div v-else>
      <p>白毛浮绿水</p>
      <p>红掌拨清波</p>
    </div>

    <p v-show="flag">红楼梦</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
    };
  },
};
</script>

<style>
</style>
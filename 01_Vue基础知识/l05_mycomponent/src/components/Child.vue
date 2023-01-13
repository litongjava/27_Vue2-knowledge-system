<template>
  <div>
      <h3>Child</h3>
      <p>{{ flag }}</p>
      <p>{{ getMsg() }}</p>
  </div>
</template>

<script>
export default {
  inject:["flag","getMsg"]

}
</script>

<style>

</style>
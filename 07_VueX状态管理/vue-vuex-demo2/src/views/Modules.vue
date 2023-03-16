<template>
<div>
  <h3>Module模块</h3>
  <p>ModuleA:{{ $store.state.ModuleA.moduleACount }}</p>
  <p>ModuleA Getters:{{ $store.getters["ModuleA/getModuleACount"] }}</p>
  <p>ModuleB:{{ $store.state.ModuleB.moduleBCount }}</p>
  <button @click="moduleAAddHandle">ModuleA ADD</button>
  <hr>
  <p>ModuleA:{{ moduleACount }}</p>
  <p>ModuleA Getters:{{ getModuleACount }}</p>
</div>
</template>

<script>

import {mapActions, mapGetters, mapMutations, mapState} from "vuex"

export default {
  methods: {
    ...mapMutations("ModuleA", ["addModuleACount"]),
    ...mapActions("ModuleA", ["asyncAddModuleACount"]),
    moduleAAddHandle() {
      // this.$store.commit("addModuleACount")
      // this.$store.commit("ModuleA/addModuleACount")
      // this.$store.dispatch("ModuleA/asyncAddModuleACount",10)
      // this.addModuleACount()
      this.asyncAddModuleACount(10);
    }
  },
  computed: {
    ...mapState("ModuleA", ["moduleACount"]),
    ...mapGetters("ModuleA", ["getModuleACount"])
  }
}
</script>

<style>

</style>

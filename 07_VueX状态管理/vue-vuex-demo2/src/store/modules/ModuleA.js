export default {
  // 命名空间
  namespaced: true,
  state: {
    moduleACount: 1000
  },
  mutations: {
    addModuleACount(state, num) {
      state.moduleACount += num
    }
  },
  actions: {
    asyncAddModuleACount({dispatch, commit, getters, rootGetters}, num) {
      // console.log("getters", getters);
      // console.log("rootGetters", rootGetters);
      commit("addModuleACount", num)
    }
  },
  getters: {
    getModuleACount(state, getters, rootState, rootGetters) {
      // console.log("getters",getters);
      // console.log("rootState",rootState);
      // console.log("rootGetters",rootGetters);
      return state.moduleACount
    }
  }
}

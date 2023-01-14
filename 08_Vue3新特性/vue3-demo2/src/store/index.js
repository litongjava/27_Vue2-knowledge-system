import { createStore } from 'vuex'

export default createStore({
  state: {
    count:100
  },
  mutations: {
    setCount(state,num){
      state.count+=num
    }
  },
  actions: {
  },
  modules: {
  }
})

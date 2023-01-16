import Vue from 'vue'
import Vuex from 'vuex'
import ModuleA from "./modules/ModuleA"
import ModuleB from "./modules/ModuleB"
import state from "./defaultState"
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

const logPlugin = store => {
  store.subscribe((mutation, state) => {
    console.log("mutation", mutation);
    console.log("state", state);
  })
};


// process.env.NODE_ENV = production
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', // 严格模式
  plugins: [createLogger()],
  state,
  mutations,
  actions,
  getters,
  modules: {
    ModuleA,
    ModuleB
  }
});

if (module.hot) {
  module.hot.accept(["./getters"], () => {
    const newGtters = require("./getters").default;
    store.hotUpdate({
      getters: newGtters
    })
  })
}

export default store;

import {MIN_COUNT} from "./mutation-types"
import Vue from 'vue';

export default {
  addCount(state, obj) {
    state.count += obj.num
  },
  [MIN_COUNT](state, num) {
    state.count -= num
  },
  updateUser(state, obj) {
    Vue.set(state.user, obj.key, obj.value);
  },
  updateBanner(state, banner) {
    state.banner = banner;
  },
  updateMessage(state, msg) {
    state.message = msg;
  },
  updataMessages(state, msg) {
    state.messages = msg
  }
}

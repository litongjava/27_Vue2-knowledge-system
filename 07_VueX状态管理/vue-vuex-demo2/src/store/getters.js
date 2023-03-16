export default {
  getCount(state) {
    return state.count >= 100 ? "年龄:" + state.count + "，高龄了" : '年龄:' + state.count + "，还是一个孩子"
  },
  getCountParams: (state) => (username) => {
    return "名字:" + username + "   年龄:" + state.count
  }
}

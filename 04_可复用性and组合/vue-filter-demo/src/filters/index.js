import Vue from "vue"

Vue.filter("money", function (val) {
  console.log(val);
  if (val) {
    return "¥" + val;
  }
});

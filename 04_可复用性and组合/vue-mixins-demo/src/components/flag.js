const myMixin = {
  data() {
    return {
      flag: false,
      user: {
        username: "iwen"
      }
    }
  },
  methods: {
    clickHandle() {
      console.log("henaler");
      this.flag = this.flag === false ? true : false;
    }
  },
  created() {
    console.log("组件创建完成");
  }
}

export default myMixin
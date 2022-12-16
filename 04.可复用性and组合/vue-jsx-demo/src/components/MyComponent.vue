<script>
export default {
  data() {
    return {
      message: "这是已给消息",
      items: [10, 20, 30]
    }
  },

  render(createElement) {
    // return createElement("h3",this.message)
    if (this.items.length) {
      // return createElement("h3","数组长度为:"+this.items.length)
      return createElement("ul", this.items.map((item) => {
        return createElement('li', item)
      }))
    } else {
      return createElement("h3", "数组长度为空!")
    }
  }
}
</script>

<style>

</style>
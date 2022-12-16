<script>
export default {
  /**
   * JSX:JavaScript+XML(HTML)
   * XML:更加严格的HTML语法，并且是可以自定义的标签格式
   * <img >  <img />
   */
  data() {
    return {
      message: "学习JSX语法",
      names: ["iwen", "ime", "frank"],
      flag: false
    }
  },
  render() {
    return (
      <div>
        <h3>{this.message}</h3>
        <ul>
          {
            this.names.map((ele, index) => {
              return <li key={index}>{ele}</li>
            })
          }
        </ul>
        {
          this.flag ? <p>文本信息</p> : <p>没有内容</p>
        }
      </div>
    )
  }
}
</script>

<style>

</style>
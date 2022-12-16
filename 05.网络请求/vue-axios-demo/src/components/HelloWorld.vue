<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <h3>产品信息</h3>
      <p>{{product.title}}</p>
      <p>{{product.content}}</p>
    </div>
  </div>
</template>

<script>
import qs from "querystring"

export default {
  name: 'HelloWorld',
  data(){
    return{
      product:{
        content:"",
        title:""
      }
    }
  },
  props: {
    msg: String
  },
  mounted(){
    // 请求示例
    this.$axios.get("/api/blueberrypai/getChengpinDetails.php")
      .then(res =>{
        if(res.status === 200){
          this.product.content = res.data.chengpinDetails[0].content
          this.product.title = res.data.chengpinDetails[0].title
        }
      })
      .catch(error =>{
        console.log(error);
      })

    // GET请求方式一
    this.$axios.get("http://iwenwiki.com:3000/search?keywords=海阔天空")
      .then(res =>{
        // console.log(res.data);
      })
      .catch(error =>{
        console.log(error);
      })

    // GET请求方式二
    this.$axios.get("http://iwenwiki.com:3000/search",{
      params:{
        keywords:"泸沽湖"
      }
    }).then(res =>{
      // console.log(res.data);
    }).catch(error =>{
      console.log(error);
    })

    // POST请求
    /**
     * post接受参数的类型:user_id=iwen@qq.com&password=iwen123&verification_code=crfvw
     * querystring做类型转换
     */
    this.$axios.post("/api/blueberrypai/login.php",{
      user_id:"iwen@qq.com",
      password:"iwen123",
      verification_code:"crfvw"
    }).then(res =>{
      // console.log(res.data);
    }).catch(error =>{
      console.log(error);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

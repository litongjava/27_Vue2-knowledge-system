<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
  import axios from "axios"
  import api from "../api"

  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    mounted() {
      api.getBanner()
        .then(res => {
          // console.log(res)
          console.log(res.data);
        }).catch(error => {
        console.log(error);
      });
      axios.get("/api/api/FingerUnion/list.php")
        .then(res => {
          console.log(res.data);
        }).catch(error => {
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

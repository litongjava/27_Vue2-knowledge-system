<template>
  <div>
    <h3>动态路由匹配</h3>
    <ul>
      <li v-for="(item,index) in lists" :key="index">
        <router-link :to="{name:'Details',params:{id:item.id}}">
          <div>
            <p>{{item.title}}</p>
            <p>{{item.username}}</p>
            <img :src="item.cover" alt="">
          </div>
        </router-link>
        <button @click="gotoDetailsHandle(item.id)">跳转到详情页面</button>
      </li>
    </ul>
  </div>
</template>
<script>
import api from "../api"

export default {
  data() {
    return {
      lists: [],
    }
  },
  mounted() {
    api.getList().then(res => {
      if (res.data.error_code == 0) {
        this.lists = res.data.data;
      } else {
        console.log("error:", res.data.error_code);
      }
    }).catch(error => {
      console.log(error);
    });
  },
  methods: {
    gotoDetailsHandle(id) {
      this.$router.push({
        name: "Details",
        params: {id}
      })
    },
  }
}
</script>
<style>
ul {
  list-style: none;
}

ul li {
  border-bottom: 2px solid #222;
}

img {
  width: 100%;
}</style>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li v-for="(item,index) in order" :key="index">
        <span>{{ item.name }}</span><span>{{ item.price | money }}</span>
      </li>
    </ul>
    <div>
      <p>{{ bookName | author }}</p>
      <p>{{ '浪流地球' | author }}</p>
      <p>{{ bookName | author | money }}</p>
      <p>{{ '2020-11-14 14:00:00' |formatDate }}</p>
    </div>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import {formatDate} from '@/common/js/date.js';

  export default {
    name: 'App',
    data() {
      return {
        bookName: "三体",
        order: [
          {
            id: 1001,
            name: "纸巾",
            price: 59
          },
          {
            id: 1002,
            name: "衣服",
            price: 399
          }
        ]
      }
    },
    filters: {
      author: function (val) {
        if (val) {
          return val + "   作者：大刘"
        }
      },
      formatDate:function(time){
        let date=new Date(time);
        console.log(date);
        return formatDate(date,'yyyy年-MM月dd日 hh:mm')
      }
    },
    components: {
      HelloWorld
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

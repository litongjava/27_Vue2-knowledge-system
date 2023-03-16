<template>

<div>
  <div class='team-list'>
    <div class='team-name' @click='nameClick()'>
      <div>{{message}}</div>
    </div>
    <ul class='team-form' v-show="showNum==1" @click='ulClick()'>
      <li v-for="(item,index) in items" :key="index" @click="changeClick(item)">{{item.name}}</li>
    </ul>
  </div>
  <div>其他元素</div>
</div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {num: 1, name: 'a',}, {num: 2, name: 'b',}, {num: 3, name: 'c',}, {num: 4, name: 'd',}, {num: 5, name: 'e',}
      ],
      message: '选择组员',
      showNum: '0'
    }
  },
  mounted() {
  },
  methods: {
    nameClick() {
      this.showNum = 1
    },
    ulClick() {
      this.showNum = 0
    },
    changeClick(item) {
      console.log(item)
      this.message = item.name
    }
  }
}
</script>
<style lang="less">
.team-list {
  width: 120px;
  height: 32px;
  color: rgb(58, 57, 57);
  border: 1px solid rgb(173, 171, 171);
  font-size: 22px;
  line-height: 32px;
  padding: 5px;
  border-radius: 5px;
  margin-right: 20px;
}

.team-name {
  display: flex;
  justify-content: space-between;
  padding-left: 5px;
}

.team-form {
  border: 1px solid rgb(168, 167, 167);
  font-size: 24px;
  width: 100px;
  border-radius: 5px;
  margin-left: -6px;
  margin-top: 6px;
  max-height: 240px;
  padding-top: 10px;
  padding-bottom: 10px;;
  overflow: auto;
}

.team-form li {
  height: 50px;
  line-height: 50px;
  list-style: none;
  text-align: left;
}
</style>



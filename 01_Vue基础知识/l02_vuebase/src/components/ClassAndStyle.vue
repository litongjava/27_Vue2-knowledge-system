<template>
  <div>
      <h3>class与style的绑定</h3>
      <h4>对象语法</h4>
      <p class="info" :class="active">我是Class对象绑定</p>
      <ul>
          <li @click="clickActiveHandle(index)" :class="{active:index === current,'text-danter':true}" v-for="(item,index) in lists" :key="index">{{ item }}</li>
      </ul>
      <p :class="[flag ? 'active':'error','danger']">我是Class数组绑定</p>
      <!-- 数组和对象的嵌套使用：必须是数组嵌套对象 -->
      <p :class="[{active:true},flag ? 'active1':'error','danger']">我是Class数组和对象的嵌套</p>
      <p :style="{ color:'#ff0000',fontSize:'30px' }">我是Style绑定</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            active:"active",
            lists:["itbaizhan","sxt","前端"],
            current:0,
            flag:true
        }
    },
    methods:{
        clickActiveHandle(index){
            this.current = index;
        }
    }
}
</script>

<style>

.active{
    color: red;
}

</style>
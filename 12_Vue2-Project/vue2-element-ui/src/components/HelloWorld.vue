<template>
<div>
  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: [],
      defaultProps: {
        children: 'treeMenu',
        label: 'name',
        isLeaf:'leaf'
      }
    };
  },

  methods: {
    loadNode(node, resolve) {//初始加载节点数据
      if (node.level === 0) {
        returnresolve([{name:'region'},{name:"region2"}]);
      }//点击第一级节点后，触发延时操作，返回子节点

      if (node.level === 1) {
        setTimeout(()=>{const data =[{name:'leaf'}, {name:'zone',disabled:true,leaf:true}];resolve(data);},500);
      }//点击第二级节点后，没有节点返回，返回 null。
      if (node.level > 1) {returnresolve([]);}
    },
    handleNodeClick(data) {
      console.log(data);
    }
  },
  created() {
    axios.get(`http://localhost:9000/treeMenu/selectAllWithTree`)
      .then(response => {
        //console.log(response);
        this.data = response.data.data.items;
        console.log(this.data)
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

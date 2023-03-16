<template>
<div class="info">
  <p class="title">
    <i></i>病毒信息
  </p>
  <div class="content">
    <p>{{covid19Info.note1}}</p>
    <p>{{covid19Info.note2}}</p>
    <p>{{covid19Info.note3}}</p>
    <p>{{covid19Info.remark1}}</p>
    <p>{{covid19Info.remark2}}</p>
    <p>{{covid19Info.remark3}}</p>
  </div>
</div>
</template>

<script>
import api from "../api"
export default {
  name: "covid19Info",
  data(){
    return {
      covid19Info:{}
    }
  },
  mounted() {
    api.getNcov({
      key: "62e34ad34025d5d5127135efa58d4ca8",
    }).then((res)=>{
      if(res.status==200){
        this.covid19Info={
          "note1":res.data.newList[0].desc.note1,
          "note2":res.data.newList[0].desc.note2,
          "note3":res.data.newList[0].desc.note3,
          "remark1":res.data.newList[0].desc.remark1,
          "remark2":res.data.newList[0].desc.remark2,
          "remark3":res.data.newList[0].desc.remark3,
        }
      }
    })
  }
}
</script>

<style scoped>
.info{
  padding:0.16rem;
  background:#fff;
  border: 1px solid #f1f1f1;
}
.title{
  font-size: 0.17rem;
}
.title i{
  display: inline-block;
  width: 0.04rem;
  height:0.16rem;
  margin-right: 0.03rem;
  vertical-align: middle;
  background: #416912;
}
.content{
  padding:0.06rem 0.16rem;
}
.content p{
  font-size: 13px;
  margin: 5px 0;
}

</style>

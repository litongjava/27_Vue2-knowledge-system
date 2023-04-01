<template>
<div class="home">
  <covidHeader/>
  <covid19Info :covid19-info="covid19Info"/>
  <caseNum :caseNum="caseNum"/>
</div>

</template>

<script>
import covidHeader from "../components/covidHeader";
import covid19Info from "../components/covid19Info";
import caseNum from "../components/caseNum";
import api from "../api";
export default {
  name: 'HomeView',
  components: {
    covidHeader, covid19Info,caseNum,
  },
  data(){
    return {
      covid19Info:{},
      caseNum:{},
    }
  },
  mounted() {
    api.getNcov({
      key: "62e34ad34025d5d5127135efa58d4ca8",
    }).then((res)=>{
      if(res.status==200){
        this.covid19Info={
          note1:res.data.newList[0].desc.note1,
          note:res.data.newList[0].desc.note2,
          note:res.data.newList[0].desc.note3,
          remark1:res.data.newList[0].desc.remark1,
          remark2:res.data.newList[0].desc.remark2,
          remark3:res.data.newList[0].desc.remark3,
        };
        this.caseNum={
          modifyTime:res.data.newList[0].desc.modifyTime,
          currentConfirmedCount:res.data.newList[0].desc.currentConfirmedCount,
          confirmedCount:res.data.newList[0].desc.confirmedCount,
          suspectedCount:res.data.newList[0].desc.suspectedCount,
          curedCount:res.data.newList[0].desc.curedCount,
          deadCount:res.data.newList[0].desc.deadCount,
          seriousCount:res.data.newList[0].desc.seriousCount,
          suspectedIncr:res.data.newList[0].desc.suspectedIncr,
          currentConfirmedIncr:res.data.newList[0].desc.currentConfirmedIncr,
          confirmedIncr:res.data.newList[0].desc.confirmedIncr,
          curedIncr:res.data.newList[0].desc.curedIncr,
          deadIncr:res.data.newList[0].desc.deadIncr,
          seriousIncr:res.data.newList[0].desc.seriousIncr,
        };

      }
    })
  }
}
</script>

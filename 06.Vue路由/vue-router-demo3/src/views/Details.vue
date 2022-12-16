<template>
  <div>
    <h3>详情页</h3>
    <p>id={{$route.params.id}}</p>
    <p>props id={{id}}</p>
    <div>
      <p>{{detailsData.desc}}</p>
    </div>
  </div>
</template>
<script>
import api from "../api"

export default {
  data() {
    return {
      detailsData: {}
    }
  },
  props: {
    id: {
      type: [String, Number],
      default: 0
    }
  },
  mounted() {
    api.getDetails({id: this.$route.params.id})
      .then(res => {
        if (res.data) {
          this.detailsData = res.data;
        }
      }).catch(error => {
      console.log(error)
    });
  }
}
</script>
<style></style>

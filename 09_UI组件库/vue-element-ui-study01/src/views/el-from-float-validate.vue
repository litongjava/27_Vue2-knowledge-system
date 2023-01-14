<template>
<el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px">
  <el-form-item label="短信条数：" prop="sms_count">
    <el-input v-model="form.sms_count" placeholder="请输入套餐短信条数"></el-input>
  </el-form-item>
</el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        sms_count: "",
      },
      rules: {
        sms_count: [
          {
            required: true,
            type: "float",
            message: "请输入短信数量",
            trigger: "blur",
            transform(value) {
              return Number(value);
            },
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>

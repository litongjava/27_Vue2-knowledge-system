<template>
<el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px">
  <el-form-item label="短信条数：" prop="sms_count">
    <el-input v-model="form.sms_count" placeholder="请输入套餐短信条数" :rules="[
        {required: true, message: '请输入短信条数', trigger: 'blur'},
        {
          transform(value) {
            return Number(value);
          },
          validator: validateAmount, trigger: ['blur', 'change'],
        },
      ]">
    </el-input>
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
          {required: true, message: "请输入短信条数", trigger: "blur"},
          {
            transform(value) {
              return Number(value);
            },
            validator(rule, value, callback) {
              if (Number.isFinite(value) && value >= 0) {
                callback();
              } else {
                callback(new Error("请输入不小于0的数字"));
              }
            },
            trigger: "blur",
          }
        ]
      }
    }
  },
  methods:{
    validateAmount(rule, value, callback){
      if (Number.isFinite(value) && value >= 0) {
        callback();
      } else {
        callback(new Error("请输入不小于0的数字"));
      }
    }
  }
}
</script>

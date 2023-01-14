<template>
<div>
  <el-form :model="form" :rules="rules" label-width="100px" class="demo-form">
    <el-form-item label="是否依法必招项目" prop="project">
      <el-radio-group v-model="form.project">
        <el-radio :label="1">是</el-radio>
        <el-radio :label="0">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item
      v-if="form.project == 0" label="投资代码缺失原因" prop="invesmentReason">
      <el-input type="textarea" v-model="form.invesmentReason"></el-input>
    </el-form-item>
    <p align="center" style="margin-bottom: 60px;">
      <el-button type="primary" size="medium" @click="saveForm">保存</el-button>
    </p>
  </el-form>


</div>
</template>

<script>
export default {
  name: "ElFormView",
  data() {
    return {
      form: {
        project: 1,
        invesmentReason: "",
      },
      rules: {
        project: [
          {required: true, message: '请选择', trigger: 'change',}
        ],
        invesmentReason: [
          {required: true, message: '请填写投资代码缺失原因', trigger: 'blur',}
        ]
      }
    };

  },
  methods: {
    saveForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log('验证通过');
        } else {
          const el = document.querySelectorAll('.el-form-item__error')[0];
          el.scrollIntoView({block: 'center', behavior: 'smooth'});
          this.$nextTick(() => {
            const el = document.querySelectorAll('.el-form-item__error')[0];
            el.scrollIntoView({block: 'center', behavior: 'smooth'});
          });
          console.log('验证失败');
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>
</style>

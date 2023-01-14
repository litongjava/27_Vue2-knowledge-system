<template>
<div id="app">
  <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px">
    <el-form-item label="活动名称:" class="is-required" prop="file">
      <el-upload action="https://jsonplaceholder.typicode.com/posts/" :on-remove="handleRemove"
                 :on-success="uploadSuccess">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  data() {
    // 文件上传校验规则
    const fileMustUpload = (rule, value, callback) => {
      if (this.form.file == null) {
        // 未上传文件
        callback("请上传文件");
      }
      callback();
    }

    return {
      form: {
        file: null    //接受文件值
      },
      rules: {
        file: [
          //自定义校验器
          {validator: fileMustUpload, trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    // 文件移除事件监听
    handleRemove() {
      this.form.file = null;
    },

    // 提交
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert('上传成功!');
        }
      });
    },

    // 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
    uploadSuccess(file) {
      console.log(file);
      this.form.file = file
    },
  },

}
</script>

<style>
.el-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#app {
  height: 100%;
}
</style>

<template>
  <el-form :model="loginForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="账号" prop="name">
    <el-input v-model.number="loginForm.name"></el-input>
  </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="loginForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('loginForm')" >登陆</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "login",
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'));
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }
    };
    return {
      loginForm: {
        name: '',
        pass: ''
      },
      rules: {
        name: [
          { validator: checkName, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ]
      },
    };
  },
  methods: {
    submitForm(loginForm) {
      // this.$nextTick[loginForm].validate((valid) => {
      //   alert(valid)
      //   if (valid) {
      //     alert('submit!');
      //     this.$router.push("/main"+this.form.name)
      //   } else {
      //     console.log('error submit!!');
      //     return false;
      //   }
      // });
      //为表单绑定验证功能
      if (this.loginForm.name!= '' && this.loginForm.pass != '')
        this.$router.push("/main/"+this.loginForm.name);
      // this.$refs[loginForm].validate((valid) => {
      //   if (valid) {
      //     alert('submit!');
      //     this.$router.push("/main"+this.form.name)
      //   } else {
      //     console.log('error submit!!');
      //     return false;
      //   }
      // });
      // this.$router.push("/main");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
}
</script>

<style scoped>

</style>

<template>
  <div class="container">
    <router-link class="title" :to="{path:'/'}">blog</router-link>
    <div class="form_box">
      <div class="nav">
        <div :class="type == 1 ? 'nav_left_active' : 'nav_left'" @click="click_nav(1)">登录</div>
        <div class="nav_dot">·</div>
        <div :class="type == 2 ? 'nav_right_active' : 'nav_right'" @click="click_nav(2)">注册</div>
      </div>
      <!-- <el-form label-width="80px" v-if="type == 1">
        <el-form-item label="用户名">
          <el-input v-model="form.name2"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password2"></el-input>
        </el-form-item>
        <div class="btn_box" style="padding-left:80px">
          <el-button type="primary">确认</el-button>
        </div>
      </el-form>-->
      <div class="name_pass" v-if="type == 1">
        <div class="name_pass_bar">
          <span>用户名</span>
          <el-input v-model="userName" placeholder="请输入用户名"></el-input>
        </div>
        <div class="name_pass_bar">
          <span>密码</span>
          <el-input v-model="passWord" placeholder="请输入密码"></el-input>
        </div>
        <el-button type="primary" @click="login">确认</el-button>
      </div>
      <el-form
        v-if="type == 2"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-dynamic"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item
          prop="email"
          label="邮箱"
          :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
        >
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <div class="btn_box">
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginRegister",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      type: 1,
      ruleForm: {
        pass: "",
        checkPass: "",
        email: "",
        name: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      },
      userName: "",
      passWord: ""
    };
  },
  methods: {
    // 注册
    submitForm(formName) {
      if (this.ruleForm.name.length == 0) {
        this.$message({
          message: "请输入用户名",
          type: "warning"
        });
        return;
      }
      if (this.ruleForm.email.length == 0) {
        this.$message({
          message: "请输入邮箱",
          type: "warning"
        });
        return;
      }
      if (this.ruleForm.pass.length == 0) {
        this.$message({
          message: "请输入密码",
          type: "warning"
        });
        return;
      }
      if (this.ruleForm.checkPass.length == 0) {
        this.$message({
          message: "请确认密码",
          type: "warning"
        });
        return;
      }
      this.$axios
        .post("/register", {
          userName: this.ruleForm.name,
          passWord: this.ruleForm.pass,
          email: this.ruleForm.email
        })
        .then(res => {
          if (res.data.code == 1) {
            this.$message({
              message: "注册成功",
              type: "success"
            });
          } else {
            this.$message.error(res.err);
          }
        })
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 点击登录注册导航栏
    click_nav(e) {
      if (this.type == e) return;
      this.type = e;
    },
    // 登录
    login() {
      this.$axios.post("/login", {
        userName: this.ruleForm.name,
        passWord: this.ruleForm.pass,
      })
      .then(res=>{
        if (res.data.code == 1) {
            this.$message({
              message: "登录成功",
              type: "success"
            });
          } else {
            this.$message.error(res.err);
          }
      })
    }
  },
  created() {
    this.type = this.$route.query.type;
  }
};
</script>
<style lang="less" scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-color: #000;
  background-color: #f1f1f1;
  .title {
    font-size: 40px;
    color: #3498ff;
    margin-left: 50px;
    padding-top: 30px;
    display: block;
  }
  .form_box {
    width: 25%;
    margin: auto;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    padding-right: 50px;
    padding-bottom: 30px;
    .nav {
      width: 30%;
      display: flex;
      justify-content: space-around;
      margin: auto;
      padding: 15px 0;
      font-weight: 700;
      .nav_dot {
        color: #999;
      }
      .nav_left {
        color: #999;
        padding-bottom: 10px;
        cursor: pointer;
      }
      .nav_left_active {
        color: #3498ff;
        border-bottom: 2px solid #3498ff;
        padding-bottom: 10px;
        cursor: pointer;
      }
      .nav_right {
        color: #999;
        padding-bottom: 10px;
        cursor: pointer;
      }
      .nav_right_active {
        color: #3498ff;
        border-bottom: 2px solid #3498ff;
        padding-bottom: 10px;
        cursor: pointer;
      }
    }
    .btn_box {
      padding-left: 100px;
    }
    .name_pass {
      .name_pass_bar {
        display: flex;
        margin-left: 45px;
        line-height: 40px;
        margin-bottom: 20px;
        span {
          color: #606266;
          font-size: 14px;
          width: 50px;
        }
        .el-input {
          width: 375px;
          margin-left: 13px;
        }
      }
      .el-button {
        margin-left: 108px;
      }
    }
  }
}
</style>

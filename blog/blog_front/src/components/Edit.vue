<template>
  <div class="container">
    <div class="header">
      <el-button type="primary" @click="goHome">回首页</el-button>
      <div class="input_btn">
        <el-input v-model="label" placeholder="请输入文章标签" style="width:150px"></el-input>
        <el-input v-model="title" placeholder="请输入文章标题"></el-input>
        <el-button type="primary" icon="el-icon-check">发布</el-button>
      </div>
    </div>
    <mavon-editor v-model="value" />
  </div>
</template>

<script>
export default {
  name: "Edit",
  data() {
    return {
      value: "",
      title: "",
      label:'',
    };
  },
  methods: {
    goHome(){
      this.$router.push({
        path:'/'
      })
    }
  },
};
</script>
<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  width: 96%;
  .input_btn {
    .el-input {
      width: 400px;
      margin-right: 15px;
    }
  }
}
</style>

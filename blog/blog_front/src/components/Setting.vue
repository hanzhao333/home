<template>
  <div class="container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#3498ff"
    >
      <el-menu-item index="1">
        <i class="el-icon-user"></i>
        <span>个人资料</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-lock"></i>
        <span>密码修改</span>
      </el-menu-item>
    </el-menu>
    <div class="person_data" v-if="select_index == 1">
      <div class="data_list">
        <span>头像：</span>
        <img src="../assets/img/avatar.jpg" alt class="avatar_icon" />
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="1"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </div>
      <div class="data_list">
        <span>昵称：</span>
        <el-input v-model="nickname" placeholder="请输入昵称"></el-input>
      </div>
      <div class="data_list">
        <span>邮箱：</span>
        <el-input v-model="mailbox" placeholder="请输入昵称"></el-input>
      </div>
      <div class="data_list">
        <span style="margin-top:0">性别：</span>
        <div class="sex_box">
          <el-radio v-model="sex" label="1">男</el-radio>
          <el-radio v-model="sex" label="2">女</el-radio>
        </div>
      </div>
      <div class="data_list">
        <span>简介：</span>
        <el-input type="textarea" :rows="5" placeholder="这个人很懒，什么也没留下" v-model="textarea"></el-input>
      </div>
      <el-button type="primary" style="margin: 30px 0 0 62px;width: 40%;">提交</el-button>
    </div>
    <div class="person_data" v-if="select_index == 2">
      <div class="data_list">
        <span>原始密码：</span>
        <el-input v-model="nickname" placeholder="原始密码"></el-input>
      </div>
      <div class="data_list">
        <span>新的密码：</span>
        <el-input v-model="nickname" placeholder="新密码"></el-input>
      </div>
      <div class="data_list">
        <span>再次确认：</span>
        <el-input v-model="nickname" placeholder="请确认新密码"></el-input>
      </div>
       <el-button type="primary" style="margin: 30px 0 0 95px;width: 40%;">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Setting",
  data() {
    return {
      activeIndex: "1",
      select_index: 1,
      fileList: [],
      textarea: "",
      nickname: "",
      mailbox: "",
      sex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.select_index = key;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  margin-top: 56px;
  padding: 0 28%;
  .el-menu-demo {
    display: flex;
    justify-content: space-between;
  }
  .data_list {
    display: flex;
    margin-top: 30px;
    .upload-demo {
      margin-top: 4px;
    }
    span {
      margin: 9px 15px 0 0;
    }
    .avatar_icon {
      width: 40px;
      height: 40px;
      border-radius: 40px;
      margin-right: 15px;
    }
    .el-input {
      width: 40%;
    }
    .el-textarea {
      width: 40%;
    }
  }
}
</style>

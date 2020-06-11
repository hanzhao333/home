<template>
  <div class="container">
    <div class="left">
      <router-link :to="{path:'/'}">blog</router-link>
    </div>
    <div class="middle">
      <div :class="[nav_index == 1 ? 'active' : '','image_text']">
        <div class="nav_list" @click="jump_child(1)">
          <i class="el-icon-discover"></i>
          <span>发现</span>
        </div>
      </div>
      <div v-if="is_login == 1" :class="[nav_index == 2 ? 'active' : '','image_text']">
        <div class="nav_list" @click="jump_child(2)">
          <i class="el-icon-reading"></i>
          <span>关注</span>
        </div>
      </div>
      <div v-if="is_login == 1" :class="[nav_index == 3 ? 'active' : '','image_text']">
        <div class="nav_list" @click="jump_child(3)">
          <i class="el-icon-bell"></i>
          <span>消息</span>
        </div>
      </div>
      <div class="input_search">
        <input type="text" placeholder="搜索" />
        <a href>
          <i class="el-icon-search"></i>
        </a>
      </div>
    </div>
    <div class="right">
      <div v-if="is_login" class="avatar_options">
        <div class="image_icon">
          <img src="../assets/img/avatar.jpg" alt class="avatar_icon" />
          <i class="el-icon-caret-bottom"></i>
        </div>
        <div class="func_nav_view">
          <div class="nav_view_list">
            <router-link :to="{path:'/PersonPage'}">
              <i class="el-icon-s-check"></i>
              <span>我的主页</span>
            </router-link>
          </div>
          <div class="nav_view_list">
            <router-link :to="{path:'/CollectArticle'}">
              <i class="iconfont">&#xe8c6;</i>
              <span>收藏的文章</span>
            </router-link>
          </div>
          <div class="nav_view_list">
            <router-link :to="{path:'/LoveArticle'}">
              <i class="iconfont">&#59587;</i>
              <span>喜欢的文章</span>
            </router-link>
          </div>
          <div class="nav_view_list">
            <router-link :to="{path:'/Setting'}">
              <i class="el-icon-s-tools"></i>
              <span>设置</span>
            </router-link>
          </div>
          <div class="nav_view_list">
            <div class="quit">
              <i class="iconfont">&#xe639;</i>
              <span>退出</span>
            </div>
          </div>
        </div>
      </div>
      <div class="login_register" v-if="!is_login">
        <router-link class="login" :to="{path:'/LoginRegister',query:{type:1}}">登陆</router-link>
        <router-link class="register" :to="{path:'/LoginRegister',query:{type:2}}">注册</router-link>
      </div>
      <div class="right_icon_text">
        <router-link :to="{path:'/Edit'}">
          <i class="el-icon-edit"></i>
          <span>写文章</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      input: "",
      nav_index: 1,
      is_login: 1
    };
  },
  created() {

    console.log(this.is_login, 4111);
    this.nav_index = this.$route.query.nav_index || 1;
  },
  methods: {
    toHome() {
      this.$router.push({
        path: "/"
      });
    },
    toSetting() {
      this.$router.push({
        path: "/Setting",
        query: {
          nav_index: -1
        }
      });
    },
    toPersonPage() {
      this.$router.push({
        path: "/PersonPage",
        query: {
          nav_index: -1
        }
      });
    },
    toLoveArticle() {
      this.$router.push({
        path: "LoveArticle",
        query: {
          nav_index: -1
        }
      });
    },
    toCollectArticle() {
      this.$router.push({
        path: "CollectArticle"
      });
    },
    jump_child(e) {
      this.nav_index = e;
      if (e === 1) {
        this.$router.push({
          path: "/Find",
          query: {
            nav_index: e
          }
        });
      } else if (e === 2) {
        this.$router.push({
          path: "/Attention",
          query: {
            nav_index: e
          }
        });
      } else {
        this.$router.push({
          path: "/Message",
          query: {
            nav_index: e
          }
        });
      }
    }
  }
};
</script>
<style scoped>
.container {
  height: 56px;
  padding: 0 15%;
  overflow: visible;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  z-index: 99999;
  background-color: #fff;
}
.left {
  float: left;
  font-size: 40px;
}
.left a {
  color: #3498ff;
}
.middle {
  float: left;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  margin: 0 0 0 150px;
  height: 100%;
}
.image_text > .nav_list {
  color: #333;
  height: 100%;
  display: block;
  line-height: 56px;
  padding: 0 15px;
  cursor: pointer;
}
.image_text > .nav_list:hover {
  background-color: #f2f2f2;
}
.active .nav_list {
  color: #3498ff;
}
.image_text {
  margin-right: 25px;
}
.right {
  float: right;
  color: #999;
  display: flex;
  justify-content: space-around;
}
.login_register {
  display: flex;
  margin-top: 8px;
}
.login {
  color: #969696;
  font-size: 15px;
  margin: 10px 15px 0 0;
}
.register {
  width: 80px;
  height: 38px;
  line-height: 38px;
  border: 1px solid #3498ff;
  color: #3498ff;
  border-radius: 20px;
  font-size: 15px;
  text-align: center;
}
.avatar_options > .image_icon {
  color: #999;
  height: 56px;
  line-height: 56px;
  padding: 0 15px;
  display: flex;
  justify-content: space-around;
  font-size: 18px;
}
.avatar_options > .image_icon:hover {
  background-color: #f2f2f2;
}
.avatar_options {
  height: 56px;
  font-size: 25px;
  position: relative;
  overflow: hidden;
}
.avatar_options:hover {
  overflow: visible;
}
.avatar_options i {
  line-height: 2.8;
}
.func_nav_view {
  position: absolute;
  top: 56px;
  left: 0px;
  width: 170px;
  height: 300px;
  padding: 5px 0;
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.09);
}
.nav_view_list {
  width: 155px;
  height: 60px;
  line-height: 60px;
  padding-left: 15px;
}
.nav_view_list:hover {
  background-color: #f2f2f2;
}
.nav_view_list a {
  color: #3498ff;
  font-size: 18px;
}
.nav_view_list .quit{
  color: #3498ff;
  font-size: 18px;
  cursor: pointer;
}
.nav_view_list a span {
  color: #333;
}
.nav_view_list .quit span {
  color: #333;
}
.avatar_icon {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: orange;
  margin-top: 7px;
}
.right_icon_text {
  height: 40px;
  margin-top: 8px;
  text-align: center;
  background-color: #3498ff;
  padding: 0 15px;
  border-radius: 20px;
  font-size: 15px;
  line-height: 40px;
  margin-left: 15px;
}
.right_icon_text a {
  color: #fff;
}
.input_search {
  line-height: 38px;
  position: relative;
  color: #ddd;
}
.input_search input {
  height: 38px;
  padding: 0 40px 0 20px;
  background-color: #eee;
  border: 1px solid transparent;
  border-radius: 20px;
  margin-top: 8px;
}
.input_search input:focus {
  outline: none;
}
.input_search a {
  position: absolute;
  top: 18px;
  right: 5px;
  color: #ddd;
  width: 30px;
  height: 30px;
  padding: 0;
}
.input_search a i {
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
}
</style>
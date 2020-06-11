<template>
  <div class="container">
    <div class="header">
      <img src="../assets/img/avatar.jpg" alt class="avatar_icon" />
      <div class="right">
        <div class="top">
          <span>绿陵王</span>
          <i class="iconfont">&#xe641;</i>
        </div>
        <div class="bottom">
          <router-link :to="{path:'/Followeing'}">
            <div class="list">
              <div class="list_top">10</div>
              <div class="list_bottom">关注></div>
            </div>
          </router-link>
          <router-link :to="{path:'/Followers'}">
            <div class="list">
              <div class="list_top">10</div>
              <div class="list_bottom">粉丝></div>
            </div>
          </router-link>
          <router-link :to="{path:'/Article_dyn'}">
            <div class="list">
              <div class="list_top">10</div>
              <div class="list_bottom">文章></div>
            </div>
          </router-link>
          <div class="list">
            <div class="list_top">10</div>
            <div class="list_bottom">收获喜欢 ></div>
          </div>
        </div>
      </div>
      <el-button
        :class="is_attention ? 'active' : ''"
        type="primary"
        :icon="is_attention ? 'el-icon-check' : ''"
      >{{is_attention ? '关注' : '+关注'}}</el-button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "PersonPage",
  data() {
    return {
      is_attention: 1
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.container {
  margin-top: 76px;
  padding: 0 28.5%;
  .header {
    display: flex;
    .avatar_icon {
      width: 65px;
      height: 65px;
      border-radius: 65px;
      margin-right: 20px;
    }
    .right {
      .top {
        font-size: 21px;
        font-weight: 700;
        margin-bottom: 5px;
        .iconfont {
          color: #3194d0;
        }
      }
      .bottom {
        .list {
          display: inline-block;
          border-right: 1px solid #f0f0f0;
          margin-right: 10px;
          padding-right: 10px;
          font-size: 12px;
          .list_top {
            color: #666;
          }
          .list_bottom {
            color: #999;
          }
        }
      }
    }
    .active {
      color: #666;
      border: 1px solid #999;
      background-color: #fff;
      border-radius: 20px;
      height: 40px;
      margin: 13px 0 0 50px;
    }
  }
}
</style>

<template>
  <div class="container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#646464"
    >
      <el-menu-item index="1">
        <span>关注列表</span>
      </el-menu-item>
      <el-menu-item index="2">
        <span>粉丝列表</span>
      </el-menu-item>
    </el-menu>
    <div class="attention" v-if="activeIndex == '1'">
      <div class="attention_list">
        <a href>
          <img src="../assets/img/avatar.jpg" alt class="avatar_icon" />
          <span>绿陵王</span>
        </a>
        <el-button
          :class="is_attention ? 'active' : ''"
          type="primary"
          :icon="is_attention ? 'el-icon-check' : ''"
        >{{is_attention ? '关注' : '+关注'}}</el-button>
      </div>
      <div class="line"></div>
      <div class="attention_list">
        <a href>
          <img src="../assets/img/avatar.jpg" alt class="avatar_icon" />
          <span>绿陵王</span>
        </a>
        <el-button
          :class="is_attention ? 'active' : ''"
          type="primary"
          :icon="is_attention ? 'el-icon-check' : ''"
        >{{is_attention ? '关注' : '+关注'}}</el-button>
      </div>
      <div class="line"></div>
      <div class="attention_list">
        <a href>
          <img src="../assets/img/avatar.jpg" alt class="avatar_icon" />
          <span>绿陵王</span>
        </a>
        <el-button
          :class="is_attention ? 'active' : ''"
          type="primary"
          :icon="is_attention ? 'el-icon-check' : ''"
        >{{is_attention ? '关注' : '+关注'}}</el-button>
      </div>
      <div class="line"></div>
      <div class="attention_list">
        <a href>
          <img src="../assets/img/avatar.jpg" alt class="avatar_icon" />
          <span>绿陵王</span>
        </a>
        <el-button
          :class="is_attention ? 'active' : ''"
          type="primary"
          :icon="is_attention ? 'el-icon-check' : ''"
        >{{is_attention ? '关注' : '+关注'}}</el-button>
      </div>
      <div class="line"></div>
      <div class="attention_list">
        <a href>
          <img src="../assets/img/avatar.jpg" alt class="avatar_icon" />
          <span>绿陵王</span>
        </a>
        <el-button
          :class="is_attention ? 'active' : ''"
          type="primary"
          :icon="is_attention ? 'el-icon-check' : ''"
        >{{is_attention ? '关注' : '+关注'}}</el-button>
      </div>
    </div>
    <div class="attention" v-if="activeIndex == '2'">
      <div class="attention_list">
        <a href>
          <img src="../assets/img/avatar.jpg" alt class="avatar_icon" />
          <span>出发</span>
        </a>
        <el-button
          :class="is_attention ? 'active' : ''"
          type="primary"
          :icon="is_attention ? 'el-icon-check' : ''"
        >{{is_attention ? '关注' : '+关注'}}</el-button>
      </div>
      <div class="line"></div>
      <div class="attention_list">
        <a href>
          <img src="../assets/img/avatar.jpg" alt class="avatar_icon" />
          <span>出发</span>
        </a>
        <el-button
          :class="is_attention ? 'active' : ''"
          type="primary"
          :icon="is_attention ? 'el-icon-check' : ''"
        >{{is_attention ? '关注' : '+关注'}}</el-button>
      </div>
      <div class="line"></div>
      <div class="attention_list">
        <a href>
          <img src="../assets/img/avatar.jpg" alt class="avatar_icon" />
          <span>出发</span>
        </a>
        <el-button
          :class="is_attention ? 'active' : ''"
          type="primary"
          :icon="is_attention ? 'el-icon-check' : ''"
        >{{is_attention ? '关注' : '+关注'}}</el-button>
      </div>
      <div class="line"></div>
      <div class="attention_list">
        <a href>
          <img src="../assets/img/avatar.jpg" alt class="avatar_icon" />
          <span>出发</span>
        </a>
        <el-button
          :class="is_attention ? 'active' : ''"
          type="primary"
          :icon="is_attention ? 'el-icon-check' : ''"
        >{{is_attention ? '关注' : '+关注'}}</el-button>
      </div>
      <div class="line"></div>
      <div class="attention_list">
        <a href>
          <img src="../assets/img/avatar.jpg" alt class="avatar_icon" />
          <span>出发</span>
        </a>
        <el-button
          :class="is_attention ? 'active' : ''"
          type="primary"
          :icon="is_attention ? 'el-icon-check' : ''"
        >{{is_attention ? '关注' : '+关注'}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Followeing",
  data() {
    return {
      activeIndex: "1",
      is_attention: 0
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key;
    }
  },
};
</script>
<style lang="less" scoped>
@color: #3498ff;
.line {
  width: 100%;
  height: 1px;
  background-color: #f7f7f7;
  margin: 10px auto;
}
.container {
  padding: 0;
  margin: 0;
  .attention {
    margin-top: 10px;
    .attention_list {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      img {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        vertical-align: middle;
      }
      span {
        color: #333;
        font-size: 15px;
        font-weight: 700;
        margin-left: 10px;
        margin-top: 3px;
      }
      .el-button {
        border-radius: 20px;
      }
      .active {
        color: #666;
        border: 1px solid #999;
        background-color: #fff;
        border-radius: 20px;
      }
    }
  }
}
</style>

<template>
  <div class="container">
    <div class="left">
      <div :class="['common',nav_index==1?'active':'']" @click="click_nav(1)">
        <i class="iconfont">&#xe746;</i>
        <span>评论</span>
      </div>
      <div :class="['common',nav_index==2?'active':'']"  @click="click_nav(2)">
        <i class="iconfont">&#xe62a;</i>
        <span>喜欢</span>
      </div>
    </div>
    <div class="right" v-if="nav_index == 1">
      <div class="title">收到的评论</div>
      <div class="line"></div>
      <div class="list">
        <div class="top">
          <img src="../assets/img/avatar.jpg" alt />
          <div class="top_right">
            <div class="detail">
              <span>小啊包</span>
              <span>评论了你的文章</span>
              <span>《啦啦啦》</span>
            </div>
            <div class="time">2019.12.20 16:41</div>
          </div>
        </div>
        <div class="bottom">cool guy，写的很棒呀，别让我追赶上你的脚步呀.</div>
      </div>
      <div class="line"></div>
      <div class="list">
        <div class="top">
          <img src="../assets/img/avatar.jpg" alt />
          <div class="top_right">
            <div class="detail">
              <span>小啊包</span>
              <span>评论了你的文章</span>
              <span>《啦啦啦》</span>
            </div>
            <div class="time">2019.12.20 16:41</div>
          </div>
        </div>
        <div class="bottom">cool guy，写的很棒呀，别让我追赶上你的脚步呀.</div>
      </div>
      <div class="line"></div><div class="list">
        <div class="top">
          <img src="../assets/img/avatar.jpg" alt />
          <div class="top_right">
            <div class="detail">
              <span>小啊包</span>
              <span>评论了你的文章</span>
              <span>《啦啦啦》</span>
            </div>
            <div class="time">2019.12.20 16:41</div>
          </div>
        </div>
        <div class="bottom">cool guy，写的很棒呀，别让我追赶上你的脚步呀.</div>
      </div>
      <div class="line"></div><div class="list">
        <div class="top">
          <img src="../assets/img/avatar.jpg" alt />
          <div class="top_right">
            <div class="detail">
              <span>小啊包</span>
              <span>评论了你的文章</span>
              <span>《啦啦啦》</span>
            </div>
            <div class="time">2019.12.20 16:41</div>
          </div>
        </div>
        <div class="bottom">cool guy，写的很棒呀，别让我追赶上你的脚步呀.</div>
      </div>
      <div class="line"></div><div class="list">
        <div class="top">
          <img src="../assets/img/avatar.jpg" alt />
          <div class="top_right">
            <div class="detail">
              <span>小啊包</span>
              <span>评论了你的文章</span>
              <span>《啦啦啦》</span>
            </div>
            <div class="time">2019.12.20 16:41</div>
          </div>
        </div>
        <div class="bottom">cool guy，写的很棒呀，别让我追赶上你的脚步呀.</div>
      </div>
      <div class="line"></div><div class="list">
        <div class="top">
          <img src="../assets/img/avatar.jpg" alt />
          <div class="top_right">
            <div class="detail">
              <span>小啊包</span>
              <span>评论了你的文章</span>
              <span>《啦啦啦》</span>
            </div>
            <div class="time">2019.12.20 16:41</div>
          </div>
        </div>
        <div class="bottom">cool guy，写的很棒呀，别让我追赶上你的脚步呀.</div>
      </div>
      <div class="line"></div>
    </div>
    <div class="right" v-if="nav_index == 2">
      <div class="title">收到的喜欢</div>
      <div class="line"></div>
      <div class="list">
        <div class="top">
          <img src="../assets/img/luban.jpg" alt />
          <div class="top_right">
            <div class="detail">
              <span>无敌小鲁班</span>
              <span>喜欢了你的文章</span>
              <span>《啦啦啦》</span>
            </div>
            <div class="time">2019.12.20 16:41</div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="list">
        <div class="top">
          <img src="../assets/img/luban.jpg" alt />
          <div class="top_right">
            <div class="detail">
              <span>无敌小鲁班</span>
              <span>喜欢了你的文章</span>
              <span>《啦啦啦》</span>
            </div>
            <div class="time">2019.12.20 16:41</div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="list">
        <div class="top">
          <img src="../assets/img/luban.jpg" alt />
          <div class="top_right">
            <div class="detail">
              <span>无敌小鲁班</span>
              <span>喜欢了你的文章</span>
              <span>《啦啦啦》</span>
            </div>
            <div class="time">2019.12.20 16:41</div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="list">
        <div class="top">
          <img src="../assets/img/luban.jpg" alt />
          <div class="top_right">
            <div class="detail">
              <span>无敌小鲁班</span>
              <span>喜欢了你的文章</span>
              <span>《啦啦啦》</span>
            </div>
            <div class="time">2019.12.20 16:41</div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="list">
        <div class="top">
          <img src="../assets/img/luban.jpg" alt />
          <div class="top_right">
            <div class="detail">
              <span>无敌小鲁班</span>
              <span>喜欢了你的文章</span>
              <span>《啦啦啦》</span>
            </div>
            <div class="time">2019.12.20 16:41</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      nav_index:1
    };
  },
  methods: {
    click_nav(e){
      this.nav_index = e
      console.log(this.nav_index,456)
    }
  },
  created() {
    console.log(this.$route.query.nav_index,412221)
  },
};
</script>
<style lang="less" scoped>
@color: #3498ff;
.line {
  width: 94%;
  height: 1px;
  background-color: #f7f7f7;
  margin: 30px auto;
}
.container {
  margin-top: 76px;
  display: flex;
  justify-content: space-between;
  padding: 0 28.5%;
  .left {
    width: 30%;
    .common {
      width: 80%;
      height: 50px;
      line-height: 50px;
      padding-left: 20%;
      border-radius: 10px;
      background-color: #fff;
      i {
        color: #3498ff;
        font-size: 1.3em;
        margin-top: 3px;
        font-weight: 700;
      }
    }
    .active{
       background-color: #f2f2f2;
    }
  }
  .right {
    width: 65%;
    margin-left: 5%;
    padding-top: 15px;
    .title{
      font-size: 14px;
      font-weight: 700;
    }
    .list {
      width: 100%;
      .top {
        display: flex;
        justify-content: flex-start;
        img {
          width: 40px;
          height: 40px;
          border-radius: 40px;
          border: 1px solid #ddd;
        }
        .top_right {
          margin-left: 10px;
          .detail span:nth-of-type(3) {
            color: #3498ff;
          }
          .time {
            color: #999;
            font-size: 0.5em;
          }
        }
      }
      .bottom {
        margin-top: 20px;
      }
    }
  }
}
</style>

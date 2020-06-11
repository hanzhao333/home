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
        <i class="iconfont">&#xe626;</i>
        <span>文章</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="iconfont">&#xe625;</i>
        <span>动态</span>
      </el-menu-item>
    </el-menu>
    <div class="article" v-if="activeIndex == '1'">
      <div class="article_list">
        <div class="list_left">
          <div class="top">
            <img src="../assets/img/avatar.jpg" alt />
            <span>学习</span>
          </div>
          <div class="middle">阿好几个货借款股东会尽快发货估计的房价款哈代发货上方的客户方大好时光贾湖骨笛</div>
          <div class="bottom">
            <span>出发</span>
            <span>2019-10-25 19:35</span>
            <i class="iconfont">&#xe746;</i>
            <span>41</span>
            <i class="iconfont">&#xe62a;</i>
            <span>32</span>
          </div>
        </div>
        <div class="list_right">
          <img src alt />
        </div>
      </div>
      <div class="line"></div>
      <div class="article_list">
        <div class="list_left">
          <div class="top">
            <img src="../assets/img/avatar.jpg" alt />
            <span>学习</span>
          </div>
          <div class="middle">阿好几个货借款股东会尽快发货估计的房价款哈代发货上方的客户方大好时光贾湖骨笛</div>
          <div class="bottom">
            <span>出发</span>
            <span>2019-10-25 19:35</span>
            <i class="iconfont">&#xe746;</i>
            <span>41</span>
            <i class="iconfont">&#xe62a;</i>
            <span>32</span>
          </div>
        </div>
        <div class="list_right">
          <img src alt />
        </div>
      </div>
      <div class="line"></div>
      <div class="article_list">
        <div class="list_left">
          <div class="top">
            <img src="../assets/img/avatar.jpg" alt />
            <span>学习</span>
          </div>
          <div class="middle">阿好几个货借款股东会尽快发货估计的房价款哈代发货上方的客户方大好时光贾湖骨笛</div>
          <div class="bottom">
            <span>出发</span>
            <span>2019-10-25 19:35</span>
            <i class="iconfont">&#xe746;</i>
            <span>41</span>
            <i class="iconfont">&#xe62a;</i>
            <span>32</span>
          </div>
        </div>
        <div class="list_right">
          <img src alt />
        </div>
      </div>
      <div class="line"></div>
      <div class="article_list">
        <div class="list_left">
          <div class="top">
            <img src="../assets/img/avatar.jpg" alt />
            <span>学习</span>
          </div>
          <div class="middle">阿好几个货借款股东会尽快发货估计的房价款哈代发货上方的客户方大好时光贾湖骨笛</div>
          <div class="bottom">
            <span>出发</span>
            <span>2019-10-25 19:35</span>
            <i class="iconfont">&#xe746;</i>
            <span>41</span>
            <i class="iconfont">&#xe62a;</i>
            <span>32</span>
          </div>
        </div>
        <div class="list_right">
          <img src alt />
        </div>
      </div>
      <div class="line"></div>
      <div class="article_list">
        <div class="list_left">
          <div class="top">
            <img src="../assets/img/avatar.jpg" alt />
            <span>学习</span>
          </div>
          <div
            class="middle"
          >阿好几个货借款股东会尽快发货估计的房价款哈代发货上方的客户方大好时光啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊贾湖骨笛</div>
          <div class="bottom">
            <span>出发</span>
            <span>2019-10-25 19:35</span>
            <i class="iconfont">&#xe746;</i>
            <span>41</span>
            <i class="iconfont">&#xe62a;</i>
            <span>32</span>
          </div>
        </div>
        <div class="list_right">
          <img src alt />
        </div>
      </div>
      <div class="line"></div>
    </div>
    <div class="dynamic" v-if="activeIndex == '2'">
        <div class="dynamic_list">
          <div class="dynamic_top">
            <img src="../assets/img/avatar.jpg" alt />
            <span class="nickname">绿陵王</span>
            <span>关注了</span>
            <span style="color:#3498ff;">出发</span>
            <span class="dot">·</span>
            <span>2019.12.30 15:22</span>
          </div>
        </div>
        <div class="line"></div>
        <div class="dynamic_list">
          <div class="dynamic_top">
            <img src="../assets/img/avatar.jpg" alt />
            <span>绿陵王</span>
            <span>喜欢了</span>
            <span>文章</span>
            <span>·</span>
            <span>2019.12.30 15:22</span>
          </div>
          <div class="article_list">
            <div class="list_left">
              <div
                class="middle"
              >阿好几个货借款股东会尽快发货估计的房价款哈代啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊发货上方的客户方大好时光贾湖骨笛</div>
              <div class="bottom">
                <span>出发</span>
                <i class="iconfont">&#xe746;</i>
                <span>41</span>
                <i class="iconfont">&#xe62a;</i>
                <span>32</span>
              </div>
            </div>
            <div class="list_right">
              <img src alt />
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="dynamic_list">
          <div class="dynamic_top">
            <img src="../assets/img/avatar.jpg" alt />
            <span>绿陵王</span>
            <span>评论了</span>
            <span>文章</span>
            <span>·</span>
            <span>2019.12.30 15:22</span>
          </div>
          <div class="article_list">
            <div class="list_left">
              <div class="top">好文章，点个赞</div>
              <div class="middle">
                <span>阿好几个货借款股东会尽快发货估计的房价款哈代啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊发货上方的客户方大好时光贾湖骨笛</span>
              </div>
              <div class="bottom">
                <span>出发</span>
                <i class="iconfont">&#xe746;</i>
                <span>41</span>
                <i class="iconfont">&#xe62a;</i>
                <span>32</span>
              </div>
            </div>
            <div class="list_right">
              <img src alt />
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="dynamic_list">
          <div class="dynamic_top">
            <img src="../assets/img/avatar.jpg" alt />
            <span>绿陵王</span>
            <span>发表了</span>
            <span>文章</span>
            <span>·</span>
            <span>2020.1.2 15:22</span>
          </div>
          <div class="article_list">
            <div class="list_left">
              <div class="middle">
                <span>阿好几个货借款股东会尽快发货估计的房价款哈代啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊发货上方的客户方大好时光贾湖骨笛</span>
              </div>
              <div class="bottom">
                <span>出发</span>
                <i class="iconfont">&#xe746;</i>
                <span>41</span>
                <i class="iconfont">&#xe62a;</i>
                <span>32</span>
              </div>
            </div>
            <div class="list_right">
              <img src alt />
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Article_dyn",
  data() {
    return {
        activeIndex: "1",
    };
  },
  methods: {
      handleSelect(key, keyPath) {
      this.activeIndex = key;
    },
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
  .article {
    .article_list {
      display: flex;
      justify-content: space-between;
      padding: 15px;
      .list_left {
        width: 75%;
        .top {
          line-height: 40px;
          img {
            border-radius: 50%;
            height: 40px;
            width: 40px;
            vertical-align: top;
            margin-top: 3px;
          }
          span {
            font-size: 1.6em;
            margin-left: 20px;
            margin-top: -3px;
            color: @color;
          }
        }
        .middle {
          margin: 15px 0;
          color: #999;
        }
        .bottom {
          font-size: 1em;
          color: #999;
          span.nickname {
            color: @color;
          }
          span.dot {
            margin: 0 10px;
          }
        }
      }
      .noimg {
        width: 100%;
      }
      .list_right {
        width: 20%;
        background-color: lightblue;
        border-radius: 10px;
        margin-left: 5%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
    }
  }
  .dynamic {
    padding-top: 15px;
    .dynamic_list {
      padding: 15px;
      .dynamic_top {
        line-height: 50px;
        color: #999;
        span:nth-of-type(1) {
          color: #333;
          margin: 0 3px;
        }
        span:nth-of-type(4) {
          margin: 0 3px;
        }
        img {
          width: 40px;
          height: 40px;
          border-radius: 40px;
          vertical-align: middle;
        }
      }
      .article_list {
        display: flex;
        justify-content: space-between;
        .list_left {
          width: 75%;
          .top {
            line-height: 40px;
            margin-top: 10px;
            img {
              border-radius: 50%;
              height: 40px;
              width: 40px;
              vertical-align: top;
              margin-top: 3px;
            }
            span {
              font-size: 1.6em;
              margin-left: 20px;
              margin-top: -3px;
              color: @color;
            }
          }
          .middle {
            margin: 15px 0;
            color: #333;
          }
          .bottom {
            font-size: 1em;
            color: #999;
            span:nth-of-type(1) {
              margin-right: 10px;
            }
          }
        }
        .noimg {
          width: 100%;
        }
        .list_right {
          width: 20%;
          background-color: lightblue;
          border-radius: 10px;
          margin-left: 5%;
          img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }
      }
    }
  }
}
</style>

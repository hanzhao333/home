<template>
  <div class="container">
    <div class="article">
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
  </div>
</template>

<script>
export default {
  name: "Article_dyn",
  data() {
    return {};
  },
  methods: {}
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
      padding-top: 20px;
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
}
</style>

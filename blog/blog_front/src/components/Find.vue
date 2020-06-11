<template>
  <div class="container">
    <el-row>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <div class="list">
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
          <div class="list">
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
          <div class="list">
            <!-- noimg -->
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
          <div class="list">
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
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <div class="label">
            <div class="title">热门标签</div>
            <div class="tag_div">
              <el-tag>标签一</el-tag>
              <el-tag type="success">标签二</el-tag>
              <el-tag type="info">标签三</el-tag>
              <el-tag type="warning">标签四</el-tag>
              <el-tag type="danger">标签五</el-tag>
              <el-tag>标签六</el-tag>
              <el-tag type="success">标签七</el-tag>
              <el-tag type="info">标签八</el-tag>
              <el-tag type="warning">标签九</el-tag>
              <el-tag type="danger">标签十</el-tag>
              <el-tag>标签十一</el-tag>
              <el-tag>标签十二</el-tag>
            </div>
          </div>
          <div class="line"></div>
          <div class="author">
            <div class="title">热门用户</div>
            <div class="img_view">
              <img src="../assets/img/avatar.jpg" alt />
              <img src="../assets/img/avatar.jpg" alt />
              <img src="../assets/img/avatar.jpg" alt />
              <img src="../assets/img/avatar.jpg" alt />
              <img src="../assets/img/avatar.jpg" alt />
              <img src="../assets/img/avatar.jpg" alt />
              <img src="../assets/img/avatar.jpg" alt />
              <img src="../assets/img/avatar.jpg" alt />
              <img src="../assets/img/avatar.jpg" alt />
              <img src="../assets/img/avatar.jpg" alt />
              <img src="../assets/img/avatar.jpg" alt />
              <img src="../assets/img/avatar.jpg" alt />
            </div>
          </div>
          <div class="line"></div>
          <div class="article">
            <div class="title">热门文章</div>
            <div class="article_list">
              <span>JavaScript</span>
              <div
                :class="[popularity>300?'popularityA':(popularity>150?'popularityB':(popularity>50?'popularityC':'popularityD')),'popularity']"
              >300</div>
            </div>
            <div class="article_list">
              <span>Python</span>
              <div
                :class="[popularity>300?'popularityA':(popularity>150?'popularityB':(popularity>50?'popularityC':'popularityD')),'popularity']"
              >300</div>
            </div>
            <div class="article_list">
              <span>C++</span>
              <div
                :class="[popularity>300?'popularityA':(popularity>150?'popularityB':(popularity>50?'popularityC':'popularityD')),'popularity']"
              >300</div>
            </div>
            <div class="article_list">
              <span>Node.js</span>
              <div
                :class="[popularity>300?'popularityA':(popularity>150?'popularityB':(popularity>50?'popularityC':'popularityD')),'popularity']"
              >300</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "Find",
  data() {
    return {
      popularity: 300
    };
  },
};
</script>
<style lang="less" scoped>
@color: #3498ff;
.line {
  width: 94%;
  height: 1px;
  background-color: #f7f7f7;
  margin: 10px auto;
}
.container {
  margin-top: 56px;
  display: flex;
  justify-content: space-between;
  padding: 0 28.5%;
  .el-row {
    width: 100%;
    .bg-purple {
      .list {
        display: flex;
        justify-content: space-between;
        padding: 15px;
        .list_left {
          width: 70%;
          .top {
            line-height: 50px;
            img {
              border-radius: 50%;
              height: 50px;
              width: 50px;
              vertical-align: top;
              margin-top: 3px;
            }
            span {
              font-size: 2rem;
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
            span:nth-of-type(1) {
              color: @color;
            }
            span:nth-of-type(2) {
              margin: 0 10px;
            }
          }
        }
        .noimg {
          width: 100%;
        }
        .list_right {
          width: 30%;
          background-color: lightblue;
          border-radius: 10px;
          img {
            width: 100%;
            border-radius: 10px;
          }
        }
      }
    }
    .bg-purple-light {
      .label {
        padding: 15px;
        .title {
          color: #666;
          margin-bottom: 15px;
        }
        .tag_div {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          width: 100%;
          .el-tag {
            margin: 0 10px 10px 0;
            cursor: pointer;
          }
        }
      }
      .author {
        padding: 15px;
        .title {
          color: #666;
          margin-bottom: 15px;
        }
        .img_view {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          img {
            width: 40px;
            height: 40px;
            border-radius: 40px;
            background-color: lightblue;
            margin: 0 10px 10px 0;
            cursor: pointer;
          }
        }
      }
      .article {
        padding: 15px;
        .title {
          color: #666;
          margin-bottom: 15px;
        }
        .article_list {
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #f7f7f7;
          padding: 15px 0;
          cursor: pointer;
          span {
            color: #3498ff;
          }
          .popularity {
            padding: 1px 10px;
            color: #fff;
            border-radius: 30px;
            font-size: 0.5em;
            height: 17px;
            line-height: 17px;
            margin-top: 2px;
          }
          .popularityA {
            background-color: #d9534f;
          }
          .popularityB {
            background-color: #f0ad4e;
          }
          .popularityC {
            background-color: #5bc0de;
          }
          .popularityD {
            background-color: #636c72;
          }
        }
      }
    }
  }
}
</style>
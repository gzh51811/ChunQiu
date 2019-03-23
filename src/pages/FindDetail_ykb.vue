<template>
  <div id="List">
    <div id="box" ref='mybox'>
     <Head :title="title"></Head>
      <div class="find-tag info-tag">
        <div class="find-img">
          <img
            src="http://media.china-sss.com/img/M00/04/65/wKjFbFx4voKASVWNAAGvHh4IL7s229.png"
            alt
          >
        </div>
        <strong class="find-strong">春小秋</strong>
      </div>
      <div class="t-box find-info">
        <h2>{{list.detail.title}}</h2>
        <div class="find-date">
          <span>{{list.detail.createTime}}发布</span>
          <span>
            <i class="iconfont icon-eyeo"></i>22
          </span>
          <span>
            <i class="iconfont icon-zan"></i>
            <em id="JS-count">0</em>赞
          </span>
        </div>
        <div class="label">
          <div>
            <i class="tag">小秋推荐</i>
          </div>
          <div>
            <span>{{list.dests[0].destName}}</span>
          </div>
        </div>
      </div>
    </div>
    <div id="skthreebounce" ref="skt">
      <div class="sk-wave">
        <div class="sk-rect sk-rect1"></div>
        <div class="sk-rect sk-rect2"></div>
        <div class="sk-rect sk-rect3"></div>
        <div class="sk-rect sk-rect4"></div>
        <div class="sk-rect sk-rect5"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Head from "../components/Head_ykb";
export default {
  data() {
    return {
      title:"发现",
      curIdx: 0,
      list: {
        detail: { title: "" },
        dests: [{ destName: "" }]
      }
    };
  },
  components: {
    Head
  },
  methods: {

  },
  created() {
    let { id } = this.$route.params;
    
    this.$axios.post("http://127.0.0.1:1811/find/", { id }).then(res => {
      var res1 = res.data;
      if (res1.code === 1) {
        this.list = res1.res[0];
        this.$refs.skt.style.display = "none";
        this.$refs.mybox.style.display = "block";
      }
    });
  },
  mounted(){
        this.$refs.skt.style.display = "block";
        this.$refs.mybox.style.display = "none";
  }
};
</script>


<style lang="scss" scoped>
body,
html {
  height: 100%;
}

.info-tag {
  margin-top: 1.225rem;
  padding: 0.33rem 0.6rem;
  text-align: left;
  background-color: #f8f9fa;
  .find-img {
    width: 1rem;
    height: 1rem;
  }
  .find-strong {
    font-weight: 700;
    font-size: 0.4rem;
    color: #333;
  }
}
.find-tag {
  .find-img {
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    position: relative;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 1.28rem;
    overflow: hidden;
  }
}
img {
  display: block;
  border: 0;
  max-width: 100%;
  height: auto;
  // background: url(../../images/img-404.png) no-repeat center center;
  background-size: 25%;
}
.find-tag .find-em,
.find-tag .find-img,
.find-tag .find-strong,
.find-tag i {
  display: inline-block;
  vertical-align: middle;
}
.find-info .label i,
.find-info .label span {
  display: inline-block;
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0 0.21rem;
  margin-right: 0.21rem;
  border-radius: 0.1rem;
  border: 1px solid #3a3d50;
  color: #3a3d50;
  font-size: 0.31rem;
}
.find-info {
  padding: 0.85rem 0.6rem 0.43rem 0.6rem;
  color: #333;
  font-size: 0.6rem;
  text-align: left;
  h2 {
    margin-bottom: 0.43rem;
    font-size: 0.6rem;
  }
  .label {
    font-size: 0.6rem;
    height: 1.1rem;
    overflow: hidden;
    i {
      background-color: #3a3d50;
      color: #fff;
    }
    div {
      margin-bottom: 0.1rem;
      margin-right: 0.1rem;
      display: block;
      float: left;
      overflow: hidden;
      max-width: 75%;
    }
  }
}

.find-info h2,
.find-info h3 {
  font-weight: 700;
}
.find-date span {
  display: inline-block;
  margin: 0 0.43rem 0 0;
  font-size: 0.31rem;
  line-height: 0.6rem;
  color: #999;
}
.find-info .find-date,
.find-info .label {
  margin-bottom: 0.35rem;
}

#skthreebounce {
  width: 100px;
  background: black;
}

//加载动画
.sk-wave {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  margin: auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;
}

.sk-wave .sk-rect {
  background-color: green;
  height: 100%;
  width: 6px;
  display: inline-block;
  -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;
  animation: sk-waveStretchDelay 1.2s infinite ease-in-out;
}

.sk-wave .sk-rect1 {
  -webkit-animation-delay: -1.2s;
  animation-delay: -1.2s;
}

.sk-wave .sk-rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.sk-wave .sk-rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.sk-wave .sk-rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.sk-wave .sk-rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes sk-waveStretchDelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
    transform: scaleY(0.4);
  }

  20% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}

@keyframes sk-waveStretchDelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
    transform: scaleY(0.4);
  }

  20% {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
}
</style>


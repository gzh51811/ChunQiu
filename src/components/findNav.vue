<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1" @click.native="newBtn('new')">最新</mt-tab-item>
      <mt-tab-item id="2" @click.native="newBtn('superman')">达人游记</mt-tab-item>
      <mt-tab-item id="3" @click.native="newBtn('official')">官方推荐</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul class="find-list">
          <li v-for="item in list.data" :key="item._id">
            <div class="find-txt">
              <figure class="figure-outer">
                <h2 class="h2">{{item.detail.title}}</h2>
                <dl class="figure-inner">
                  <dd>
                    <img class="img anima" :src="item.pictures[0].url">
                  </dd>
                </dl>
              </figure>

              <p class="label">
                <i class="tag">小秋推荐</i>
              </p>

              <a
                class="link-mask"
                :title="item.detail.title"
                data-role="ga"
                data-done="发现列表/官方推荐/"
                data-tag="371_/m/find/articleDetail/371"
                href="javascript:;"
                @click="jump(item.detail.id)"
              ></a>
            </div>
            <div class="find-tag">
              <div class="find-fl">
                <div class="find-img">
                  <img
                    src="http://media.china-sss.com/img/M00/04/65/wKjFbFx4voKASVWNAAGvHh4IL7s229.png"
                    alt
                  >
                </div>
                <strong class="find-strong">春小秋</strong>
                
                <i class="icon-female"></i>
              </div>
              <div class="find-fr">
                <em>
                  <i class="icon-eyed2"></i> 16
                </em>
              </div>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
          <ul class="find-list">
          <li v-for="item in list.data" :key="item._id">
            <div class="find-txt">
              <figure class="figure-outer">
                <h2 class="h2">{{item.detail.title}}</h2>
                <dl class="figure-inner">
                  <dd>
                    <img class="img anima" :src="item.pictures[0].url">
                  </dd>
                </dl>
              </figure>

              <p class="label">
                <i class="tag">小秋推荐</i>
              </p>

              <a
                class="link-mask"
                :title="item.detail.title"
                data-role="ga"
                data-done="发现列表/官方推荐/"
                data-tag="371_/m/find/articleDetail/371"
                href="javascript:;"
                @click="jump(item.detail.id)"
              ></a>
            </div>
            <div class="find-tag">
              <div class="find-fl">
                <div class="find-img">
                  <img
                    src="http://media.china-sss.com/img/M00/04/65/wKjFbFx4voKASVWNAAGvHh4IL7s229.png"
                    alt
                  >
                </div>
                <strong class="find-strong">春小秋</strong>
                
                <i class="icon-female"></i>
              </div>
              <div class="find-fr">
                <em>
                  <i class="icon-eyed2"></i> 16
                </em>
              </div>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
          <ul class="find-list">
          <li v-for="item in list.data" :key="item._id">
            <div class="find-txt">
              <figure class="figure-outer">
                <h2 class="h2">{{item.detail.title}}</h2>
                <dl class="figure-inner">
                  <dd>
                    <img class="img anima" :src="item.pictures[0].url">
                  </dd>
                </dl>
              </figure>

              <p class="label">
                <i class="tag">小秋推荐</i>
              </p>

              <a
                class="link-mask"
                :title="item.detail.title"
                data-role="ga"
                data-done="发现列表/官方推荐/"
                data-tag="371_/m/find/articleDetail/371"
                href="javascript:;"
                @click="jump(item.detail.id)"
              ></a>
            </div>
            <div class="find-tag">
              <div class="find-fl">
                <div class="find-img">
                  <img
                    src="http://media.china-sss.com/img/M00/04/65/wKjFbFx4voKASVWNAAGvHh4IL7s229.png"
                    alt
                  >
                </div>
                <strong class="find-strong">春小秋</strong>
                
                <i class="icon-female"></i>
              </div>
              <div class="find-fr">
                <em>
                  <i class="icon-eyed2"></i> 16
                </em>
              </div>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  props: ["list"],
  data() {
    return {
      selected: "1"
    };
  },
  methods:{
    newBtn(condition){
      this.$emit("change",condition)
    },
    jump(id){
      this.$router.push({path:"/FindDetail/"+id})
    }
  },
  created(){
    let condition = location.search.slice(1).split("=")[1];
    this.$emit("change",condition)
  }
};
</script>
<style lang="scss" scoped>
.mint-navbar {
  // height: 1rem;
  padding-bottom: 0.055rem;
  margin-bottom: 0.325rem;
  border-bottom: 0.005625rem solid #ccc;
}
.mint-navbar .mint-tab-item {
  padding: 12px 0;
  font-size: 15px;
}
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #00be88;
  color: #00be88;
  padding-bottom: -3px;
  text-decoration: none;
}
.find-list li {
  padding: 0.6rem 0.6rem 0.29rem 0.6rem;
}
.find-list li {
  padding: 0 0.64rem;
  min-height: 2.8rem;
}

.find-list li {
  position: relative;
}
.find-list {
  .find-txt {
    position: relative;
  }
  .figure-outer {
    position: relative;
    clear: both;
    overflow: hidden;
  }
  .h2 {
    width: 100%;
    margin-right: 2%;
    margin-bottom: 2%;
    overflow: hidden;
    font-weight: 700;
    text-align: left;
    max-height: 2.7rem;
    font-size: 0.51rem;
    font-weight: 400;
    color: #222;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .label {
    position: absolute;
    // right: 37%;
    bottom: -1rem;
    left: 0;
    max-height: 1rem;
    overflow: hidden;
  }
  .tag {
    display: inline-block;
    vertical-align: top;
    line-height: 0.73rem;
    padding: 0 0.21rem;
    margin-right: 0.21rem;
    border: 1px solid #00be88;
    background-color: #00be88;
    border-radius: 0.73rem;
    font-size: 0.42rem;
    color: #fff;
    font-size:.015625rem;
  }
  .link-mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
  }
  .find-tag {

    .find-fr {
      color: #999;
    }
    img {
      width: 60%;
      height: 60%;
      border-radius: 1.28rem;
      overflow: hidden;
    }
    .find-strong {
      font-size: 0.2rem;
      color: #333;
    }
    padding-top: 1rem;
    line-height: 1.28rem;
    overflow: hidden;
    text-align: right;
    .find-fl {
      float: left;
      font-size: 0.6rem;
      color: #333;
    }
    .find-img {
        padding-top:.4rem ;
      width: 1.28rem;
      height: 1.28rem;
      border-radius: 100%;
      position: relative;
    }
  }
}
.find-list .large .figure-inner,
.find-list .large .h2,
.find-list .many .figure-inner,
.find-list .many .h2 {
  float: none;
  width: auto;
}

.find-list .large .h2,
.find-list .many .h2 {
  margin-bottom: 0.64rem;
}
.find-list .large .h2,
.find-list .many .h2 {
  margin-right: 0;
}
.find-list .large dd {
  height: 8.32rem;
  overflow: hidden;
}

.find-list .figure-inner dd {
  border-radius: 0.1rem;
  overflow: hidden;
}
.find-list li dd {
  height: 3.5rem;
}
img {
  display: block;
  border: 0;
  max-width: 100%;
  height: auto;
  background-size: 25%;
}
.find-list .large .find-txt img {
  height: auto;
}
.find-list .img {
  width: 100%;
  height: 100%;
}
img.anima {
  animation: imgLoad 0.8s;
  -webkit-animation: imgLoad 0.8s;
}
.find-list .large .label,
.find-list .many .label {
  position: static;
  margin-top: 0.43rem;
}
.find-tag .find-em, .find-tag .find-img, .find-tag .find-strong, .find-tag i {
    display: inline-block;
    vertical-align: middle;
}
</style>

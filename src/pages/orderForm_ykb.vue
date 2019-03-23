<template>
  <div id="List">
    <div id="box" ref="mybox">
      <Head :title="title"></Head>
    </div>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="1"
    >
      <li v-for="(item,idx) in list" :key="idx">
        <div class="recommend">
          <img :src="item.picture" alt>
          <a class="rec">{{item.name}}</a>
        </div>
        <div class="price">
          <span>￥
            <span class="col">{{item.minPrice}}</span>
            &times;{{item.qty}}
          </span>
        </div>
        <div class="pay">
          <mt-button size="normal" type="primary" :plain="plain">支付</mt-button>
          <mt-button size="normal" type="danger" :plain="plain" @click="remove(item.id)">删除</mt-button>
        </div>
      </li>
    </ul>
    <!--显示加载中转菊花-->
    <div class="loading-box tc" v-if="isLoading">
      <mt-spinner type="snake" class="loading-more"></mt-spinner>
      <span class="loading-more-txt">加载中...</span>
    </div>
    <div class="no-more" v-if="noMore">没有更多了~</div>

  </div>
</template>
<script>
import Head from "../components/Head_ykb";
export default {
  data() {
    return {
      page:0,
      plain: true,
      title: "我的订单",
      loading: false,
      isLoading: false,
      noMore: false,
      list: []
    };
  },
  components: {
    Head
  },
  methods: {
    goback() {
      this.$router.back();
    },
    loadMore() {
      this.isLoading = true;
      this.loading = true;
      setTimeout(async ()=>{
        let data = await this.$axios.get("http://127.0.0.1:1811/orderForm?page="+this.page);
        data.data.map(item=>{
          this.list.push(item)
        })
      this.isLoading = false;
      if(data.data.length>0){
        this.loading = false;
        this.page++;
        return;
      }else{
        this.noMore=true;
      }

      },1000)
    },
    async remove(id){
      let res = await this.$axios.post("http://127.0.0.1:1811/orderForm",{id});
      // console.log(res)
      if(res.data.msg=="成功"){
        this.list.map((item,idx)=>{
          if(item.id==id){
            this.list.splice(idx,1)
          }
        })
      }else{
        alert("error")
      }
    }

  },
  created() {
    this.isLoading = true;
    this.loading = true;
    setTimeout(async ()=>{
      let data = await this.$axios.get("http://127.0.0.1:1811/orderForm?page="+this.page);
      data.data.map(item=>{
        this.list.push(item)
      })
     this.isLoading = false;
     this.loading = false;
     this.page++;
    },0)
  },
};
</script>


<style lang="scss" scoped>
body,
html {
  height: 100%;
}
#List {
  height: 100%;
  display: flex;
  flex-flow: column;
  ul {
    display:flex;
    flex-flow: column;
    border-top: 0.015625rem solid #ccc;
    background-color: #f1f1f1;
    height:100%;
  }
  li {
    display: flex;
    flex-flow: column;
    position: relative;
    background-color: #fff;

    margin: 0.25625rem 0 0 0;
    padding-top: 0.25625rem;
    height: 3.5rem;
    border-bottom: 0.015625rem solid #ccc;

    .recommend {
      margin: 0 0.15625rem;
      display: flex;
      img {
        height: 1.15625rem;
        width: 2.15625rem;
      }
      a {
        //多行超出时隐藏
        width: 7rem;
        height: 33px;
        margin-bottom: 0.625rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .rec {
        padding-left: 0.15625rem;
      }
    }
    .price {
      position: absolute;
      text-align: right;
      right: 0;
      top: 1.3125rem;
      width: 75%;
      padding-right: 0.15625rem;
      margin-right:0.15625rem;

      margin-bottom: 0.3125rem;
      border-bottom: 0.015625rem solid #bbb;
      font-size: 0.45625rem;
      span{
        line-height: .9rem;
      }
      .col {
        color: red;
      }
    }
    .pay {
      text-align: right;
      padding-right: 0.15625rem;
      margin-top: 0.715625rem;
      .mint-button {
        width: 2.5rem;
        height: 0.8rem;
        font-size: 0.3875rem;
      }
    }
  }
}
// 加载中。。。
.loading-box {
  padding: 0.1rem 0;

  .loading-more {
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.2rem;
  }
  .loading-more-txt {
    vertical-align: middle;
    font-size: 0.22rem;
  }
}

.no-more {
  color: #000;
  font-size: 0.16rem;
  padding: 0.2rem 0 0.2rem;
}
#box {
  height: 1.2rem;
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
  bottom: 0;
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


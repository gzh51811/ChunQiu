<template>
<div>
    <div class="box">
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../assets/img/lunbo_1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/lunbo_2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/lunbo_3.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/lunbo_4.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/lunbo_5.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/lunbo_6.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/lunbo_7.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
            <header class="header flex h-header" id="header">
				<a class="flex-1" data-role="ga" data-done="搜索" data-tag="出发地"> 
					<span class="city">广州</span> 
					<i class="i-tag"></i>
				</a> 
				<a class="flex-4" data-role="ga" data-done="搜索" data-tag="关键词" @click='goto'>
					<i class="iconfont icon-search"></i> 
					<input type="text" alue="" placeholder="搜索你想去的地方">
				</a>
			</header>

       <div class="box2">
           <a data-role="ga" data-done="频道" href="javascript:;" @click.stop="jump2" data-tag="国内游">
				<img src="../assets/img/icon_H1.png" class="icon-show"><span>国内游</span>
			</a>
            <a data-role="ga" data-done="频道" href="javascript:;" @click.stop="jump" data-tag="国内游">
				<img src="../assets/img/icon_H2.png" class="icon-show"><span>出境游</span>
			</a>
            <a data-role="ga" data-done="频道" href="javascript:;" @click.stop="jump2" data-tag="国内游">
				<img src="../assets/img/icon_H3.png" class="icon-show"><span>跟团游</span>
			</a>
            <a data-role="ga" data-done="频道" href="javascript:;" @click.stop="jump" data-tag="国内游">
				<img src="../assets/img/icon_H4.png" class="icon-show"><span>自由行</span>
			</a>
            <a data-role="ga" data-done="频道" href="javascript:;" @click.stop="jump2" data-tag="国内游">
				<img src="../assets/img/icon_H5.png" class="icon-show"><span>周边游</span>
			</a>
            <a data-role="ga" data-done="频道" href="javascript:;" @click.stop="jump" data-tag="国内游">
				<img src="../assets/img/icon_H6.png" class="icon-show"><span>日本游</span>
			</a>
            <a data-role="ga" data-done="频道" href="###" @click.stop="jump2" data-tag="国内游">
				<img src="../assets/img/icon_H7.png" class="icon-show"><span>泰国游</span>
			</a>
            <a data-role="ga" data-done="频道" href="javascript:;" @click.stop="jump" data-tag="国内游">
				<img src="../assets/img/icon_H8.png" class="icon-show"><span>欧洲游</span>
			</a>
            <a data-role="ga" data-done="频道" href="javascript:;" @click.stop="jump2" data-tag="国内游">
				<img src="../assets/img/icon_H9.png" class="icon-show"><span>旅游严选</span>
			</a>
            <a data-role="ga" data-done="频道" href="javascript:;" @click.stop="jump" data-tag="国内游">
				<img src="../assets/img/icon_H10.png" class="icon-show"><span>浪漫北海</span>
			</a>
       </div>
    <section class="t-box">
       <div class="limit-panel" data-type="limit" data-load="true" data-position="99">
           <ul class="item-tr limit-wrap">
                <li>
                <figure class="img-outer">
                    <div class="img-inner">
                        <i class="type js_countdown">当期狂欢</i>
                        <img src="http://media.china-sss.com/pics/gallery/201901/b2d36cf5-2671-4e54-96e8-0c1b07d03905_201901140959.jpg" class="anima">
                    </div>
                </figure>
                <div class="txt-outer">
                    <h2>
                        【限时抢购】广州直飞往返���本大阪5日自由行（双人赠送Wifi+BIC优惠券+返程升级至27KG行李额）
                    </h2>
                    <ul class="money flex flex-end">
                        <li class="crred">¥
                            <em>1998</em> 起</li>
                        <li >
                            <span> 广州出发</span>
                        </li>
                    </ul>   
                </div>
       
            </li>
        </ul>
        </div>

        <ul class="flex push-wrap" data-position="105">
						<li>
							<a class="coupon-wrap" data-role="ga" href="javascript:;" data-done="" data-tag="">
								<h3>新人大礼包</h3>
								<p>666优惠券</p>
								<img src="../assets/img/H_left.png" class="anima"> 
							</a>
						</li>
						<li>
							<a class="coupon-wrap" data-role="ga" href="javascript:;" data-done="" data-tag="">
								<h3>泰划算</h3>
								<p>泰国品质跟团</p>
								<img src="../assets/img/H_right.png" class="anima"> 
							</a>
						</li>
					</ul>

    </section>
    
    <div class="box3">
        <mt-navbar  v-model="selected">
          <!-- 本次项目亮点  在点击不同的���项时，把一个定义的下标或者id传给请求数据的地方用来作为请求的参数，id等等，达到动态生成请求不同的数据 -->
            <mt-tab-item id="Home_list1" @click.native="a(0)">本季主打</mt-tab-item>
            <mt-tab-item id="Home_list2" @click.native="a(1)">品质出境</mt-tab-item>
            <mt-tab-item id="Home_list3" @click.native="a(2)">省心国内</mt-tab-item>
        </mt-navbar>
            
        <mt-tab-container v-model="selected">
          <!-- 提点1，id的动态生成 Home_list'+item  item是自定义数组num里的内容  idx是下标  -->
          <!-- 提点2 nav是请求的解构后数据，经过v-for循环后item就是每条数据的内容  ，故item 就是可以渲染的数据 -->
            <mt-tab-container-item :id="'Home_list'+item" v-for="(item,idx) in num" :key="idx">
                <ul class="item-t" v-for="(it,id) in nav" :key="id">
                <li>
                    <figure class="img-outer">
                        <div class="img-inner">
                            <i class="type">团队游</i> 
                            <i class="tag">广州出发</i> 
                            <img :src="it.imgurl" class="anima">
                        </div>
                    </figure>
                    <div class="txt-outer">
                        <h2>{{it.productName}}</h2>
                        <p class="label">  
                                <span class="bggray">
                                    骑大象 
                                </span>
                                <span class="bggray">
                                    泰式按摩 
                                </span>         
                                <span class="bggray">
                                    玉佛寺 
                                </span>           
                                <span class="bggray">
                                    大皇宫 
                                </span>      
                                <span class="bggray">
                                    曼谷+芭提雅 
                                </span>
                        </p>
                            <p class="info js_info">班期：4月、5月、6月</p>
                        <ul class="money flex-end">
                            <li class="crred flex-2">¥<em>{{it.price}}</em>起 </li>
                        </ul>
                    </div>
                </li>
                </ul>
            </mt-tab-container-item>
  
        </mt-tab-container>
    </div>

    <section class="t-box other-box" data-type="guess" data-position="101" data-load="true" data-limit="12"><div class="t-hd"><span>猜你喜欢</span></div><ul class="item-tds"><li>
    <figure class="img-outer">
        <div class="img-inner">
            <i class="type">团队游</i>
                
                <img src="../assets/img/Home_xihuan.jpg" class="anima">
        </div>
    </figure>
    <div class="txt-outer">
        <h2>
            【臻奢 深度】中东非 阿联酋 迪拜6日4晚奢华之旅●5678超5卓美亚河畔+6亚特兰蒂斯+7帆船酒店170平米复式套房+8阿布扎比酋长皇宫酒店+A380广州往返
        </h2>
        <ul class="money flex-end">
            <li class="crred flex-2">
                ¥<em>17999</em>起
            </li>
            <li>广州出发</li>
        </ul>
    </div>
    </li>
    </ul>
    </section>

    <div class="h-copy">
					<i class="icon-spring"><img src="../assets/img/Home_foot.png" alt=""></i>
				</div>
      <Footer :activeIdx="0"></Footer>
        <div class="dialog-bag" id="JS_float">
            <a href="javascript:;" data-done="浮层/" data-tag="周三夜市_https://m.springtour.com/site/wednesday">
            <img src="../assets/img/icon_11.png" alt="">
        </a>
        </div>
    </div>
</template>


<script>
import Footer from "../components/Footer_ykb"
export default {
  data() {
    return {
      selected: "Home_list1",
      // mun: [
      //   {
      //     name: "首页",
      //     classname: "iconfont icon-shouye"
      //   },
      //   {
      //     name: "目的地",
      //     classname: "iconfont icon-dingwei"
      //   },
      //   {
      //     name: "发现",
      //     classname: "iconfont icon-shezhi"
      //   },
      //   {
      //     name: "客服",
      //     classname: "iconfont icon-kefu"
      //   },
      //   {
      //     name: "我的",
      //     classname: "iconfont icon-wode"
      //   }
      // ],
      //定义个空数组，用来
      nav:[],
      num:[1,2,3],

    };
  },
  methods: {
    //点击跳转搜索页面
    goto() {
      this.$router.push({ name: "Hsuosou" });
    },

    //自定义js样式，挂载在生命周期函数mounted，提前执行
    fn() {
      //吸顶
      var head = document.getElementById("header");
      window.onscroll = function() {
        var Top = window.scrollY;
        //  console.log(Top);
        if (Top >= 170) {
          head.style.position = "fixed";
          head.style.top = 0;
        } else if (Top == 0) {
          head.style.top = "-0.4rem";
          head.style.position = "relative";
        } else {
          head.style.position = "relative";
          head.style.top = "-0.4rem";
        }
      };
      //右侧悬浮球
      var JS_float = document.getElementById("JS_float");
      if (window.addEventListener)
        //FF,火狐浏览器会识别该方法
        window.addEventListener("DOMMouseScroll", wheel, false);
      window.onmousewheel = document.onmousewheel = wheel; //W3C
      //统一处理滚轮滚动事件
      function wheel(event) {
        var delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
          //IE、chrome浏览器使用的是wheelDelta，并且值为“正负120”
          delta = event.wheelDelta / 240;
          if (window.opera) delta = -delta; //因为IE、chrome等向下滚动是负值，FF是正值，为了处理一致性，在此取反处理
        } else if (event.detail) {
          //FF浏览器使用的是detail,其值为“正负3”
          delta = -event.detail / 3;
        }
        if (delta) handle(delta);
      }
      //上下滚动时的具体处理函数
      function handle(delta) {
        if (delta < 0) {
          //页面向上滚动
          JS_float.style.right = "-35px";
        } else {
          //向上滚动
          JS_float.style.right = 0;
        }
      }
    },

    //自定义点击事件  把传来的id拼接到请求头作为参数获取不同的数据
    a(idx){
          this.$axios.get("http://127.0.0.1:1811/userlist_login?id="+idx).then(res => {
        // console.log(res)
          let { data} = res;
          //data下有下标0下得products
          let Arr = data[0].products;
          //得到的是解构后每次不同的数据，这样就可以直接循环渲染了
          this.nav=Arr;
          // console.log(this.nav)
      })
    },
    format(){
      this.$axios.get("http://127.0.0.1:1811/userlist_login?id=0").then(res => {
        // console.log(res)
          let { data} = res;
          //data下有下标0下得products
          let Arr = data[0].products;
          //得到的是解构后每次不同的数据，这样就可以直接循环渲染了
          this.nav=Arr;
          // console.log(this.nav)
      })
    },
    jump(){
      this.$router.push({path:"/list/团队游"})
    },
    jump2(){
      this.$router.push({path:"/list/当地游"})
    },
  },
  //挂载
  mounted() {
    this.fn()
  },
  //生命周期函数  created申请数据渲染  单条数据
  created() {
    this.format()
  },
  components:{
    Footer
  }
}
</script>

<style scoped lang="scss">
body {
  background: rgb(238, 238, 238);
}
.box {
  height: 4rem;
}
.box img {
  width: 100%;
  height: 100%;
}
.h-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  background: #fff;
  top: 3.7rem;
  right: 0.42rem;
  left: 0.42rem;
  border-radius: 0.09rem;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 1.1rem;
}
header a {
  //   display: inline-block;
  //   position: relative;
  //   height: 1.146667rem;
}
#header {
  position: relative;
  top: -0.4rem;
  left: 2.5%;
  width: 86%;
  z-index: 999;
}
.flex-1 {
  // height: 1.4rem;
  width: 25%;
}

.h-header .i-tag {
  margin-left: 0.4rem;
  display: inline-block;
  vertical-align: middle;
  margin-top: 0.15rem;
  border: 0.15rem solid transparent;
  border-top-color: #666;
}
.flex-4 {
  width: 70%;
}
.flex-4 .icon-search {
  display: inline-block;
  padding-right: 20px;
  background-repeat: no-repeat;
  height: 0.3rem;
  width: 0.3rem;
  font-size: .5rem;
  // background-image: url(../assets/img/icon_1.png);
}
.flex-4 input {
  border: none;
}

.box2 {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  clear: both;
  background: #fff;
  // margin-top: 1rem;
}
.box2 a {
  display: block;
  width: 1.8rem;
  height: 2rem;
  text-align: center;
  margin: 0.3rem 0.2rem 0 0;
  border-radius: 0.09rem;
  overflow: hidden;
  color: #333;
  font-size: 0.2rem;
}
.box2 a .icon-show {
  display: inline-block;
  width: 1.7rem;
  height: 1.4rem;
}
.limit-panel {
  margin-top: 0.4rem;
  width: 90%;
  margin-left: 5%;
}

.t-box {
  background: #fff;
  height: 6rem;
}
.limit-wrap > li:last-child {
  padding-bottom: 0.43rem;
  margin-bottom: 0.43rem;
  border-radius: 0.09rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(221, 213, 213);
}
.limit-wrap .img-outer {
  position: relative;
  display: flex;
  align-items: center;
}
.limit-wrap .img-inner,
.limit-wrap .img-inner img,
.limit-wrap .img-outer {
  width: 3.12rem;
}
.limit-wrap .img-inner .type {
  position: absolute;
  top: 0.21rem;
  left: 0;
  width: auto;
  height: 0.5rem;
  line-height: 0.5rem;
  padding: 0 0.32rem;
  border-radius: 0 0.4rem 0.4rem 0;
  background: linear-gradient( to left, #01be88, #07c1be);
  color: #fff;
}
.txt-outer {
  width: 5rem;
}
.item-td h2,
.item-tr h2 {
  min-height: 1.54rem;
  max-height: 1.54rem;
  line-height: 0.78rem;
  overflow: hidden;
  color: #111;
  font-size: 0.4rem;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.item-tr .money {
  width: 5.9rem;
  position: absolute;
  right: 0;
  bottom: 0.4rem;
  line-height: 1;
  text-align: right;
}
.item-tr .money > li:first-child {
  padding-left: 1.133333rem;
  text-align: left;
  color: #f66;
  float: left;
}
.item-tr .money > li:first-child em {
  font-size: 0.5rem;
}
.item-tr .money > li span {
  color: #666;
}
.flex,
.flex-end,
.flex-middle {
  display: flex;
  justify-content: space-around;
}
.push-wrap {
  width: 95%;
  padding-left: 2.5%;
  text-align: center;
}
.push-wrap li:first-child {
  background-color: #fff2e6;
  width: 46%;
  height: 1.666667rem;
}
.push-wrap li:last-child {
  background-color: #ffefec;
  width: 46%;
  height: 1.666667rem;
}
.push-wrap li a {
  height: 2.666667rem;
  background: #fff2e6;
}
.coupon-wrap {
  display: block;
  height: 3.84rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  color: #333;
}
.coupon-wrap .anima {
  width: 2.333333rem;
  height: 1.5rem;
}
.box3 {
  clear: both;
  margin-top: 10px;
  background: #fff;
}

.h-footer {
  line-height: 1;
  text-align: center;
}
.footer,
.h-footer,
.h-header,
.header {
  background-color: #fff;
}
.footer {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 10;
}
.dialog-bag {
  right: -1rem;
  bottom: 4.3rem;
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  transition: right 0.5s ease;
  position: fixed;
  border-radius: 0.13rem;
  z-index: 10;
}
.dialog-bag img {
  width: 100%;
  height: 100%;
  display: block;
  border: 0;
  max-width: 100%;
  height: auto;
  background: url(../assets/img/icon_11.png) no-repeat center center;
  background-size: 25%;
}
.item-t {
  margin-top: 0.266667rem;
  width: 95%;
  margin-left: 2.5%;
  border-bottom: 1px solid rgb(194, 188, 188);
}
.item-t > li {
  padding-left: 4.6rem;
  overflow: hidden;
  margin-bottom: 0.43rem;
  border-radius: 0.09rem;
  position: relative;
}
.item-t .img-outer {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0.09rem;
}
.item-t .img-inner {
  width: 3.27rem;
  height: 3rem;
  position: relative;
}
.item-t .img-inner .type {
  position: absolute;
  top: 0;
  left: 0;
  width: 1.5rem;
  overflow: hidden;
  text-align: center;
  height: 0.61rem;
  line-height: 0.61rem;
  border-radius: 0.09rem 0 0.43rem 0;
  background-color: #314e56;
  z-index: 5;
  color: #fff;
}
.item-t .img-inner .tag {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.53rem;
  line-height: 0.53rem;
  border-radius: 0 0 0.09rem 0.09rem;
  background-color: #999;
  z-index: 10;
  color: #fff;
  text-align: center;
}
.item-t .img-inner img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left:0;
}
.item-t .txt-outer {
  height: 3rem;
  position: relative;
  right: 0.4rem;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.item-t h2 {
  height: 1rem;
  min-height: 1rem;
  max-height: 1rem;
  overflow: hidden;
  color: #333;
  font-size: 0.4rem;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 0.533333rem;
}
.item-t p {
  height: 0.44rem;
  overflow: hidden;
  margin-top: 0.11rem;
  font-size: 0.27rem;
  color: #999;
}
.item-t .label span.bggray {
  border-color: #ccc;
  color: #999;
}
.item-t .label i,
.item-t .label span {
  display: inline-block;
  vertical-align: top;
  line-height: 0.35rem;
  padding: 0 0.12em;
  border: 1px solid #00be88;
  border-radius: 0.08rem;
  margin-right: 0.11rem;
  margin-bottom: 0.1rem;
  font-size: 0.28rem;
  color: #00be88;
}
.item-t .money {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  line-height: 1;
  text-align: right;
}
.item-t .money > li:first-child {
  text-align: left;
  width: 100%;
  color: rgb(201, 54, 54);
}
.item-t .money > li:first-child em {
  font-size: 0.45rem;
  line-height: 1;
  vertical-align: bottom;
}

.other-box {
  background-color: transparent;
  padding-bottom: 0;
  margin-bottom: 0;
  z-index: 1;
}
.other-box .t-hd {
  text-align: center;
  height: 1rem;
}
.other-box .t-hd span {
  display: inline-block;
  line-height: 1rem;
  text-align: center;
  font-size: 0.4rem;
  color: #333;
  position: relative;
}
.item-tds li .link-mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
}
a {
  color: #666;
  text-decoration: none;
}
.item-tds > li {
  display: block;
  float: left;
  width: 48%;
  margin-right: 4%;
  margin-bottom: 0.43rem;
  border-radius: 0.09rem;
  position: relative;
}
.item-tds .img-inner {
  width: 100%;
  height: 3rem;
}
.item-tds .img-inner .type {
  position: absolute;
  top: 0;
  left: 0;
  width: 1rem;
  overflow: hidden;
  height: 0.51rem;
  line-height: 0.51rem;
  border-radius: 0.09rem 0 0.43rem 0;
  background-color: #314e56;
  color: #fff;
}
.item-tds .img-inner img {
  width: 100%;
  height: 100%;
}
.item-tds .txt-outer {
  padding: 0.32rem;
  background-color: #fff;
  position: relative;
  width: 4.2rem;
}
.item-tds h2 {
  margin-bottom: 0.32rem;
}
.item-tds h2 {
  height: 1rem;
  min-height: 1rem;
  max-height: 1rem;
  overflow: hidden;
  color: #333;
  font-size: 0.38rem;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 0.533333rem;
}
.item-tds .money {
  font-size: 0.3rem;
  color: #999;
}
.item-tds .money > li:first-child em {
  font-size: 0.55rem;
  line-height: 1;
  vertical-align: bottom;
  color: rgb(235, 31, 31);
}
.h-copy {
  text-align: center;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 4rem;
}
.h-copy i {
  height: 2rem;
  width: 100%;
  line-height: 1;
  font-size: 4.5rem;
  text-align: center;
}
</style>

<template>
  <div class="wrap">
    <Head :title="title"></Head>
    <article class="main m-ct">
      <section class="top-search">
        <ul class="flex">
          <li>
            <a class="top-city" data-role="ga" data-done="出发城市" data-tag href="script:;">
              <i class="icon-city">
                <img src="../assets/img/H_suosou2.png" alt> 广州
              </i>
            </a>
          </li>
          <li class="flex-5">
            <form class="global-search flex" autocomplete="off" action method="get">
              <i class=" flex-1">
                <img src="../assets/img/icon_1.png" alt>
              </i>
              <input
                class="search-txt flex-7"
                type="search"
                value
                placeholder="目的地/景点/门票等"
                id="searchInput"
                name="search"
              >
              <i class="icon-empty flex-1" id="JS_empty">
                <img src="../assets/img/H_suosou_3.png" alt>
              </i>
            </form>
          </li>
        </ul>
      </section>
      <!--热门搜索-->
      <section class="t-box">
        <div class="search-hot search-hot1" id="JS_hot">
          <h3 class="h3">热门搜索</h3>
          <a
            href="http://m.springtour.com/guangzhou-riben"
            data-role="ga"
            data-done="热门搜素/日本"
            data-key="日本"
          >日本</a>
          <a
            href="http://m.springtour.com/guangzhou-chunjie"
            data-role="ga"
            data-done="热门搜素/春节"
            data-key="春节"
          >春节</a>
          <a
            href="http://m.springtour.com/guangzhou-mangu"
            data-role="ga"
            data-done="热门搜素/曼芭"
            data-key="曼芭"
          >曼芭</a>
          <a
            href="http://m.springtour.com/guangzhou-jianpuzhai"
            data-role="ga"
            data-done="热门搜素/柬埔寨"
            data-key="柬埔寨"
          >柬埔寨</a>
          <a
            href="http://m.springtour.com/guangzhou-qingmai"
            data-role="ga"
            data-done="热门搜素/清迈"
            data-key="清迈"
          >清迈</a>
          <a
            href="http://m.springtour.com/guangzhou-yunnan"
            data-role="ga"
            data-done="热门搜素/云南"
            data-key="云南"
          >云南</a>
          <a
            href="http://m.springtour.com/guangzhou-dongbei"
            data-role="ga"
            data-done="热门搜素/东北"
            data-key="东北"
          >东北</a>
          <a
            href="http://m.springtour.com/guangzhou-beijing"
            data-role="ga"
            data-done="热门搜素/北京"
            data-key="北京"
          >北京</a>
          <a
            href="http://m.springtour.com/guangzhou-yuenan"
            data-role="ga"
            data-done="热门搜素/越南"
            data-key="越南"
          >越南</a>
          <a
            href="http://m.springtour.com/guangzhou-eluosi"
            data-role="ga"
            data-done="热门搜素/俄罗斯"
            data-key="俄罗斯"
          >俄罗斯</a>
          <a
            href="http://m.springtour.com/guangzhou-dibai"
            data-role="ga"
            data-done="热门搜素/迪拜"
            data-key="迪拜"
          >迪拜</a>
          <a
            href="http://m.springtour.com/guangzhou-tuerqi"
            data-role="ga"
            data-done="热门搜素/土耳其"
            data-key="土耳其"
          >土耳其</a>
          <a
            href="http://m.springtour.com/guangzhou-aoxin"
            data-role="ga"
            data-done="热门搜素/澳新"
            data-key="澳新"
          >澳新</a>
          <a
            href="http://m.springtour.com/guangzhou-xinma"
            data-role="ga"
            data-done="热门搜素/新马"
            data-key="新马"
          >新马</a>
          <a
            href="http://m.springtour.com/guangzhou-taiguo"
            data-role="ga"
            data-done="热门搜素/泰国"
            data-key="泰国"
          >泰国</a>
        </div>
        <div class="search-hot">
          <h3 class="h3">搜索历史
            <i class="icon-delete pnr" data-role="ga" data-done="清空历史" id="JS-remove_history">
              <img src="../assets/img/H_sousuo4.png" alt>
            </i>
          </h3>
          <div id="JS_history">
            <a
              href="http://m.springtour.com/guangzhou-riben"
              data-role="ga"
              data-done="搜素历史/日本"
              data-key="日本"
            >日本</a>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>
<script>
import Head from "../components/Head_ykb"
export default {
  data() {
    return {
        title:"搜索"
    };
  },
  components:{
      Head
  }
};
</script>
<style>
.header,
.header-detail {
  padding: 0 0.44rem;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 10;
  top: 0;
  height: 1.4rem;
  line-height: 1.4rem;
}
.header a,
.header-detail a {
  display: inline-block;
  position: relative;
  z-index: 1;
}
a {
  color: #666;
  text-decoration: none;
}
.header i,
.header-detail i {
  display: inline-block;
  vertical-align: middle;
  font-size: 0.85rem;
  line-height: 1;
  color: #00be88;
}
[class*=" icon-"],
[class^="icon-"] {
  font-family: icomoon !important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #bbb;
}
.header h1,
.header-detail h1 {
  position: absolute;
  top: 0;
  right: 20%;
  bottom: 0;
  left: 20%;
  text-align: center;
  font-size: 0.57rem;
  color: #333;
  overflow: hidden;
}
.main {
  overflow: hidden;
}
.m-ct {
  margin-top: 1rem;
}
.top-search {
  padding: 0.3rem 0.5rem;
  background-color: #f1f1f1;
}
.top-search ul {
  line-height: 0.8rem;
  border-radius: 0.8rem;
  box-sizing: border-box;
  overflow: hidden;
  color: #aaa;
  background-color: #fff;
  display: flex;
  height: 1rem;
}
ul {
  list-style: none;
}
.top-search li {
  text-align: center;
}
.top-search li a {
  display: block;
  color: #00be88;
}
.top-search li a i {
  color: #00be88;
}
.top-search i.icon-city {
  width: 1.5rem;
  height: 0.45rem;
  line-height: 0.45rem;
  overflow: hidden;
  border-right: 1px solid rgb(210, 241, 162);
}
.top-search li i {
  display: inline-block;
  vertical-align: middle;
}
.top-search li.flex-5 {
  width: 100%;
  text-indent: 0.35rem;
  text-align: left;
  padding-left: 0.133333rem;
  display: flex;
}
.top-search li.flex-5 i {
  display: inline-block;
  height: 0.32rem;
}
.top-search .global-search {
  height: auto;
  line-height: 1;
  padding: 0.25rem 0;
  display: flex;
  text-align: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: space-around;
  align-items: center;
}
.top-search li.flex-5 a,
.top-search li.flex-5 i {
  color: #bbb;
}
.top-search li i.icon-search {
  margin-top: 0;
}
global-search input {
  display: block;
  line-height: 1.5;
  background-color: #fff;
}
.flex .flex-7,
.flex-end .flex-7,
.flex-middle .flex-7 {
  flex: 7;
}
.global-search input {
  display: block;
  line-height: 1.5;
  background-color: #fff;
  border: none;
  padding-left: 0.133333rem;
}

.t-box:last-child,
.t-tab:last-child,
.t-ul:last-child {
  margin-bottom: 0;
  height: 291px;
}
.t-box {
  padding: 0.6rem;
  background-color: #fff;
  word-wrap: break-word;
}
.search-hot {
  margin-bottom: 1.49rem;
  width: 100%;
}
#JS_empty {
  position: absolute;
  right: .78125rem;
}
.search-hot1 {
  margin-bottom: 1rem;
  height: 5rem;
}
.search-hot .h3 {
  display: block;
  position: relative;
  margin-bottom: 0.6rem;
  color: #999;
  font-size: 0.35rem;
}

.search-hot a {
  display: block;
  float: left;
  line-height: 1rem;
  padding: 0 0.34rem;
  margin: 0 0.34rem 0.34rem 0;
  background-color: #f4f6f8;
  border-radius: 0.08rem;
  color: #666;
}
.t-center {
  text-align: center;
}
.search-hot .h3 .pnr {
  position: absolute;
  right: 0;
  font-size: 0.7rem;
  line-height: 1;
  margin-top: -0.32rem;
  margin-right: 0;
  color: #bbb;
}
#searchInput {
    padding-top: .2rem;
}
</style>

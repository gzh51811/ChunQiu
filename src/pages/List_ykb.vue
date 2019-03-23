<template>
  <div id="List">
    <Head :title="Title"></Head>
    <section class="top-search">
      <ul class="flex">
        <li>
          <a
            class="top-city"
            href="/m/address/address?returnUrl=/广州-泰国"
            data-role="ga"
            data-done="出发城市"
            data-tag="广州"
          >
            <i class="icon-city">广州</i>
          </a>
        </li>
        <li class="flex-5">
          <form class="global-search flex" autocomplete="off" action method="get">
            <span style="margin-top: -0.15rem;"></span>
            <i class="iconfont icon-search flex-1" style="font-size: .4rem;"></i>
            <input
              class="search-txt flex-7"
              type="search"
              value
              placeholder="目的地/景点/门票等"
              id="searchInput"
              name="search"
            >
            <i class="icon-empty flex-1" id="JS_empty"></i>
          </form>
        </li>
      </ul>
    </section>
    <div id="nav_ykb" style="position:relative;overflow: hidden;height:1rem;line-height:1rem;">
      <ul class="nav">
        <li
          v-for="(item,idx) in type"
          :key="idx"
          :class="{active:idx==curIdx}"
          @click="changeIdx(idx,item.attributeName)"
        >{{item.name}}</li>
      </ul>
    </div>
    <ul class="first">
      <li @click="handleChange">
        <p>1月</p>
        <span>¥1399起</span>
      </li>
      <li>
        <p>2月</p>
        <span>¥1299起</span>
      </li>
      <li>
        <p>3月</p>
        <span>¥1399起</span>
      </li>
      <li>
        <p>4月</p>
        <span>¥1599起</span>
      </li>
    </ul>
    <ol>
      <li v-for="(item,idx) in list" :key="idx" @click="jump">
        <div class="pic_list">
          <img :src="item.picture" alt>
        </div>
        <div class="txt-outer">
          <div class="text">
            <a
              class="link-mask"
              :data-title="item.managerRecommend"
              data-role="ga"
              data-done="tab/全部/推荐排序"
              data-tag="团队游/165625_/tour/165625#S_广州_泰国"
              href="javascript:;"
            >{{item.name}}</a>
          </div>
          <div class="info js_info">
            班期：
            3月、4月、5月、6月
          </div>
          <div class="money">¥
            <em>{{item.buyQuantity}}</em>起
          </div>
        </div>
      </li>
    </ol>
    <goUp :state="state"></goUp>
    <mt-actionsheet :cancelText="cancelText" :actions="actions" v-model="sheetVisible"></mt-actionsheet>
    <footer id="footer">
      <ul>
        <li @click="up">
          <i class="iconfont icon-paixu"></i>
          <p>排序方式</p>
        </li>
        <li>
          <i class="iconfont icon-iconfiltering"></i>
          <p>更多筛选</p>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
import Head from "../components/Head_ykb";
import goUp from "../components/goUp_ykb";
export default {
  data() {
    return {
      state: false,
      Title: "广州",
      curIdx: 0,
      attributeName: "all",
      cancelText: "",
      actions: [
        {
          name: "推荐排序",
          method: () => {
            this.recommend();
          }
        },
        {
          name: "销量",
          method: () => {
            this.qtySort();
          }
        },
        {
          name: "价格从低到高",
          method: () => {
            this.lpriSort();
          }
        },
        {
          name: "价格从高到低",
          method: () => {
            this.hpriSort();
          }
        }
      ],
      sheetVisible: false,
      selected: [],
      type: [
        { name: "全部", attributeName: "all" },
        { name: "自由行", attributeName: "13" },
        { name: "团队游", attributeName: "92" },
        { name: "酒店套餐", attributeName: "91" },
        { name: "其它", attributeName: "all" }
      ],
      list: []
    };
  },
  components: {
    Head,
    goUp
  },
  methods: {
    handleChange() {},
    up() {
      this.sheetVisible = true;
    },
    changeIdx(idx, id) {
      this.curIdx = idx;
      this.attributeName = id;
      this.$axios.get(`http://127.0.0.1:1811/List/${id}`).then(res => {
        this.list = res.data.data;
      });
    },
    //推荐
    recommend() {
      this.list.sort(this.sortBy("productId", true));
    },
    //销量
    qtySort() {
      this.list.sort(this.sortBy("pattern", true));
    },
    //从低到高
    lpriSort() {
      this.list.sort(this.sortBy("buyQuantity", true));
    },
    //从低到高
    hpriSort() {
      this.list.sort(this.sortBy("buyQuantity", false));
    },
    sortBy: function(attr, rev) {
      //第二个参数没有传递 默认升序排列
      if (rev == undefined) {
        rev = 1;
      } else {
        rev = rev ? 1 : -1;
      }

      return function(a, b) {
        a = a[attr];
        b = b[attr];
        if (a < b) {
          return rev * -1;
        }
        if (a > b) {
          return rev * 1;
        }
        return 0;
      };
    },
    slide() {
      (() => {
        document.addEventListener("DOMContentLoaded", () => {
          var nav_ykb = document.querySelector("#nav_ykb");
          window.addEventListener("scroll", () => {
            if (window.scrollY > 77) {
              nav_ykb.style.position = "fixed";
              nav_ykb.style.top = "1.4rem";
            } else {
              nav_ykb.style.position = "relative";
              nav_ykb.style.top = "0";
            }
            if (window.scrollY > 100) {
              this.state = true;
            } else {
              this.state = false;
            }
          });
        });
      })();
    },
    format() {
      let { attributeName } = this.$route.params;
      let searArr = location.search.slice(1).split("=");
      if (searArr[1]) {
        this.Title = decodeURI(searArr[1]);
        this.$axios
          .get("http://127.0.0.1:1811/List/key?attributeId=" + searArr[1])
          .then(res => {
            this.list = res.data.data;
          });
        return;
      }

      this.$axios
        .get("http://127.0.0.1:1811/List/all?attributeId=" + attributeName)
        .then(res => {
          this.list = res.data.data;
        });
    },
    jump(){
      this.$router.push({path:"/goods"})
    }
  },
  created() {
    this.format();
  },
  mounted() {
    this.slide();
  }
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
}

.top-search {
  margin-top: 1.25rem;
  padding: 0.2rem 0.4rem;
  background-color: #f1f1f1;
  .top-city {
    margin: 0 0.3125rem;
    padding-left: 0.125rem;
  }
  li.flex-5 {
    text-indent: 0.15rem;
    text-align: left;
  }
  .search-txt {
    margin-left: 0.5rem;
  }
  ul {
    line-height: 0.8rem;
    border-radius: 1.28rem;
    box-sizing: border-box;
    overflow: hidden;
    color: #aaa;
    background-color: #fff;
  }
  li {
    text-align: center;
    a {
      display: block;
    }
    i {
      display: inline-block;
      vertical-align: middle;
      margin-top: 0.1rem;
    }
  }
  .global-search {
    height: auto;
    padding: 0.15rem 0;
    text-align: center;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .flex-5 input {
    border: none;
  }
}
.top-search li a,
.top-search li i {
  color: #00be88;
}
.flex,
.flex-end,
.flex-middle {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.nav {
  position: absolute;
  height: 1rem;
  padding: 0.125rem 0;
  width: 25rem;
  margin-bottom: 0.0625rem;
  li {
    float: left;
    width: 2rem;
  }
}
.first {
  display: flex;
  height: 1.475rem;
  margin-top: 0.125rem;
  flex-flow: wrap;
  text-align: center;
  border-top: 0.03125rem solid #e8e8e8;
}
.first li {
  width: 25%;
  display: flex;
  justify-content: center;
  flex-flow: column;
  font-size: 0.346667rem;
  span {
    color: #f84;
  }
}
ol {
  display: flex;
  overflow: hidden;
  margin: 0 0 2.1rem 0;
  // height: 159.1875rem;
  padding: 0 0.6rem;
  flex: 1;
  flex-flow: column;
  li {
    height: 3rem;
    display: flex;
    padding-top: 0.4rem;
    font-size: 0.346667rem;
    border-top: 0.03125rem solid #e8e8e8;

    span {
      color: #f84;
    }
    .pic_list {
      display: inline-block;
      img {
        width: 2.91rem;
        height: 2.57rem;
      }
    }
  }
}
.txt-outer {
  text-align: left;
  display: flex;
  overflow: hidden;
  padding: 0 0.6rem;
  flex: 1;
  flex-flow: column;
  .js_info {
    font-size: 0.17rem;
    color: #999;
  }
  .money {
    color: #f66;
    em {
      font-size: 0.55rem;
      line-height: 1;
      vertical-align: bottom;
    }
  }
}
.text {
  //多行超出时隐藏
  width: 4.4375rem;
  height: 33px;
  margin-bottom: 0.625rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  a {
    color: #000;
  }
}
#footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
#footer ul {
  display: flex;
  height: 1.306667rem;
  text-align: center;
}
#footer li {
  width: 50%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  font-size: 0.24rem;
  color: #fff;
  background-color: rgba(51, 64, 80, 0.95);
}

#footer li i {
  font-size: 0.68rem;
}
#nav_ykb {
  width: 100%;

  background-color: #fff;
}
</style>


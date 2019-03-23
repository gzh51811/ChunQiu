<template>
  <div class="box4">
    <ul>
      <li :class="{active:index==activeIdx}" :index="item+''" v-for="(item,index) in  mun" :key="index" @click="tiaozhuan(index)" >
        <i :class="item.classname" ></i>
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props:["activeIdx"],
  data() {
    return {
        mun: [
        {
          name: "首页",
          classname: "iconfont icon-shouye"
        },
        {
          name: "目的地",
          classname: "iconfont icon-dingwei"
        },
        {
          name: "发现",
          classname: "iconfont icon-shezhi"
        },
        {
          name: "客服",
          classname: "iconfont icon-kefu"
        },
        {
          name: "我的",
          classname: "iconfont icon-wode"
        }
      ],
    };
  },
  methods:{
          //点击单页面跳转
    tiaozhuan(index) {
      //     //编程式导航，比指向式导航更灵活  把nav传过来，要什么值当索引就自己写
      //     this.$router.push({path:nav.path})//等效于link：to(path)
      //用下标当索引，跳转不同的页面
      switch (index) {
        case 0:
          this.$router.push({ name: "Home" });
          break;

        case 1:
          this.$router.push({ name: "dest" });
          break;

        case 2:
          this.$router.push({ name: "Find" });
          break;

        case 3:
          this.$router.push({ name: "kefu" });
          break;

        case 4:
          this.$router.push({ name: "vipMessage" });
          break;
      }
    },
  }
};
</script>
<style scoped lang="scss">
.box4 {
  width: 100%;
  height: 1.306667rem;
  z-index: 999;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
}
.box4 ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.box4 ul li {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(143, 141, 141);
  font-size: 0.266667rem;
}
.box4 ul li .iconfont {
  font-size: 0.666667rem;
}
.box4 ul li.active {
  color: rgb(33, 122, 33);
  .iconfont {
    color: rgb(33, 122, 33);
  }
}
</style>


<template>
  <div>
    <mt-tabbar class="tabbar" fixed>
      <mt-tab-item id="c" class="tabbar_l">
        <i class="el-icon-star-off"></i>
        <br>收藏
      </mt-tab-item>
      <mt-tab-item id="k" class="tabbar_l">
        <i class="el-icon-phone"></i>
        <br>客服
      </mt-tab-item>
      <mt-tab-item id="y" class="tabbar_r">立即预定</mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
    // data(){
    //     return{

    //     }
    // }
}
</script>

<style lang="scss">
.tabbar {
  height: 40px;
  vertical-align:center;
  .tabbar_l {
    width: 20%;
    .el-icon-star-off {
      font-size: 20px;
    }
    .el-icon-phone {
      font-size: 20px;
    }
  }
  .tabbar_r {
    width: 60%;
    background: rgb(253, 101, 0);
    .mint-tab-item-label{
    font-size: 16px;
    line-height: 24px;
    }
  }
}
</style>

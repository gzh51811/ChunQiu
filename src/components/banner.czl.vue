<template>
  <div>
<!-- 轮播图 -->
    <div id="banner">
      <mt-swipe :show-indicators="false" :auto="0" @change="handleChange">
        <mt-swipe-item>
          <img src="../assets/img/czl/banner3.jpg" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/img/czl/banner2.jpg" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/img/czl/banner1.jpg" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/img/czl/banner4.png" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/img/czl/banner5.jpg" alt>
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/img/czl/banner6.jpg" alt>
        </mt-swipe-item>
      </mt-swipe>
      <div class="banner_fix">广州出发 | 广东春秋 | 产品编号 {{title.ProductId}}</div>
      <div class="banner_fix_r" :v-model="num"><i class="el-icon-picture-outline"></i>{{num+1}}/6张</div>
    </div>
    <div>
<!-- 介绍 -->
      <div class="t-box item-title">
        <div class="h2">{{title.Title}}</div>
        <div class="item-money">
          <span class="ag-price">
            <span class="crred" id="price">
              ¥
              <em>{{title.BuyNum}} </em>
              <label class="cr6"> 起/人</label><el-button type="text" @click="open5"><i class="el-icon-question"></i></el-button>
            </span>
            <i data-role="ga" data-done="价格说明" class="icon-help"></i>
          </span>
          <span id="JS_activity"></span>
          <span id="saleCount" class="pnr cr9"></span>
        </div>
        <div class="item-card">
          <i class="el-icon-success"></i>
          <span class="tag">产生积分</span>
          <i class="el-icon-success"></i>
          <span class="tag">即时确认</span>
        </div>
      </div>
      <div class="t-box item-coupon">
        <span class="h3">领券</span>
        <div class="t-inner">
          <a class="btn" href="javascript:;">满4000减80</a>
          <a class="btn" href="javascript:;">满4000减80</a>
          <a class="btn" href="javascript:;">满3000减66</a>
          <i class="el-icon-arrow-right" @click="popupVisible=!popupVisible"></i>
          <mt-popup v-model="popupVisible" position="bottom">
<!-- 优惠券弹窗 -->
            <div class="popup" v-show="isshow">
              <div class="popup_top">
                <span class="popup_l">领劵</span>
                <i class="el-icon-close popup_r" @click="popupVisible=!popupVisible"></i>
              </div>
              <div>
                <img src="../assets/img/czl/juan.png" alt>
                <img src="../assets/img/czl/juan.png" alt>
                <img src="../assets/img/czl/juan.png" alt>
              </div>
            </div>
          </mt-popup>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        title:{},
        isshow: true,
        popupVisible: false,
        num:0
    };
  },
  methods: {
    shuju(){
      let {id}=this.$route.query;
      // console.log(id);
      this.$axios.post("http://localhost:1888/registry").then(res=>{
                this.title = res.data[0].Data[9];
                // console.log(res.data[0]);
            })
    },
    //弹窗
     open5() {
        this.$alert('<p><strong style="font-weight:bold">起价说明：</strong><br>1.本起价是以2位成人于2019-04-06出行，所核算的<span style="color:red;">单人价格</span>；<br>2.本起价是在24小时内测算的价格；<br>3.你最终预订的价格是根据您所选择的出发日期、人数、所选附加产品计算的，这些因素均会导致价格的变化。</p>',
        {
          dangerouslyUseHTMLString: true,
          center:true,
          showConfirmButton:false
        });
      },
      handleChange(index){
        this.num = index;
      }
  },
  created(){
    this.shuju();
  }
};
</script>
<style scoped lang="scss">
.t-box {
  padding: 0.5rem;
  text-align: left;
  .h2 {
    font-weight: 700;
    max-height: none;
    color: #333;
    font-size: 0.6rem;
    margin-bottom: .3rem;
    line-height: 0.7rem;
    overflow: hidden;
  }
  .item-money {
    text-align: left;
    .crred {
      font-weight: 700;
      color: #f66;
    }
  }
  .crred {
    font-weight: 700;
    color: #f66;
  }
  .item-card {
    display: inline-block;
    overflow: hidden;
    padding: 0.5rem 0 0.5rem 0;
    color: #81838e;
    padding-bottom: 0;
    text-align: left;
    .tag {
      padding-left: 0;
      border: none;
      color: #666;
    }
  }
}
.el-message-box{
  height: 100%;
  width: 15.75rem;
}
h2{
  font-size:0.6rem;
}
.el-icon-question{
  color:rgb(22, 230, 230);
}
.popup {
  height: 100%;
  text-align: center;
  .popup_top {
    text-align: left;
    padding-top:.325rem;
    .popup_l {
      font-weight:700;
      font-size:0.6rem;
      margin-left:.325rem;
    }
    >i{
        font-size:0.6rem;
      }
    .popup_r {
        display:block;
        float:right;
      margin-right:.325rem;
    }
  }
}
#banner {
  height: 6rem;
  position:relative;
  .banner_fix{
    font-weight: 900;
    position:absolute;
    bottom:0;
    left:0;
    color: #fff;
  }
  .banner_fix_r{
    position:absolute;
    bottom:0;
    right:0;
    font-weight: 900;
    color: #fff;
  }
}
.item-coupon {
  padding-left: 0.8rem;
  border-top: 1px solid #ccc;
  color: #333;
  .t-inner {
    color: #333;
    text-align: left;
    display: inline-block;
    .btn {
      width:2rem;
      display: inline-block;
      text-align: center;
      line-height: 1rem;
      background: url(../assets/img/czl/bgi.png) no-repeat center center;
      background-size: 100% 100%;
      text-decoration: none;
      margin: 0.1rem;
      font-size: 0.05rem;
      color: #fff;
    }
    .el-icon-arrow-right {
      display: block;
      float: right;
      font-size: 1.2rem;
    }
  }
}
</style>



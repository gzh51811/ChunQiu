<template>
  <div>
    <!-- 日期选择 -->
    <div class="data">
      <h4>选择出发时间及人数
        <span>(以下价格均为起价)</span>
        <i class="el-icon-arrow-right"></i>
      </h4>
      <mt-button
        v-for="(btn,idx) in btns"
        :key="idx"
        :class="{'datas':true,active:idx===active}"
        @click="border(idx)"
      >
        {{btn.data}}
        <span class="crred">
          <em>¥{{btn.price}}</em>
        </span>
      </mt-button>
      <mt-button class="datas">更多日期</mt-button>
    </div>

    <!-- 景点介绍 -->
    <div  class="searchBar" id="searchBar">
      <mt-navbar class="nav" v-model="selected">
        <mt-tab-item  id="1">{{project[0].boss}}</mt-tab-item>
        <mt-tab-item id="2">{{project[1].boss}}</mt-tab-item>
        <mt-tab-item id="3">{{project[2].boss}}</mt-tab-item>
        <mt-tab-item id="4">{{project[3].boss}}</mt-tab-item>
      </mt-navbar>
      <mt-navbar  v-show="searchBarFixed" class="isFixed nav" v-model="selected">
        <mt-tab-item id="1">{{project[0].boss}}</mt-tab-item>
        <mt-tab-item id="2">{{project[1].boss}}</mt-tab-item>
        <mt-tab-item id="3">{{project[2].boss}}</mt-tab-item>
        <mt-tab-item id="4">{{project[3].boss}}</mt-tab-item>
      </mt-navbar>
      <!-- <mt-cell v-for="(mvp,idx) in project" :title="mvp.boss" :key="idx"/> -->
      <div class="words">
        <h2>{{project[0].boss}}</h2>
        <br>【舌尖上的泰国】：八大美食——①A-one自助餐 ②娜通水上餐厅 ③泰国特色火锅 ④皇家免税店国际自助餐 ⑤水果大餐⑥ChocolateVille欧式户外餐厅⑦泰国特色风味餐⑧海鲜大餐
        <br>【直飞航空】：春航自营+广州直飞曼谷+15KG行李额+省时省心！
        <br>【“泰”识“叹”】全程入住网评四星酒店——旅游就应该享受！
        <br>【“泰”随心】承诺绝无强迫消费，旅游就该随心！
      </div>
      <div class="open-txt">
        <h2>{{project[1].boss}}</h2>
        <br>过境情况：过境
        <br>提前一天于23:15自行前往白云机场国际出发厅7号门集合,在领队带领下搭乘春秋航空公司国际航班飞往“天使之都”——曼谷，抵达后送酒店休息。
        <br>●于指定时间集中，午餐之后前往【北榄鳄鱼湖】（约90分钟）北榄鳄鱼湖动物园是泰国著名游览胜地，离曼谷市区10公里，坐落在湄南河入海处的北榄府境内，动物园占地500亩。
        <br>●赠送泰国地道特色【泰国古式按摩】（约1小时）（温馨提示：需自理小费50铢/人。18岁以下儿童不安排按摩），除了大家熟悉的关节纾整外，更有自成一套的经脉、穴位按压及伸展理论。利用手指、手臂、膝部和双腿等按摩对方穴位，又在肌肉和关节上按压和伸展，令身体、精神和心灵回复平衡，促进血液循环、呼吸系统、神经系统、消化系统运作正常和肌肉皮肤新陈代谢。
        <br>●观看能歌善舞的【泰国人妖表演】（约1小时），人妖歌舞秀雌雄难辨、精彩纷呈的演出令人终身难忘。无论是舞台布景还是服饰，造型都出自名家之手。表演结束后，可别忘了与人妖亲密接触拍照留念。
        <br>●夜游环境优美的欧洲风情【Asiatique码头夜市】（约1小时），在巨大摩 天輪下吃小吃喝啤酒聊天，随手拍都是美美的景色，感受曼谷的慢节奏生活，后回酒店休息。
      </div>
      <div class="words">
        <h2>{{project[2].boss}}</h2>
        <br>1、机票：广州/曼谷往返经济舱机票及机票附加税;
        <br>2、住宿：行程内5晚网评四星酒店，住宿为两人标准间，含每人每晚一床位，酒店住宿若出现单男单女，旅行社会按照报名先后的顺序安排同性客人同住，若客人不接受此种方式或经协调最终不能安排的，客人须在出发前补单房差;
        <br>3、用餐：行程内标注用餐，按实际航班安排，早餐 （包含在房费中）,正餐餐标约30元/成人（小孩正餐餐费按成人标准）围桌为8菜1汤不含酒水；所有餐食如自动放弃，款项恕不退还;
        <br>4、用车：地接用车将根据团队人数安排9-40座空调旅游车，保证每人1正座；
        <br>5、旅行社责任险;
        <br>6、导游服务费。
      </div>
      <div class="words">
        <h2>{{project[3].boss}}</h2>
        <br>尊敬的游客：
        <br>根据国家旅游局《旅行社投保旅行社责任保险规定》的精神，从2001年9月1日起，旅行社将不再统一为旅游者购买旅游意外保险；而旅行社责任保险，只有在旅游过程中由于旅行社的责任（即疏忽或过失）导致游客人身、财物遭受的损害，保险公司才予以赔偿。因此以下三种情况将不获责任保险的赔偿：
        <br>①在旅游行程中，由于游客自身疾病引起的各种损失或损害；
        <br>②由于游客个人过错导致的人身伤亡和财产损失，以及由此导致需支出的各种费用；
        <br>③游客在自行终止旅行社的旅游行程后，或在不参加双方约定的活动而自行活动的时间内发生的人身、财产损害。
        <br>为保障贵客的合法利益，现郑重推荐中国人寿保险公司的旅游意外保险，以获得医疗、意外残疾、紧急救援等五项保障。（详见旅游意外保险单)
        <br>特别约定：
        <br>1、强烈建议出行游客购买个人旅游意外保险。具体保险险种请在报名时向销售人员咨询并购买，出行时请将该保单资料随身携带。
        <br>2、本线路含有出海或者海上活动等高风险性游乐项目，敬请客人务必在参加前充分了解项目的安全须知并确保身体状况能适应此类活动，如非旅行社责任造成的客人意外伤害，旅行社不承担相应的赔偿责任。
        <br>3、年龄未满18岁或超过65岁的团友由于体质问题不适合参加泰式按摩活动，可以选择在按摩中心休息，另视为放弃古法按摩，则不能将该项服务转让他人或要求退款。
        <br>4、旅客信息请务必填写正确，因客人原因填写错误产生的责任及费用，需由客人自行承担。
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      btns: [
        {
          data: "03-21  星期四",
          price: 1234
        },
        {
          data: "03-21  星期五",
          price: 12345
        },
        {
          data: "03-21  星期六",
          price: 23456
        },
        {
          data: "03-21  星期日",
          price: 1234
        },
        {
          data: "03-21  星期一",
          price: 8795
        },
        {
          data: "03-21  星期二",
          price: 12398
        },
        {
          data: "03-21  星期三",
          price: 9876
        }
      ],
      project: [
        {
          boss: "产品描述"
        },
        {
          boss: "行程介绍"
        },
        {
          boss: "费用说明"
        },
        {
          boss: "预定须知"
        }
      ],
      selected: 1,
      active:0,
      searchBarFixed:false
    };
  },
  mounted() {
        window.addEventListener('scroll',this.handleScroll)
  },
  methods:{
    border(idx){
      this.active = idx;
    },
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let offsetTop = document.querySelector('#searchBar').offsetTop
      this.searchBarFixed = scrollTop > (offsetTop - 40) // 44px是导航标题头的高度

    },
    toggle (tabIndex) {
      this.whichTab = tabIndex
      window.location.href = '#searchBar' // 锚点
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
};
</script>
<style lang="scss">
#searchBar{
  .isFixed{
    position:fixed;
    background-color:#fff;
    top:40px; // 44px是导航标题头的高度
    z-index:999;
    width: 100%;
  }
}
.active {
  border: 2px solid #58bc58;
}
.mint-tab-item-label {
  font-weight: 700;
}
.data {
  height: 14rem;
  border-top: 15px solid rgb(236, 224, 224);
  border-bottom: 15px solid rgb(236, 224, 224);
  > h4 {
    border-left: 4px solid #58bc58;
    margin-left: 8px;
    padding-left: 8px;
    > span {
      font-size: 14px;
      padding-left: 8px;
    }
    .el-icon-arrow-right {
      display: block;
      float: right;
      font-size: 18px;
      margin-right: 18px;
    }
  }
  .datas {
    display: block;
    float: left;
    font-size: 12px;
    width: 5rem;
    height: 3rem;
    margin: 0.5rem 0.4rem;
    .crred {
      font-weight: 700;
      color: #f66;
    }
  }
}
.t-box {
  padding: 10px;
  text-align: left;
  .h2 {
    font-weight: 700;
    max-height: none;
    color: #333;
    font-size: 24px;
    margin-bottom: 10px;
    line-height: 25px;
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
    padding: 10px 0 10px 0;
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
</style>



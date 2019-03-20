<template>	    
    <div class="dest-container"> 
        <mt-header fixed title="目的地">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button class="iconfont icondianhua" slot="right"></mt-button>
        </mt-header>
        <div class="dest-search">
            <a href="###" class="search-left">广州<i class="iconfont iconxialajiantou"></i></a> 
            <mt-search v-model="value"  placeholder="搜索你想去的地方">
                </mt-search>
        </div>
        <div class="hot-city">
            <ul class="tab-city">
                <li @click="chang(secnic.id,idx)"  v-for="(secnic,idx) in list" :class="{ active: idx == curidx }" :key="idx">{{secnic.name}}</li>
            </ul>
            <div class="tab-content">
                <ul class="ul-img">
                    <li class="dataitem" v-for="(img,idx) in imglist" :key="idx">
                        <a :href="img.linkurl" class="datalist">
                            <img :src="img.imgurl" alt="">
                            <div class="scenicName">
                                <h3>{{img.title}}</h3>
                                <p>{{img.subtitle}}</p>
                            </div> 
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      list: [],
      imglist: [],
      curidx: 0
    };
  },
  methods: {
    chang(idx, id) {
      this.$axios
        .get("http://localhost:1888/goodslist/id", {
          params: {
            id: idx
          }
        })
        .then(res => {
          let { data } = res;
          //   console.log(data[0].data.banners);
          this.imglist = data[0].data.banners;
          console.log(this.imglist);
        });
      this.curidx = id;
    }
  },
  created() {
    this.$axios.get("http://localhost:1888/goodslist/all").then(res => {
      // console.log(res);
      let { data } = res;
      for (let i = 0; i < data.length; i++) {
        this.list.push(data[i]);
      }
      console.log(this.list);
    });
    //初始化数据
    this.$axios
      .get("http://localhost:1888/goodslist/id", {
        params: {
          id: 913
        }
      })
      .then(res => {
        let { data } = res;
          console.log(data[0].data.banners);
        this.imglist = data[0].data.banners;
      });
  }
};
</script>
<style scoped lang="scss">
.active {
  background-color: #f6f7fb;
  color: #00be88;
}
</style>

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
                <li>国内</li>
                <li>国内</li>
                <li>国内</li>
                <li>国内</li>
                <li>国内</li>
                <li>国内</li>
                <li>国内</li>
                <li>国内</li>
            </ul>
            <div class="tab-content">
                <ul class="ul-img">
                    <li class="dataitem">
                        <a href="###" class="datalist">
                            <img src="../assets/img/dest01.png" alt="">
                            <div class="scenicName">
                                <h3>长白山</h3>
                                <p>CHANGBAISHAN</p>
                            </div> 
                        </a>
                    </li>
                    <li class="dataitem">
                        <a href="###" class="datalist">
                            <img src="../assets/img/dest01.png" alt="">
                            <div class="scenicName">
                                <h3>长白山</h3>
                                <p>CHANGBAISHAN</p>
                            </div> 
                        </a>
                    </li>
                    <li class="dataitem">
                        <a href="###" class="datalist">
                            <img src="../assets/img/dest01.png" alt="">
                            <div class="scenicName">
                                <h3>长白山</h3>
                                <p>CHANGBAISHAN</p>
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
      value: ""
    };
  }
};
</script>
<style scoped lang="scss">
</style>

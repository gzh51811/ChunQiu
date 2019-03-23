<template>
  <div id="List">
    <Head :title="title"></Head>
    <section class="top-search">
        <ul class="flex">
            <li class="flex-5">
                <form class="global-search flex" autocomplete="off" action="" method="get">
                    <i class="iconfont icon-search flex-1" style="font-size: .4rem;"></i>
                    <input class="search-txt flex-7" type="search" value="" placeholder="按关键词搜索一下" id="searchInput" name="search" >
                    <i class="icon-empty flex-1" id="JS_empty" ></i>
                </form>
            </li>
        </ul>
    </section>
    <lunbotu></lunbotu>
    <findNav :list="list" v-on:change="handleChange"></findNav>
    <Footer :activeIdx="2"></Footer>    
  </div>
</template>
<script>
import lunbotu from "../components/lunbotu";
import findNav from "../components/findNav";
import Head from "../components/Head_ykb";
import Footer from "../components/Footer_ykb";
export default {
    data(){
        return{
            title:"发现",
			curIdx : 0,
            list:[]
        }
    },
    components:{
        lunbotu,
        findNav,
        Head,
        Footer
    },
    methods:{
        handleChange(condition){
            this.$axios.get("http://127.0.0.1:1811/find/"+condition).then(res=>{
                if(res.data.length>0){
                    this.list=res;
                }
                
            })
        },
    },
    created(){
        this.$axios.get("http://127.0.0.1:1811/find/new").then(res=>{
            this.list=res;
            // console.log(this.list)
        })
    },
};

</script>


<style lang="scss" scoped>
body,html{
    height: 100%;
}
#List{
    height: 100%;
    display: flex;
    flex-flow: column;
}

.top-search{
    margin-top:1.25rem;
    padding: .2rem .4rem;
    background-color: #f1f1f1;
    .top-city{
        margin:0 .3125rem;
        padding-left:.125rem; 
        
    }
    li.flex-5 {
        text-indent: .55rem;
        text-align: left;
    }
    .search-txt{
        margin-left: .5rem;
    }
     ul {
        line-height: 1rem;
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
        }
    }
    .global-search {
        height: auto;
        line-height: 1;
        text-align: center;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
    }
    .flex-5 input{
        line-height: .8rem;
        border:none;
    }
}
.top-search li a, .top-search li i {
    color: #00be88;
}
.flex, .flex-end, .flex-middle {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
#searchInput {
    margin-top: 0;
}

#footer {
    position: fixed;
    bottom:0;
    width:100%;
}
#footer ul {
    display: flex;
    height: 1.306667rem;
    text-align: center;
}
#footer li{
    width: 50%;
    display: flex;
    flex-flow: column;   
   justify-content: center; 
   font-size: 0.24rem;
   color:#fff;
   background-color: rgba(51,64,80,.95);
}

#footer li i{
    font-size: 0.68rem;
   
}
#nav_ykb{
	width:100%;
	background-color:#fff; 
}
.mint-swipe-indicator.is-active {
    background: #fff;
}

</style>


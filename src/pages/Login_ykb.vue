<template>
  <div class="wrap">
    <div class="wrap login-bd">
      <div class="bd-color"></div>
      <Head></Head>
      <!-- <header class="header" id="jsHeader">
        <a href="javascript:;" data-backurl="http://m.springtour.com/site//member" class="jsback">
          <i class="icon-return"></i>
        </a>
        <section class="ftr">
          <a href="/site/loginnew/AccountIndex?returnUrl=%2Fsite%2FMember">账号登录</a>
        </section>
      </header> -->
      <article class="main m-cb">
        <section class="login-outer">
          <div class="login-img">
            <img
              src="http://media.china-sss.com/chunqiu/m/images/user/portrait.png?releaseno=20180531_20190315"
            >
          </div>
          <ul class="login-input">
            <li>
              <input type="text" name="phone" value placeholder="用户名" maxlength="11" ref="username">
              <span class="pnr" id="JS_getCode" data-url="/site/loginnew/GetLoginSmsCode">
                <!-- <em>获取动态密码</em> -->
              </span>
            </li>
            <li>
              <input type="text" value name="authCode" placeholder="密码" ref="password">
              <span class="pnr dn js-input-empty">
                <i class="icon-empty"></i>
              </span>
            </li>
          </ul>
          <p class="other js-msgTips">*未注册春秋账号的手机号，登录时将自动注册</p>
          <p class="other js-msgTips" style="display:none">*您还不是春秋会员，输入动态密码登录将自动注册</p>
          <p class="other js-msgTips" style="display:none">
            <span>
              <i class="icon-radiobox" id="JS_accept"></i>我愿意接受
              <a class="crgreen" href="/site/regist/terms">《春秋旅游网隐私与服务条款》</a>
            </span>
          </p>
          <div
            class="login-btn"
            id="loginSubmit"
            data-getgeetestcaptcha
            data-url="/site/loginnew/LoginBySms"
            data-isopengeetest="False"
          >
            <a class="btn" href="javascript:;" @click="checkout"  ref="submitBtn">登录</a>
          </div>
        </section>
        <footer class="l-footer">
          <ul class="flex">
            <li>
              <a href="/site/loginnew/QQLogin">
                <i class="icon-qq"></i>QQ
              </a>
            </li>
            <li>
              <a href="/site/loginnew/SinaLogin">
                <i class="icon-sina"></i>微博
              </a>
            </li>
            <li>
              <a href="/site/loginnew/AliPayLogin">
                <i class="icon-alpay"></i>支付宝
              </a>
            </li>
          </ul>
        </footer>
      </article>
    </div>
  </div>
</template>
<script>
import Head from "../components/Head_ykb"
export default {
    methods:{
        checkout(){
            this.$refs.submitBtn.style.backgroundColor= "red";         
            let username = this.$refs.username.value;
            let password = this.$refs.password.value;
            this.$axios.post("http://127.0.0.1:1811/login",{
                params :{
                    username,
                    password
                }
            }).then(res=>{
                if(res.data.code==1){
                    // console.log(res.data.msg)
                    this.$router.push("/")
                }else if(res.data.code==0){
                    // console.log(res.data.msg)
                    this.$refs.submitBtn.style.backgroundColor= "#fff"; 
                }
            })
        },
    },
    components:{
        Head
    },
    mounted(){
        // this.move()
    }
};
</script>
<style scoped>
body {
  min-width: 320px;
  font-size: 0.55rem;
  color: #666;
  font-family: "-apple-system", Helvetica, "Microsoft YaHei", "Ping Hei", Arial;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;
  -moz-user-select: none;
  background-color: #f2f4f6;
}
.login-bd .bd-color {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    zoom: 1;
    background-color: #fff;
}
.login-bd .header {
    position: relative;
}
.login-bd .header, .login-bd .main {
    position: relative;
    z-index: 2;
}

.header, .header-detail, .home-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    height: 1.88rem;
    line-height: 1.88rem;
    padding: 0 .6rem;
}
.header, .home-header {
    background-color: #fff;
}
.t-block, article, aside, details, figcaption, figure, footer, header, iframe, menu, nav, section {
    display: block;
}
.header a, .header-detail a {
    display: inline-block;
    position: relative;
    z-index: 1;
}
a {
    color: #69c;
    text-decoration: none;
}
.header i, .header-detail i {
    display: inline-block;
    vertical-align: middle;
    font-size: .85rem;
    line-height: 1;
    color: #00be88;
}
.header .ftr, .header-detail .ftr {
    height: 1.88rem;
}
.ftr {
    float: right;
}
.header .ftr a {
    font-size: .6rem;
    color: #454545;
}
.header .ftr a {
    margin-left: .43rem;
}
.login-bd .header, .login-bd .main {
    position: relative;
    margin-top: 1.5rem;
    top:1rem;
}
.m-cb {
    padding-bottom: 2.5rem;
}
.login-bd .login-outer {
    overflow: hidden;
}
.login-img, .login-img img {
    width: 2.56rem;
    height: 2.56rem;
}
.login-img {
    display: block;
    margin: .43rem auto;
    border: 2px solid #f0f3f2;
    border-radius: 100%;
    overflow: hidden;
}
img {
    display: block;
    border: 0;
    max-width: 100%;
    height: auto;

    background-size: 25%;
}
.login-bd .login-input {
    margin-top: .9rem;
}
.login-input li {
    position: relative;
    line-height: 1.36rem;
    padding: .3rem 0;
    margin-bottom: .23rem;
    font-size: .64rem;
}
.login-input input {
    width: 60%;
    font-size: .4rem;
    color: #454545;
    border:none;
    border-bottom:1px solid #ccc;
}

input {
    -webkit-appearance: none;
    border-radius: 0;
}
.pnr {
    position: absolute;
    right: 1.4rem;
}


.login-input em {
    display: inline-block;
    height: 1rem;
    line-height: 1rem;
    padding: 0 .3rem;
    background-color: #fff;
    border-radius: 1.36rem;
    border: 1px solid #ccc;
    overflow: hidden;
    color: #ccc;
    font-size: .35rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
}
.other {
    margin-bottom: .43rem;
    color: #999;
}
.other a.crgreen, .other i {
    color: #00be88;
}
.other i {
    margin-right: .2rem;
    font-size: .55rem;
    display: inline-block;
    vertical-align: middle;
}
.login-btn {
    padding: .21rem 0 .43rem 0;
    margin-top: 1.5rem;
    margin-left: 1rem;
    width:80%;
}
.login-btn .btn {
    display: block;
    line-height: 1rem;
    border-radius: 1rem;
    overflow: hidden;
    text-align: center;
    background: -moz-linear-gradient(left,#00be88,#00be89);
    background: -webkit-gradient(linear,0 50%,100% 50%,from(#00be88),to(#00be89));
    background: -webkit-linear-gradient(left,#00be88,#00be89);
    background: -o-linear-gradient(left,#00be88,#00be89);
    box-shadow: 0 1px 8px rgba(0,176,126,.5);
    opacity: .46;
    font-size: .48rem;
}
.l-footer {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    background-color: #fff;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    box-shadow: none;
    height: .7rem;
    line-height: .7rem;
    padding: .5rem 1.8rem 1.6rem 1.8rem;
    text-align: center;
}
.flex {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.l-footer .flex li {
    font-size: .45rem;
    color: #7d7f82;
}

.l-footer .flex li {
    position: relative;
}
.flex .flex-1, .flex li {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.l-footer a {
    color: #7d7f82;
}
.l-footer .flex i {
    display: inline-block;
    vertical-align: middle;
    margin-right: .2rem;
    font-size: .77rem;
    color: #7d7f82;
}
</style>

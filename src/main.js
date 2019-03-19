import Vue from 'vue'
import App from './App.vue'
import router from './router';//引进路由

import MintUI from 'mint-ui'//---------引入的mintui框架

import axios from 'axios'
Vue.prototype.$axios = axios //方法

// import './assets/css/font-icon/iconfont.css'//引入icon图标
import 'mint-ui/lib/style.css'
// import './assets/css/base.css' //---------引入的全局公共css
// import './sass/vip-message.scss' //---------引入vip-message
// import './sass/dest.scss' //---------引入vip-message

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.use(MintUI) //插件


new Vue({
  render: h => h(App),
  router
}).$mount('#app')

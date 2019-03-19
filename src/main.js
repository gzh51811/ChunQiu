import Vue from 'vue'
import App from './App.vue'

import router from './router/index.js'
import MintUI from 'mint-ui'//---------引入的mintui框架
import axios from 'axios'
import './assets/css/font-icon/iconfont.css'//引入icon图标
import 'mint-ui/lib/style.css'
import './assets/css/base.css' //---------引入的全局公共css
import './sass/vip-message.scss' //---------引入vip-message
import './sass/dest.scss' //---------引入vip-message


Vue.use(MintUI) //插件
Vue.prototype.$axios = axios //方法
// Vue.config.productionTip = false

new Vue({
	el: '#app',
	render(creat) {
		return creat(App);
	},
	router
})
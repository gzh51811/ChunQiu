/**
 * hash路由的原理
 * * 表面：根据hash值的改变来渲染不同的组件
 * * 底层：根据window的hashchange事件来相应不同的组件
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import List from '../pages/List_ykb';
import Find from '../pages/Find_ykb';
import FindDetail from '../pages/FindDetail_ykb';
import orderForm from '../pages/orderForm_ykb';
import Login from '../pages/Login_ykb';
import Home from '../pages/Home_ysb.vue'
import kefu from '../pages/kefu.vue'
import Hsousuo from '../pages/Homesousuo_ysb.vue'
import Goods from '../pages/Goods.czl.vue'
import vipMessage from '../pages/vip-message.vue'
import dest from '../pages/dest.vue'

Vue.use(VueRouter);

let router = new VueRouter({
    // mode:'history',
    routes:[
        // 首页:当浏览器地址为path路径是时，自动渲染component对应组件
        {

            path: '/',//输入端口号时，自动跳到首页
            redirect: '/Home'
        },
        {
            name: 'Home',
            path: '/home',
            component: Home
        },
        {
            name: 'kefu',
            path: '/kefu',
            component: kefu
        },
        {
            name: 'Hsuosou',
            path: '/suosou',
            component: Hsousuo
        },
        {
            name:'List',
            path:'/list/:attributeName',
            component:List
        },
        {
            name:'Find',
            path:'/find',
            component:Find
        },{
            name:'orderForm',
            path:'/orderForm',
            component:orderForm
        },
        {
            name:'FindDetail',
            path:'/findDetail/:id',
            component:FindDetail
        },{
            name:'Login',
            path:'/login',
            component:Login
        },{
            name:'Goods.czl',
            path:"/goods",
            component:Goods,
            props:true
        },
        {
            name: 'vipMessage',
            path: '/vipMessage',
            component: vipMessage
        },
        {
            name: 'dest',
            path: '/dest',
            component: dest
        }
    ]
});



export default router;
import Vue from 'vue';//模块的作用域中没有vue，重复引进只是在用同一模块。
import VueRouter from 'vue-router';//1

import Goods from '../pages/Goods.czl.vue'
import List from '../pages/List.czl.vue'
// import mddata from './mddata.js'


Vue.use(VueRouter);//2使用插件

let router = new VueRouter({//3
    routes:[
        {
            name:"List.czl",
            path:'/list',
            component:List
        },
        {
            name:'Goods.czl',
            path:"/goods",
            component:Goods,
            props:true
            // props:{username:'laoxie',password:123}
        //     props:function(route){
        //         return {
        //             id:route.params.id,
        //             keyword:route.query.keyword
        //         }
        //     }
        },

        // {
        //     name:"mddata",
        //     path:"/mddata"
        // }
    ]
})
export default router;
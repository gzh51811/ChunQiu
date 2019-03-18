import Vue from 'vue'
import VueRouter from 'vue-router'

import vipMessage from '../pages/vip-message.vue'
import dest from '../pages/dest.vue'



Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
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

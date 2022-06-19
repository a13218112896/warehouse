import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            name: 'login',
            path: '/',
            component: () => import('../components/Login.vue')
        },{
            name: 'home',
            path: '/home',
            component: () => import('../components/Home.vue'),
        },{
            name: 'warehousing',
            path: '/warehousing',
            component: () => import('../components/modules/Warehousing.vue')
        },{
            name: 'screen',
            path: '/screen',
            component: () => import('../components/modules/screen.vue')
        },
    ]
})
export default router
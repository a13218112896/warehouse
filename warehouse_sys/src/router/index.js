import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            redirect: '/login',
        },
        {
            name: 'login',
            path: '/login',
            component: () => import('../views/login/Login.vue')
        },
        {
            name: 'home',
            path: '/home',
            component: () => import('../views/home/Home.vue'),
        },
        {
            name: 'warehousing',
            path: '/warehousing',
            component: () => import('../views/modules/warehousing/Warehousing.vue')
        },
        {
            name: 'screen',
            path: '/screen',
            component: () => import('../views/modules/screen/Screen.vue')
        },
        {
            name: 'detailedInformation',
            path: '/detailedInformation',
            component: () => import('../views/modules/detailedInformation/DetailedInformation.vue')
        },
        {
            path: "/:pathMatch(.*)*",
            component: () => import('../views/modules/404/404.vue')
        }
    ]
})
export default router
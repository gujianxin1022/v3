import { createRouter, createWebHashHistory } from "vue-router";

const home = () => import('@/pages/home.vue')
const login = () => import('@/pages/login.vue')

const routes = [
    { path: '/', redirect: '/login' },
    {
        path: '/home',
        name: 'home',
        component: home
    },
    {
        path: '/login',
        name: 'login',
        component: login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router
import Router from 'vue-router'
import Home from '@/views/Home'
import Vue from 'vue'

Vue.use(VueRouter)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            component: () => import('./views/Todos.vue')
        }
    ]
})
import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/recommend/recommend'
import singer from '@/components/singer/singer'
import ranking from '@/components/ranking/ranking'
import search from '@/components/search/search'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'fff',
            redirect: '/recommend'
        },
        {
            path: '/recommend',
            name: 'recommend',
            component: recommend
        },
        {
            path: '/singer',
            name: 'singer',
            component: singer
        },
        {
            path: '/ranking',
            name: 'ranking',
            component: ranking
        },
        {
            path: '/search',
            name: 'search',
            component: search
        }
    ]
})

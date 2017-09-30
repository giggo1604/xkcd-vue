import Vue from 'vue'
import Router from 'vue-router'
import Archive from '@/components/Archive'
import Comic from '@/components/Comic'
import store from '@/store'

Vue.use(Router)

export default (latestId) => new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'latest',
      component: Comic,
      props: { id: latestId }
    },
    {
      path: '/archive',
      name: 'archive',
      component: Archive
    },
    {
      path: '/random',
      name: 'random',
      beforeEnter (to, from, next) {
        const { comics } = store.getters
        const id = comics[Math.floor(Math.random() * comics.length)].id
        next({ name: 'comics', params: { id } })
      }
    },
    {
      path: '/:id',
      name: 'comics',
      component: Comic,
      props: true
    }
  ]
})

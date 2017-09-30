import Vue from 'vue'
import App from './App'
import initRouter from './router'
import store from './store'

Vue.config.productionTip = false

fetch('static/export.slim.json')
  .then(res => res.json())
  .then(comics => {
    store.commit('setComics', comics.reverse())
    const router = initRouter(store.getters.latestComic.id)
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      store,
      data: {
        comics: []
      },
      render: h => h(App)
    })
  })

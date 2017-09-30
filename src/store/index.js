import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comics: []
  },
  mutations: {
    setComics (state, comics) {
      state.comics = comics
    }
  },
  getters: {
    comics: ({ comics }) => comics,
    comic: ({ comics }) => id => {
      id = Number.parseInt(id)
      return comics.find(c => c.id === id)
    },
    latestComic: ({ comics }) => comics[0],
    navigation: ({ comics }) => id => {
      const index = comics.findIndex(c => c.id === id)
      const prev = index + 1 < comics.length ? comics[index + 1].id : comics[index].id
      const next = index - 1 >= 0 ? comics[index - 1].id : comics[index].id
      return {
        oldest: comics[comics.length - 1].id,
        newest: comics[0].id,
        prev,
        next
      }
    }
  }
})

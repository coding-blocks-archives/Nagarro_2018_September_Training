import Vue from 'vue'
import Vuex, { Plugin } from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const storage = new VuexPersist<any>({
  storage: window.sessionStorage
})

export default new Vuex.Store({
  state: {
    count: 5
  },
  mutations: {
    incrCount(state) {
      state.count++
    }
  },
  actions: {
    incrCountDelay(store) {
      setTimeout(() => {
        store.commit('incrCount')
      }, 1000)
    }
  },
  plugins: [storage.plugin]
})

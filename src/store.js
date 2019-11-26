import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    burgerActive: false
  },
  mutations: {
    toggleBurger (state) {
      state.burgerActive = !state.burgerActive;
    }

  },
  actions: {

  }
})

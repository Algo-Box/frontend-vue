import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkTheme: false,
    loggedIn: false,
  },
  getters: {
    getTheme(state) {
      return !!(state.darkTheme);
    }
  },
  mutations: {
    toggleTheme(state) {
      state.darkTheme ^= true;
    }
  },
  actions: {
    init({commit}) {
      let theme = localStorage.getItem('theme');
      if(!theme) {
        localStorage.setItem('theme', '0');
        theme = false;
      } else {
        if(theme === '1') commit('toggleTheme');
      }
    },

    toggleTheme({commit}) {
      commit('toggleTheme');
      localStorage.setItem('theme', this.state.darkTheme ? '1' : '0');
    }
  },
  modules: {
  }
})

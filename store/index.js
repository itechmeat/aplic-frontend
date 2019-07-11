import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    scrollPosition: 0,
  },

  mutations: {
    setScrollPosition(state, position) {
      state.scrollPosition = position;
    },
  },
});

export default store

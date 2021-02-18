import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    userForm: [],
  },

  getters: {
    USER: state => state.userForm
  },
  mutations: {
    ADD_USER: (state, data) => {
      state.userForm = []
      state.userForm.push(data)
    }
  },
  actions: {
    SAVE_USER: (context, payload) => {
      context.commit('ADD_USER', payload)
    }
  }
})
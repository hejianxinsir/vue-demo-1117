import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    n: 100
  },
  modules: {
    moduleA: {
      namespaced: true,
      state: {
        an: 999
      },
      mutations: {
        inc(state){
          state.an += 1
        }
      }
    },
    moduleB: {
      namespaced: true,
      state: {
        bn: 888
      },
      mutations: {
        inc(state){
          state.bn += 1
        }
      }
    }
  },
  mutations: {
    inc(state){
      state.n += 1
    },
    dec(state){
      state.n -= 1
    }
  },
  actions: {
    incAction(context){
      context.commit('inc')
    }
  },
  getters: {
    getN(state){
      return state.n
    }
  }
})
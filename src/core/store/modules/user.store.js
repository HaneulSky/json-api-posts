import axios from 'axios'
import { BASE_URL } from '@/shared/constants/paths.js'

const user = {
  namespaced: true,
  state: () => ({
    users: [],
    user: {}
  }),

  mutations: {
    setUsers: (state, payload) => {
      state.users = payload
    },
    setUserById: (state, payload) => {
      state.user = payload
    }
  },

  getters: {
    USERS: (state) => {
      return state.users
    },
    USER: (state) => {
      return state.user
    }
  },

  actions: {
    fetchUsersList: async (context, payload) => {
      const { data } = await axios.get(BASE_URL + '/users')

      context.commit('setUsers', data)
    },

    fetchUserById: async (context, userId) => {
      const { data } = await axios.get(BASE_URL + '/users/' + userId)

      console.log('user', userId)

      context.commit('setUserById', data)
    }
  }
}

export default user

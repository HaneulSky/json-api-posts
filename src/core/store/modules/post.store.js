import axios from 'axios'
import { BASE_URL } from '@/shared/constants/paths.js'

const post = {
  namespaced: true,
  state: () => ({
    allPosts: [],
    postCard: [],
    isLoading: true
  }),

  mutations: {
    setAllPosts: (state, payload) => {
      state.allPosts = payload
      state.isLoading = false
    },
    setPostById: (state, payload) => {
      state.postCard = payload
      state.isLoading = false
    }
  },

  getters: {
    POSTS: (state) => {
      return state.allPosts
    },
    POST: (state) => {
      return state.postCard
    },
    IS_LOADING: (state) => {
      return state.isLoading
    }
  },

  actions: {
    fetchPostsList: async (context, payload) => {
      const { data } = await axios.get(BASE_URL + '/posts')

      context.commit('setAllPosts', data)
    },

    fetchPostsByUser: async (context, userId) => {
      const { data } = await axios.get(BASE_URL + '/posts', {
        params: {
          userId: userId._value
        }
      })

      context.commit('setAllPosts', data)
    },

    fetchPostInfo: async (context, postId) => {
      const { data } = await axios.get(BASE_URL + `/posts/${postId}`)

      context.commit('setPostById', data)
    }
  }
}

export default post

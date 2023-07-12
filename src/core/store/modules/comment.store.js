import axios from 'axios'
import { BASE_URL } from '@/shared/constants/paths.js'

const comment = {
  namespaced: true,
  state: () => ({
    comments: []
  }),

  mutations: {
    setComments: (state, payload) => {
      state.comments = payload
    }
  },

  getters: {
    COMMENTS: (state) => {
      return state.comments
    }
  },

  actions: {
    fetchCommentsList: async (context, postId) => {
      const { data } = await axios.get(BASE_URL + '/comments', {
        params: {
          postId: postId
        }
      })

      context.commit('setComments', data)
    },

    postComment: async (context, payload) => {
      const { data } = await axios.post(BASE_URL + '/comments', {
        ...payload
      })
      console.log('data')
      return data
    }
  }
}

export default comment

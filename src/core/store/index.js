import { createStore } from 'vuex'

import comment from './modules/comment.store'
import post from './modules/post.store'
import user from './modules/user.store'

const store = createStore({
  modules: {
    comment,
    post,
    user
  }
})

export default store

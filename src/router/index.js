import { createRouter } from 'vue-router'
import PostsList from '../components/postsList.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: PostsList
    },
    {
      path: '/post/:id',
      name: 'PostPage',
      component: () => import('../components/pages/postPage.vue'),
      children: [
        {
          path: '/comments',
          name: 'CommentsList',
          component: () => import('../components/commentsList.vue')
        }
      ]
    }
  ]
})

export default router

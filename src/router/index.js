import { createRouter, createWebHashHistory} from 'vue-router'
import MainPageView from '../views/MainPageView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_APP_BASE_PATH),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPageView
    },
    {
      path: '/quiz',
      name: 'quiz',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/QuizView.vue')
    },
    {
      path: '/submit',
      name: 'submit',
      component: () => import('../views/SubmitView.vue')
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('../views/DownloadView.vue')
    },
  ]
})

export default router

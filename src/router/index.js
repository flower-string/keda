import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect: '/login'
  },
  {
    path: '/student/:abc',
    component: () => import('../views/StudentView.vue'),
    children:[
      {
        path:'',
        redirect:'me'
      },
      {
        path: 'me',
        name: 'me',
        component: () => import('../views/MeView.vue')
      },
      {
        path: 'class',
        name: 'class',
        component: () => import('../views/ClassView.vue')
      },
      {
        path: 'collection',
        name: 'collection',
        component: () => import('../views/CollectionView.vue')
      },
      {
        path: 'feedback',
        name: 'feedback',
        component: () => import('../views/FeedBackView.vue')
      },
      {
        path: 'house',
        name: 'house',
        component: () => import('../views/HouseView.vue')
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('../views/MessageView.vue')
      },
      {
        path: 'history',
        name: 'history',
        component: () => import('../views/HistoryView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/read',
    name: 'read',
    component: () => import('../views/ReadView')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

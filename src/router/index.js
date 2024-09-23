import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ProductPage from '@/views/ProductPage.vue'
import SignUpPage from '@/views/SignUpPage.vue'
import LoginPage from '@/views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
   {
    path: '/signup',
    name: 'signup',
    component: SignUpPage
   },
   {
    path: '/login',
    name: 'login',
    component: LoginPage
   },

    {
      path :"/product/:id",
      name : "ProductPage",
      component : ProductPage,
    },
     // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
  

import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/user/Register.vue'
import Login from '../views/user/Login.vue'
import Profile from '../views/user/Profile.vue'
import Gifts from '../views/Gifts.vue'
import ConfirmarPresenca from '../views/ConfirmarPresenca.vue'


const routes: RouteRecordRaw[] = [
  { path: '/',
     name: 'Home',
    component: Home 
  },
  {
    path: '/confirmar/:id',
    name: 'ConfirmarPresenca',
    component: ConfirmarPresenca,
    props: true,
  },
  { 
    path: '/Gifts', 
    name: 'Gifts', 
    component: Gifts 
  },
  { path: '/Register', 
    name: 'Register', 
    component: Register 
  },
  { path: '/Login', 
    name: 'Login', 
    component: Login 
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: { requiresAuth: true }
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('user') // ou use Vuex, Pinia, etc.

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' })
  } else {
    next()
  }
})


export default router

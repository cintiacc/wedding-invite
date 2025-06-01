import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Invitation from '../views/Invitation.vue'
import Gifts from '../views/Gifts.vue'
import Register from '../views/user/Register.vue'
import Login from '../views/user/Login.vue'
import AddGift from '../views/user/AddGift.vue'


const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home },
  { path: '/invitation', name: 'Invitation', component: Invitation },
  { path: '/gifts', name: 'Gifts', component: Gifts },
  { path: '/Register', name: 'Register', component: Register },
  { path: '/Login', name: 'Login', component: Login },
  {
    path: '/addgift',
    name: 'AddGift',
    component: AddGift,
    meta: { requiresAuth: true }
  }

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

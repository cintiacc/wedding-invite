import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Invitation from '../views/Invitation.vue'


const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home },
  { path: '/invitation', name: 'Invitation', component: Invitation },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

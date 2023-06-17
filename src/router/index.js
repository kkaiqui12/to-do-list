import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Tarefas',
    component: () => import('../views/Tarefas.vue')
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../views/Sobre.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

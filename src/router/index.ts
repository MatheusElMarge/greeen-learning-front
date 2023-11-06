import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import SalasView from '../views/SalasView.vue'
import LoginView from '../views/LoginView.vue'
import AlunosView from '../views/AlunosView.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { requiresAuth: true } // Esta meta propriedade indica que a rota requer autenticação
  },
  {
    path: '/salas-view',
    name: 'salas=view',
    component: SalasView,
  },
  {
    path: '/alunos-view',
    name: 'alunos=view',
    component: AlunosView,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

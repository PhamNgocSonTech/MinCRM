import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'dashboard', component: () => import('@/views/DashboardView.vue')},
      { path: 'income', name: 'income', component: () => import('@/views/IncomeView.vue')},
      { path: 'expense', name: 'expense', component: () => import('@/views/ExpenseView.vue')},
      { path: 'report', name: 'report', component: () => import('@/views/ReportView.vue')},
      { path: 'settings', name: 'settings', component: () => import('@/views/SettingsView.vue')},
    ]
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      { path: 'login', name: 'login', component: () => import('@/views/auth/LoginView.vue')},
      { path: 'register', name: 'register', component: () => import('@/views/auth/RegisterView.vue')},
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/criarconta',
    name: 'criarconta',
    component: () => import(/* webpackChunkName: "about" */ '../views/CriarContaView.vue')
  },
  {
    path: '/esquecisenha',
    name: 'esquecisenha',
    component: () => import(/* webpackChunkName: "about" */ '../views/EsqueciSenhaView.vue')
  },
  {
    path: '/senharecuperada',
    name: 'senharecuperada',
    component: () => import(/* webpackChunkName: "about" */ '../views/SenhaRecuperadaView.vue')
  },
  {
    path: '/minhapagina',
    name: 'minhapagina',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

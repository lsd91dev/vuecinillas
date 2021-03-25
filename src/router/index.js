import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import ( '../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/recipe/:id',
    name: 'Recipe',
    component: () => import ('../views/Recipe.vue'),
    beforeEnter: (to, from, next) => {
      if( idIsValid(to.params.id)){ next({path: 'PageNotFound'}) }
      next();
    },
  },
  {
    path:'*',
    name:'PageNotFound',
    component: () => import ('../views/PageNotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const idIsValid = (id) => { return isNaN(id) }

export default router

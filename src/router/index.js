import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Vuefails from '../views/Vuefails.vue'
import Form from '../views/Form.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home

  },
  {
    path: '/title',
    name: 'Prohor',
    component: Vuefails
    
  },
  {
    path: '/form',
    name: 'Forms',
    component: Form
    
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'history',
  routes
})

export default router

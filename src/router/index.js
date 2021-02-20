import { createRouter,createWebHashHistory  } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import Projects from '../views/Projects'
import Offers from '../views/Offers'
import ItemView from '../views/ItemView'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/offers',
    name: 'Offers',
    component: Offers
  },
  {
    path: '/itemView/:id',
    name: 'itemView',
    component: ItemView
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router

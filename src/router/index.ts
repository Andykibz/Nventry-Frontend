import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import PersonEntry from '../views/PersonEntry.vue'
import ActivityEntry from '../views/ActivityEntry.vue'
import ComponentModelEntry from '../views/ComponentModelEntry.vue'
import ComponentEntry from '../views/ComponentEntry.vue'
import BorrowEntry from '../views/BorrowEntry.vue'
import ComponentList from '@/views/ComponentList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'PersonEntry',
    component: PersonEntry
  },
  {
    path: '/activity',
    name: 'ActivityEntry',
    component: ActivityEntry
  },
  {
    path: '/component-model',
    name: 'ComponentModelEntry',
    component: ComponentModelEntry
  },
  {
    path: '/component',
    name: 'ComponentEntry',
    component: ComponentEntry
  },
  {
    path: '/borrow',
    name: 'BorrowEntry',
    component: BorrowEntry
  },
  {
    path: '/components',
    name: 'ComponentList',
    component: ComponentList
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/MaintenancePage',
    name: 'MaintenancePage',
    component: loadPage('MaintenancePage'),
    beforeEnter: authGuard
  },
  {
    path: '/yourgaragepage',
    name: 'YourGaragePage',
    component: loadPage('YourGaragePage'),
    beforeEnter: authGuard
  },
  {
    path: '/YourCarPage/:id',
    name: 'YourCarPage',
    component: loadPage('YourCarPage'),
    beforeEnter: authGuard
  },
  {
    path: '/ActiveVehiclePage',
    name: 'ActiveVehiclePage',
    component: loadPage('ActiveVehiclePage'),
    beforeEnter: authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router

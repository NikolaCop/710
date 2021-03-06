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
    path: '/maintenancehistorypage/:id',
    name: 'MaintenanceHistoryPage',
    component: loadPage('MaintenanceHistoryPage'),
    beforeEnter: authGuard
  },
  {
    path: '/maintenancedetailspage/:id',
    name: 'MaintenanceDetailsPage',
    component: loadPage('MaintenanceDetailsPage'),
    beforeEnter: authGuard
  },
  {
    path: '/yourgaragepage',
    name: 'YourGaragePage',
    component: loadPage('YourGaragePage'),
    beforeEnter: authGuard
  },
  {
    path: '/yourvehiclepage/:id',
    name: 'YourVehiclePage',
    component: loadPage('YourVehiclePage'),
    beforeEnter: authGuard
  },
  {
    path: '/activevehiclepage/:id',
    name: 'ActiveVehiclePage',
    component: loadPage('ActiveVehiclePage'),
    beforeEnter: authGuard
  },
  {
    path: '/marketplacepage',
    name: 'MarketplacePage',
    component: loadPage('MarketplacePage'),
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

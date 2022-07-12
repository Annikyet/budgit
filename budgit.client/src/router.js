import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: loadPage('OverviewPage')
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: loadPage('TransactionsPage'),
    beforeEnter: authGuard // this is important to keep the request from firing before the auth token is issued.
    // if not need to be logged-in use authSettled
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

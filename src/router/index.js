import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../pages/Login/Login.vue';
import Msite from '../pages/MSite/MSite.vue';
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue';
import Search from '../pages/Search/Search.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/msite',
    component: Msite
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/msite'
  },
]

const router = new VueRouter({
  routes
})

export default router

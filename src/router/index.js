import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { UpdateTitle } from './hooks/index';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {title: "Home"}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/components/Blog/Blog.vue') 
  },
  {
    path: '/viewBlog',
    name: 'Blog',
    component: () => import('@/components/Blog/ViewBlog.vue') 
  },
   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || 'http://localhost:8080',
  routes
})

router.beforeEach((to, from, next) => {
  UpdateTitle(to);
  next();
});

export default router

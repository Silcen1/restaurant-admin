import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Main from './views/Main.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)
//整个项目的路由词典:访问路径 <=>视图组件
export default new Router({
  routes: [
    {path:'/',redirect:'/login' },
    {path:'/login',component:Login},
    {path:'/main',component:Main},
    {path:'*',component:NotFound},
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

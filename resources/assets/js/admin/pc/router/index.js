import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@adminPc/views/layout/Layout'

/* Router Modules */
import userRouter from './modules/user'
import noticeRouter from './modules/notice'
// import permissionRouter from './modules/permission'
import roleRouter from './modules/role'
import shopRouter from './modules/shop'
import inventoryRouter from './modules/inventory'
import serviceRouter from './modules/service'
/*import managerRouter from './modules/manager'
import packageRouter from './modules/package'
import infoDianxinRouter from './modules/infoDianxin'
import infoStatisticsRouter from './modules/infoStatistics'
import goodsRouter from './modules/goods'

import inventoryRouter from './modules/inventory'*/
/*import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'*/

/** note: Submenu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
**/
export const constantRouterMap = [
  
  {
    name:'login',
    path: '/login',
    component: resolve => void(require(['@adminPc/views/login/index'], resolve))
    // hidden: true,
  },
  {
    name:'chormeDownLoad',
    path: '/chormeDownLoad',
    component: resolve => void(require(['@adminPc/views/chormeDownLoad/index'], resolve))
    // hidden: true,
  },
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    meta:{ affix:true },
    children: [
      {
        path: 'dashboard',
        // component: () => import('@adminPc/views/dashboard/index'),
        component: resolve => void(require(['@adminPc/views/dashboard/index'], resolve)),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  },
  {
    hidden: true,
    path: '/user/passwordReset',
    component: resolve => void(require(['@adminPc/views/user/passwordReset'], resolve)),
    name: 'userAdd',
    meta: { title: 'passwordReset' }
  },

  // infoSelfRouter,
]

/*export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})*/

export const asyncRouterMap = [
  //infoStatisticsRouter,
  shopRouter,
  noticeRouter,
  userRouter,
  // inventoryRouter,
  // permissionRouter,
  // roleRouter,
  // managerRouter,
  //packageRouter,
  //goodsRouter,
  // serviceRouter,
  

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
  
}

export default router


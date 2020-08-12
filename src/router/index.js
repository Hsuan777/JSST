import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  /* 前後台分開 */
  {
    path: '/',
    component: () => import('../views/layout/Layout.vue'), // APP.vue的 router-view顯示 Layout.vue的內容
    children: [
      // 當回到首頁時，Home.vue的內容也會經由 router-view顯示
      {
        path: '/',
        component: () => import('../views/layout/Home.vue')
      },
      {
        path: 'stage45',
        component: () => import('../views/layout/Stage45.vue')
      }
    ]
  }
  // {
  //   path: '/admin',
  //   component: () => import('../views/dashboard/Dashboard.vue'), // APP.vue的 router-view顯示 Dashboard.vue的內容
  //   children: [
  //     {
  //       path: '/',
  //       component: () => import('../views/dashboard/admin.vue') // 管理總覽、頁面導航
  //     },
  //   ]
  // }
]

const router = new VueRouter({
  routes
})

export default router

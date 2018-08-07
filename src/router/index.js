import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/example',
      name: '示例',
      component: () => import('@/pages/example')
    }
  ]
})
export default router

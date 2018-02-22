/* jshint esversion: 6 */
/* jshint -W033 */
import Vue from 'vue'
import Router from 'vue-router'
// import page from '@/components/page'
// import footer from '@/components/footer'
// import Hello from '@/components/Hello'
// import TreeListTest from '@/components/TreeListTest'
// 异步写法如下
const ComponentA = resolve => require(['../components/ComponentA.vue'], resolve)
const ComponentB = resolve => require(['../components/ComponentB.vue'], resolve)
const ComponentC = resolve => require(['../components/ComponentC.vue'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    {
      path: '/A',
      name: 'A',
      component: ComponentA
    },
    {
      path: '/B',
      name: 'B',
      component: ComponentB
    },
    {
      path: '/C',
      name: 'C',
      component: ComponentC
    }
  ]
})

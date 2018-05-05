import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/home'
import indexPage1 from '../pages/home/indexPage1'
import indexPage2 from '../pages/home/indexPage2'
import indexPage3 from '../pages/home/indexPage3'
import indexPage4 from '../pages/home/indexPage4'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/home/indexPage1',
          component:indexPage1
        },
        {
          path:'/home/indexPage2',
          component:indexPage2
        },
        {
          path:'/home/indexPage3',
          component:indexPage3
        },
        {
          path:'/home/indexPage4',
          component:indexPage4
        }
      ]
    },
    {
      path:'*',
      redirect:'/home/indexPage1'
    }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})

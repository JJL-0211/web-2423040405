import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/element/UserView.vue'
import QuestionView from '../views/element/QuestionView.vue'
import TestButton from '../views/element/TestButton.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect:"/user", // 默认打开就跳转到用户管理页面
    children:[
      {
        path:"user",
        component:UserView
      },
      {
        path:"question",
        component:QuestionView
      }
    ]
  },
  {
    path:"/testbtn",
    component:TestButton
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
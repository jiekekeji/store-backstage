/**
 * Created by Administrator on 2017/1/20.
 */

/**
 * 路由配置
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


import Main from '../components/Main.vue';
import FirstPage from '../components/FirstPage.vue';
import Login from '../components/Login.vue';
// 用户相关
import UserList from '../components/UserList.vue';
import UserFind from '../components/UserFind.vue';
import UserFunSet from '../components/UserFunSet.vue';


Vue.use(VueRouter);

//路由映射配置
const routes = [
  {
    path: '/',
    redirect: '/main',
    component: Main,
  },
  {
    name: 'Main',
    path: '/main',
    component: Main,
    children: [
      {
        name: 'FirstPage',
        path: 'firstpage',
        component: FirstPage,
      },
      {
        name: 'UserList',
        path: 'userlist',
        component: UserList,
      },
      {
        name: 'UserFind',
        path: 'userfind',
        component: UserFind,
      },
      {
        name: 'UserList',
        path: 'userlist',
        component: UserList,
      },
      {
        name: 'UserFunSet',
        path: 'userfunset',
        component: UserFunSet,
      },
    ]
  },
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
];


//创建实例
const router = new VueRouter({
  // mode: 'history',
  history: true,
  routes,
});

export default router;

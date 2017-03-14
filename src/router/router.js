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
import UserAdd from '../components/UserAdd.vue';

//商品相关
import PdFunSet from '../components/PdFunSet.vue';
import PdAdd from '../components/PdAdd.vue';
import PdClz from '../components/PdClz.vue';
import PdList from '../components/PdList.vue';
import PdHot from '../components/PdHot.vue';
import PdLunBo from '../components/PdLunBo.vue';


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
        name: 'UserFunSet',
        path: 'userfunset',
        component: UserFunSet,
      },
      {
        name: 'PdLunBo',
        path: 'pdlunbo',
        component: PdLunBo,
      },
      {
        name: 'PdHot',
        path: 'pdhot',
        component: PdHot,
      },
      {
        name: 'PdList',
        path: 'pdlist',
        component: PdList,
      },
      {
        name: 'PdClz',
        path: 'pdclz',
        component: PdClz,
      },
      {
        name: 'PdAdd',
        path: 'pdadd',
        component: PdAdd,
      },
      {
        name: 'PdFunSet',
        path: 'pdfunset',
        component: PdFunSet,
      },
      {
        name: 'UserAdd',
        path: 'useradd',
        component: UserAdd,
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

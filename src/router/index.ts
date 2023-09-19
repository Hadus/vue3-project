import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import index from '@v/index.vue';
// 子路由
import routes_home from './home';
import routes_test from './test';

// 主路由
const indexRoutes = {
  path: '/',
  name: 'index',
  component: index,
  children: [
    {
      path: '/home',
      name: 'home',
      meta: {
        title: 'home',
        permiss: '1',
      },
      component: () => import(/* webpackChunkName: "home" */ '@v/home/'),
    },
  ],
};

// 子路由
indexRoutes.children = [
  ...routes_home,
  ...routes_test
];

console.log(indexRoutes);
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  indexRoutes,
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
    },
    component: () => import(/* webpackChunkName: "login" */ '@v/login/'),
  },
  {
    path: '/403',
    name: '403',
    meta: {
      title: '没有权限',
    },
    component: () => import(/* webpackChunkName: "403" */ '@v/errorPage/403.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '页面不存在',
    },
    component: () => import(/* webpackChunkName: "403" */ '@v/errorPage/404.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;

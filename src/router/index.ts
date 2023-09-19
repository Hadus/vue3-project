import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import Index from '../views/Index.vue';

// 主路由
const indexRoutes = {
  path: '/',
  name: 'Index',
  component: Index,
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
// const routerContext = require('./index.ts');
// console.log(routerContext)
// routerContext.keys().forEach((route) => {
//   console.log(route);
//   // 如果是根目录的 index.js 、不处理
//   if (route.startsWith('./index')) {
//     return;
//   }
//   const routerModule = routerContext(route);

//   // indexRoutes.children = [
//   //   ...indexRoutes.children,
//   //   ...(routerModule.default || routerModule)
//   // ];
// });

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

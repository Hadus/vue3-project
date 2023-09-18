import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import Index from '../views/Index.vue';
// 导入子路由

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    name: 'Home',
    component: Index,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          permiss: '1',
        },
        component: () => import(/* webpackChunkName: "import" */ '../views/home/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
  },
  {
    path: '/403',
    name: '403',
    meta: {
      title: '没有权限',
    },
    component: () => import(/* webpackChunkName: "403" */ '../views/403.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '页面不存在',
    },
    component: () => import(/* webpackChunkName: "403" */ '../views/404.vue'),
  },
];

// 导入子路由
// routes[1].children = routes[1].children?.concat(routes_tradePlatform)
//   .concat(routes_shopManage);


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;

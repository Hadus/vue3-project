import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '@/store/permiss';
import index from '@v/index.vue';
// 主路由
const indexRoutes = {
  path: '/',
  name: 'index',
  component: index,
  children: [],
};

// 子路由
const routeModules = import.meta.glob('./*/index.ts', {
  eager: true,
});
Object.values(routeModules).forEach(module => {
  const route = module.default;
  indexRoutes.children = indexRoutes.children.concat(route);
});

export const routes: RouteRecordRaw[] = [
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
  const role = localStorage.getItem('ms_username');
  const permiss = usePermissStore();
  if (!role && to.path !== '/login') {
    next('/login');
  } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
    // 如果没有权限，则进入403
    next('/403');
  } else {
    next();
  }
});

export default router;

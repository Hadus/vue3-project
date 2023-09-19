export default [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: 'home',
      permiss: '1',
    },
    component: () => import(/* webpackChunkName: "import" */ '@v/home/'),
  },
]
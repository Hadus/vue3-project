export default [
  {
    path: '/test',
    name: 'test',
    meta: {
      title: 'test',
      permiss: '2',
    },
    component: () => import(/* webpackChunkName: "import" */ '@v/test/'),
  },
]
export default [
  {
    path: '/test',
    name: 'test',
    meta: {
      title: 'test',
      permiss: '1',
    },
    component: () => import(/* webpackChunkName: "import" */ '@v/test/'),
  },
]
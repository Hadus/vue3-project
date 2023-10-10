import sidebarIcons from './sidebarIcons'
import { LINK_BAIDU } from '@/api/link';
const sidebarItems = [
  {
    icon: sidebarIcons.home.icon,
    iconActive: sidebarIcons.home.iconActive,
    index: '/home',
    title: '首页',
    permiss: '1',
  },
  {
    icon: sidebarIcons.trade.icon,
    iconActive: sidebarIcons.trade.iconActive,
    index: '1-sub',
    title: '交易',
    permiss: '1',
    subs: [
      {
        index: '1-sub-1',
        title: '订单管理',
        permiss: '1',
        subs: [
          {
            index: '/trade/sold',
            title: '已卖出的宝贝',
            permiss: '1',
          },
          {
            index: '',
            title: '退款管理',
            permiss: '1',
          },
          {
            index: '',
            title: '评价管理',
            permiss: '1',
          },
        ]
      },
      {
        index: '1-sub-2',
        title: '更多',
        permiss: '1',
      },
    ],
  },
  {
    icon: sidebarIcons.data.iconActive,
    index: '',
    title: '数据',
    permiss: '11',
    link: LINK_BAIDU
  },
];
export default sidebarItems;
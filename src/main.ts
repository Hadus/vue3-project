import { createApp } from 'vue';
import { createPinia } from 'pinia';
// element plus
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';
// 引入 css
import '@a/css/index.less'

import App from './App.vue';
import router from './router';
// 打印环境信息
// console.log(import.meta.env)

import { usePermissStore } from './store/permiss';

import * as dayjs from 'dayjs';
import 'dayjs/locale/zh-cn' // 导入本地化语言
dayjs.locale('zh-cn') // 使用本地化语言

const app = createApp(App);
app.use(createPinia());
app.use(router);
// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// 自定义权限指令
const permiss = usePermissStore();
app.directive('permiss', {
  mounted(el, binding) {
    if (!permiss.key.includes(String(binding.value))) {
      el['hidden'] = true;
    }
  },
});

app.mount('#app');

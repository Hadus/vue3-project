# vue3-project
> vue3 + vue-router + pina

# vite
- import.meta
  > import.meta.env: 打印环境信息
- import.meta.glob
  ```js
    const routeModules = import.meta.glob('./*/index.ts', {
      eager: true, // true 同步，默认异步
      as: 'row',
    });
  ```

# npm 包
- dayjs
  ```js
    import * as dayjs from 'dayjs';
    dayjs().format();
  ```

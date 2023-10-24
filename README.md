# vue3-project
> vue3 + vue-router + pina

# env
> dev: 开发使用
  - 使用mock数据
  - 更改 api 地址: .env.dev(注意：使用本地地址，联调请 npm run uat)
> uat: 联调使用
  - 更改 api 地址: .env.uat
> prod: 生产环境
  - 更改 api 地址: .env.prod

# vite
- import.meta
  > import.meta.env: 打印环境信息(在app中)
  > vite.config.js 打印不出
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

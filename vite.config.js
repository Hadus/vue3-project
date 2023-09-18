import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import requireTransform from 'vite-plugin-require-transform';
import path from 'path';
import legacy from '@vitejs/plugin-legacy'; // 处理打包module问题，可以file协议可以打开
import copyPlugin from 'rollup-plugin-copy'; // 打包中文件复制

export default defineConfig({
	base: './',
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@v": path.resolve(__dirname, "./src/views"),
			"@c": path.resolve(__dirname, "./src/components"),
			"~": path.resolve(__dirname, "./assets"),
		},
		extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue']
	},
	css: {
    preprocessorOptions: {
      less: {
        math: "always", // 括号内才使用数学计算
        globalVars: {
          // 全局变量
          mainColor: "red",
        },
				// 引入多个文件以；分割
				// additionalData: '@import "@/assets/styles/vars.less";',
      },
    },
  },
	plugins: [
		vue(),
		VueSetupExtend(),
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		}),
		requireTransform({
      fileRegex: /.js$|.vue$/
    }),
		legacy({ targets: ['defaults', 'not IE 11'] })
	],
	optimizeDeps: {
		include: ['schart.js']
	},
	server: {
		host: '0.0.0.0', // 配置host 才可以外网访问
		port: 80, // 访问80端口不需要加端口号
		open: true,
		proxy:{ // 代理

		}
	},
	build: {
		minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境移除console
				drop_debugger: true // 生产环境移除debugge
      },
    },
    emptyOutDir: false, // 将此配置项设为false即可
    rollupOptions: {
      plugins: [
        copyPlugin({
          targets: [{ src: './src/mock/current/img/*', dest: 'dist/src/mock/current/img' }],
        }),
      ],
    },
    outDir: 'dist',
    assetsDir: 'assets',
  },
});

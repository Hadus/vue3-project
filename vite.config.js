import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import legacy from '@vitejs/plugin-legacy'; // 处理打包module问题，可以file协议可以打开
import basicSsl from '@vitejs/plugin-basic-ssl'; // 自动生成https
import { viteMockServe } from 'vite-plugin-mock'; // mock

const resolve = (dir) => path.resolve(__dirname, dir);
export default defineConfig(({ command, mode }) => {
	return {
		base: './',
		// publicDir: resolve('static'), //静态资源文件夹, 会全部复制
		resolve: {
			alias: {
				"@": resolve("./src"),
				"@v": resolve("./src/views"),
				"@c": resolve("./src/components"),
				"@a": resolve("./src/assets"),
			},
			extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue']
		},
		css: {
			preprocessorOptions: {
				less: {
					math: "always", // 括号内才使用数学计算
					// 引入多个文件以；分割
					additionalData: '@import "@a/css/var.less";',
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
			createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        // 指定 symbolId 格式
				// 使用 name="[dir]-[name]"
        symbolId: 'iconsvg-[dir]-[name]',
      }),
			// basicSsl(), // https
			legacy({ targets: ['defaults', 'not IE 11'] }),
			viteMockServe({
				mockPath: "./src/mock/", // 指定mock目录
				localEnabled: command === 'start' // 开发时应用
			})
		],
		server: {
			host: '0.0.0.0', // 配置host 才可以外网访问
			port: 8080, // 访问80端口不需要加端口号
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
				plugins: [],
			},
			outDir: 'dist',
			assetsDir: 'assets',
		},
	}
});

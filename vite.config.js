import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import requireTransform from 'vite-plugin-require-transform';
import path from 'path';
const resolve = (dir) => path.resolve(__dirname, dir);
import legacy from '@vitejs/plugin-legacy'; // 处理打包module问题，可以file协议可以打开
import copyPlugin from 'rollup-plugin-copy'; // 打包中文件复制
// 打印环境变量
export default defineConfig(({ command, mode }) => {
	console.log(mode)
	return {
		base: './',
		// publicDir: resolve('static'), //静态资源文件夹, 会全部复制
		resolve: {
			alias: {
				"@": resolve("./src"),
				"@v": resolve("./src/views"),
				"@c": resolve("./src/components"),
				"~": resolve("./assets"),
			},
			extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue']
		},
		css: {
			preprocessorOptions: {
				less: {
					math: "always", // 括号内才使用数学计算
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
				plugins: [
					copyPlugin({ // 打包自动复制文件
						// targets: [{ src: './src/mock/current/img/*', dest: 'dist/src/mock/current/img' }],
					}),
				],
			},
			outDir: 'dist',
			assetsDir: 'assets',
		},
	}
});

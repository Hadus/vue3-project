<template>
	<div class="login-wrap">
		<div class="left">
			<a class="left" href="https://work.taobao.com/download.html?spm=a21dvs.24173238.0.0.26381544TE71hH" target="_blank"
				rel="noopener noreferrer">
				<div class="login-logo">
					<img alt="" src="https://img.alicdn.com/imgextra/i2/O1CN0109BlPd28fGzhhVrYk_!!6000000007959-2-tps-369-126.png">
				</div>
			</a>
		</div>
		<div class="right">
			<div class="login-head">
				<a href="https://work.taobao.com" target="_blank" rel="noopener noreferrer">关于千牛</a>
			</div>
			<div class="ms-login">
				<div class="ms-title">
					欢迎登陆
					<span>做生意上千牛</span>
				</div>
				<div class="content block-wrapper">
					<div class="qrcode-wrapper">
						<div class="pop">
							扫码登录更便捷<span class="arrow"></span>
						</div>
						<i class="loginFonts loginFonts-qrcode"></i>
					</div>
					<el-tabs v-model="activeName" class="login-tabs">
						<el-tab-pane label="密码登录" name="first">
							<el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
								<el-form-item prop="username">
									<el-input v-model="param.username" placeholder="账号名/邮箱/手机号">
									</el-input>
								</el-form-item>
								<el-form-item prop="password">
									<el-input type="password" placeholder="请输入登录密码" v-model="param.password"
										@keyup.enter="submitForm(login)">
									</el-input>
								</el-form-item>
								<div class="operate">
									<a href="https://passport.taobao.com/ac/password_find.htm?from_site=0&amp;lang=zh_CN&amp;appName=taobao&amp;appEntrance=qianniu_pc_web&amp;bizcode=tb_qianniu"
										target="_blank" class="forgot-password-a-link">忘记密码</a>
									<a href="https://passport.taobao.com/ac/nick_find.htm?from_site=0&amp;lang=zh_CN&amp;appName=taobao&amp;appEntrance=qianniu_pc_web&amp;bizcode=tb_qianniu"
										target="_blank" class="forgot-username-a-link">忘记账号</a>
								</div>
								<div class="login-btn">
									<el-button type="primary" @click="submitForm(login)" class="login-btn">登录</el-button>
								</div>
							</el-form>
							<div class="note">
								<a href="https://ishop.taobao.com/openshop/tb_open_shop_landing.htm" target="_blank">0元开店</a>
								<a href="https://pages.tmall.com/wow/seller/act/2019seller" target="_blank">入驻天猫</a>
							</div>
						</el-tab-pane>
						<el-tab-pane label="短信登录" name="second">
							<el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
								<el-form-item prop="username">
									<el-input placeholder="账号名/邮箱/手机号">
									</el-input>
								</el-form-item>
								<el-form-item prop="password">
									<el-input type="password" placeholder="请输入登录密码">
									</el-input>
								</el-form-item>
								<div class="operate">
									<a href="https://passport.taobao.com/ac/password_find.htm?from_site=0&amp;lang=zh_CN&amp;appName=taobao&amp;appEntrance=qianniu_pc_web&amp;bizcode=tb_qianniu"
										target="_blank" class="forgot-password-a-link">忘记密码</a>
									<a href="https://passport.taobao.com/ac/nick_find.htm?from_site=0&amp;lang=zh_CN&amp;appName=taobao&amp;appEntrance=qianniu_pc_web&amp;bizcode=tb_qianniu"
										target="_blank" class="forgot-username-a-link">忘记账号</a>
								</div>
								<div class="login-btn">
									<el-button type="primary" @click="submitForm(login)" class="login-btn">登录</el-button>
								</div>
							</el-form>
							<div class="note">
								<a href="https://ishop.taobao.com/openshop/tb_open_shop_landing.htm" target="_blank">0元开店</a>
								<a href="https://pages.tmall.com/wow/seller/act/2019seller" target="_blank">入驻天猫</a>
							</div>
						</el-tab-pane>
					</el-tabs>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { usePermissStore } from '../store/permiss';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';
const activeName = 'first';

interface LoginInfo {
	username: string;
	password: string;
}

const router = useRouter();
const param = reactive<LoginInfo>({
	username: '',
	password: ''
});

const rules: FormRules = {
	username: [
		{
			required: true,
			message: '请输入用户名',
			trigger: 'blur'
		}
	],
	password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
};
const permiss = usePermissStore();
const login = ref<FormInstance>();
const submitForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.validate((valid: boolean) => {
		if (valid) {
			ElMessage.success('登录成功');
			localStorage.setItem('ms_username', param.username);
			const keys = permiss.defaultList[param.username == 'admin' ? 'admin' : 'user'];
			permiss.handleSet(keys);
			localStorage.setItem('ms_keys', JSON.stringify(keys));
			router.push('/');
		} else {
			ElMessage.error('登录成功');
			return false;
		}
	});
};
</script>

<style scoped>
.login-wrap {
	position: relative;
	width: 100%;
	height: 100%;
	background-image: url(../assets/img/login-bg.jpg);
	background-size: 100%;
	display: flex;
}

.left {
	flex: 45%;
	height: 100%;
	background: url(https://img.alicdn.com/imgextra/i4/O1CN01bsN2kl202KS1fnXy1_!!6000000006791-2-tps-1240-1800.png) 0 0 no-repeat;
	background-size: cover;
}

.login-logo {
	position: absolute;
	top: 35px;
	left: 42px;
}

.login-logo img {
	height: 42px;
}

.right {
	flex: 55%;
	height: 100%;
	background-color: #fff;
}

.login-head {
	padding: 32px 76px 76px 0;
	text-align: right;
	position: relative;
	z-index: 1001;
}

.login-head>a {
	margin-left: 64px;
	width: 64px;
	font-family: PingFangSC-Regular;
	font-size: 16px;
	color: #111;
}

.ms-login {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.ms-title {
	width: 460px;
	line-height: 50px;
	font-size: 30px;
	color: #111;
	font-family: PingFangSC-Regular;
	margin: 20px 12px;
	text-align: left;
}

.ms-title>span {
	font-size: 20px;
	color: #666;
}

.ms-login .content {
	padding: 50px 50px 20px 50px;
	width: 460px;
	height: 580px;
	overflow: hidden;
	box-shadow: 0 0 10px 0 hsla(0, 0%, 85.5%, .57);
	position: relative;
	min-height: 400px;
}

.ms-login .qrcode-wrapper {
	width: 180px;
	height: 60px;
	position: absolute;
	right: 22px;
	top: 30px;
	padding: 7px;
}

.ms-login .qrcode-wrapper .pop {
	position: relative;
	display: block;
	border-radius: 6px;
	background-color: rgba(61, 127, 255, .1);
	border: none;
	width: 118px;
	height: 30px;
	line-height: 30px;
	padding: 0;
	padding-left: 10px;
	font-size: 14px;
	color: rgba(61, 127, 255, 1);
	cursor: pointer;
}

.ms-login .qrcode-wrapper .pop .arrow {
	width: 0;
	height: 0;
	position: absolute;
	right: -12px;
	top: 8px;
	border-style: solid;
	border: 6px solid rgba(61, 127, 255, .1);
	border-bottom-color: transparent;
	border-top-color: transparent;
	border-right-color: transparent;
}

.ms-login .qrcode-wrapper .loginFonts-qrcode {
	width: 60px;
	height: 66px;
	color: #111;
	font-size: 60px;
	position: absolute;
	top: 2px;
	right: -2px;
	z-index: 9;
	cursor: pointer;
}

.content .login-btn {
	text-align: center;
}

.login-btn button {
	width: 100%;
	height: 36px;
	margin-bottom: 10px;
}

.login-btn button {
	background: #3d7fff;
	border-radius: 30px;
	border: none;
	margin-top: 14px;
	height: 60px;
}

.operate {
	text-align-last: left;
	margin-bottom: 30px;
}

.operate>a {
	color: #666;
	margin-left: 14px;
}

.note {
	text-align: center;
	margin: 30px 0;
}

.note a {
	color: #3d7fff;
	font-family: PingFangSC-Regular;
	font-size: 20px;
}

.note a+a {
	margin-left: 15px;
}
</style>
<style>
.login-tabs>.el-tabs__header {
	height: 50px;
}

.login-tabs .el-tabs__item {
	font-family: PingFangSC-Regular;
	font-size: 20px;
	color: #666;
	padding: 0 6px;
}

.login-tabs .el-tabs__item.is-active {
	color: #111;
}

.login-tabs .el-tabs__active-bar {
	width: 62px;
}

.login-tabs .el-form-item {
	margin-top: 36px;
}

.login-tabs .el-form-item+.el-form-item {
	margin-bottom: 6px;
}

.login-tabs .el-input__wrapper {
	padding-left: 12px;
	background: #f7f8fa;
	border-radius: 9px;
	border: none;
	height: 60px;
}
</style>
<template>
	<v-header />
	<div class="main-bot">
		<v-sidebar />
		<div class="main-content" :class="sidebar.hasSub ? 'has-sub' : ''">
			<router-view v-slot="{ Component }">
				<transition name="move" mode="out-in">
					<keep-alive>
						<component :is="Component"></component>
					</keep-alive>
				</transition>
			</router-view>
		</div>
	</div>
</template>
<script setup lang="ts" name="index">
import { useSidebarStore } from '../store/sidebar';
import vHeader from '@c/header/';
import vSidebar from '@c/sidebar/';

const sidebar = useSidebarStore();
</script>
<style lang="less" scoped>
.main-bot {
	flex: 1;
	display: flex;
	height: 100%;
}

.main-content {
	flex: 1;
	height: 100%;
	background-color: peru;
}
</style>
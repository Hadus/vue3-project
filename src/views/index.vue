<template>
	<v-header />
	<v-sidebar />
	<div class="content-box">
		<div class="content" :class="sidebar.hasSub ? 'has-sub' : ''">
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
<script setup lang="ts">
import { useSidebarStore } from '../store/sidebar';
import vHeader from '@v/header/';
import vSidebar from '@v/sidebar/';

const sidebar = useSidebarStore();
</script>
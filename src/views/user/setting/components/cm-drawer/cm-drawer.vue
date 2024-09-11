<template>
  <a-drawer
    :title="props.title"
    :width="props.width"
    :visible="visible"
    :closable="true"
    :mask-closable="true"
    unmount-on-close
    :esc-to-close="false"
    @cancel="handleCancel"
    @ok="handleOk"
  >
    <template #title>
      <div>{{ props.title }}</div>
    </template>
    <template #footer>
      <!-- calcel button -->
      <a-button @click="handleCancel">{{ props.cancelText }}</a-button>
      <!-- more buttons -->
      <template
        v-if="props.footerMoreBtns?.length && props.footerMoreBtns.length > 0"
      >
        <a-button
          v-for="(btn, index) in props.footerMoreBtns"
          :key="index"
          :type="btn.type"
          :status="btn.status"
          :loading="drawerOkLoading"
          @click="btn.onClick && btn.onClick(okCB)"
          >{{ btn.text }}</a-button
        >
      </template>
      <!-- ok button -->
      <a-button
        v-if="['add', 'edit'].includes(props.drawerType)"
        type="primary"
        :loading="drawerOkLoading"
        @click="handleOk"
        >{{ props.okText }}</a-button
      >
    </template>

    <slot></slot>
  </a-drawer>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue';
  import { DrawerPropsType } from './type';

  const emit = defineEmits(['update:visible', 'handleOk']);
  const props = withDefaults(defineProps<DrawerPropsType>(), {
    visible: false,
    width: 500,
    title: 'Drawer Title',
    drawerType: 'add',
    okText: '确定',
    cancelText: '取消',
  });

  const visible = computed(() => props.visible);
  const drawerOkLoading = ref(false);

  // 确定之后的回调函数
  const okCB = (isOk?: boolean) => {
    drawerOkLoading.value = false;
    console.log('---', isOk);
    if (isOk) {
      emit('update:visible', false);
    }
  };

  const handleOk = async () => {
    drawerOkLoading.value = true;
    emit('handleOk', okCB);
  };

  const handleCancel = () => {
    emit('update:visible', false);
  };
</script>

<style scoped lang="less"></style>

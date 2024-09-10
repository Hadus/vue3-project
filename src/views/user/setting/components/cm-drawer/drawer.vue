<template>
  <cmDrawer
    title="修改邮箱"
    :drawer-type="props.drawerType"
    v-bind="$attrs"
    ok-text="确认"
    cancel-text="取消"
    :footer-more-btns="[
      {
        text: '帮助',
        type: 'primary',
        onClick: (cb) => {
          console.log('帮助');
          cb();
        },
      },
    ]"
    @handle-ok="handleOk"
  >
    <a-form
      v-if="['add', 'edit'].includes(props.drawerType)"
      ref="drawerForm"
      :model="form"
      :rules="rules"
    >
      <a-form-item label="username" field="username">
        <a-input v-model="form.username" placeholder="请输入用户名"></a-input>
      </a-form-item>
    </a-form>
    <div v-else-if="['detail'].includes(props.drawerType)">用户名</div>
  </cmDrawer>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import cmDrawer from './cm-drawer.vue';
  import type { DrawerType } from './type.d';

  const props = withDefaults(defineProps<{ drawerType: DrawerType }>(), {
    drawerType: 'add',
  });

  const form = ref({
    username: '123',
  });

  const rules = {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      {
        min: 3,
        max: 10,
        message: '用户名长度在 3 到 10 个字符',
        trigger: 'blur',
      },
    ],
  };
  const handleOk = (cb: () => void) => {
    setTimeout(() => {
      cb();
    }, 1000);
  };
</script>

<style scoped lang="less"></style>

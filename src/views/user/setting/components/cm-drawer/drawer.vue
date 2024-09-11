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
      <a-form-item label="avatar" field="avatar">
        <cmUploadPic @on-loaded="picOnLoaded"></cmUploadPic>
        <!-- <cmUploadPic :pic="pic" @on-loaded="picOnLoaded"></cmUploadPic> -->
      </a-form-item>
    </a-form>
    <div v-else-if="['detail'].includes(props.drawerType)">用户名</div>
  </cmDrawer>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { FileItem } from '@arco-design/web-vue/es/upload/interfaces';
  import cmDrawer from './cm-drawer.vue';
  import type { DrawerType } from './type';
  import { rules } from './rules';

  import cmUploadPic from '../cm-upload-pic/cm-upload-pic.vue';

  const props = withDefaults(defineProps<{ drawerType: DrawerType }>(), {
    drawerType: 'add',
  });

  const form = ref({
    username: '123',
  });
  const drawerForm = ref(null);
  let propsPicList: string[] = [];

  // 图片上传
  const handleUploadPic = async () => {
    console.log(propsPicList[propsPicList.length - 1]);
  };

  // 图片删除
  const handleDeletePic = async () => {
    console.log(propsPicList[0]);
  };

  const handleOk = (cb: (isOk?: boolean) => void) => {
    drawerForm.value.validate((errors) => {
      if (errors) {
        console.log('error', errors);
        cb(false);
        return;
      }
      console.log('ok');

      setTimeout(() => {
        if (props.drawerType === 'edit' && propsPicList.length === 2) {
          handleDeletePic();
        }
        handleUploadPic();
        cb(true);
        console.log('ok', form.value);
      }, 1000);
    });
  };

  // 图片上传
  const pic =
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp';
  const picOnLoaded = (picList: string[]) => {
    console.log(picList);
    propsPicList = [...picList];
  };
</script>

<style scoped lang="less"></style>

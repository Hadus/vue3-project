<template>
  <a-upload
    :custom-request="onUpload"
    :file-list="file ? [file] : []"
    :show-file-list="false"
    accept="image/*"
    tip="格式为png、jpg、jpeg的图片，文件大小不超过5M"
    :on-before-upload="onBeforeUpload"
    class="cm-pic-wrapper"
  >
    <template #upload-button>
      <div class="pic-content">
        <a-avatar
          v-if="pic || (file && file.url)"
          trigger-type="mask"
          shape="square"
          :size="80"
        >
          <img :src="pic || file.url" :alt="defaultImg" />
          <template #trigger-icon>
            <icon-edit />
          </template>
        </a-avatar>
        <!-- 默认图片 -->
        <a-avatar v-else trigger-type="mask" shape="square" :size="80">
          <img :src="defaultImg" :alt="defaultImg" />
          <template #trigger-icon>
            <icon-upload />
            <p>上传照片</p>
          </template>
        </a-avatar>
      </div>
    </template>
  </a-upload>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { Message } from '@arco-design/web-vue';
  import {
    FileItem,
    RequestOption,
  } from '@arco-design/web-vue/es/upload/interfaces';
  // import { DrawerPropsType } from './type';

  const defaultImg =
    '//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image';
  const defaultLt = 5;

  const props = withDefaults(defineProps<{ pic?: string }>(), {
    pic: '',
  });

  const emit = defineEmits(['onLoaded']);
  const file = ref();
  const pic = ref(props.pic);
  const onBeforeUpload = (currentFile: File) => {
    const isLt = currentFile.size / 1024 / 1024 <= defaultLt;
    if (!isLt) {
      Message.error('请上传不超过5M的图片!');
      return false;
    }
    return true;
  };

  const onUpload = (option: RequestOption) => {
    // const { onProgress, onError, onSuccess, fileItem, name } = option;
    const { fileItem } = option;
    file.value = fileItem;
    const picList: string[] = [file.value.url];
    if (props.pic) {
      picList.unshift(pic.value);
    }
    emit('onLoaded', picList);
    return {
      abort() {},
    };
  };
</script>

<style scoped lang="less">
  .cm-pic-wrapper {
    .pic-content {
      :deep(.arco-avatar-trigger-icon-mask) {
        flex-direction: column;
        font-size: 14px;
      }
      .arco-avatar-trigger-icon-mask {
        svg {
          width: 22px;
          height: 22px;
        }
        p {
          margin-top: 5px;
        }
      }
    }
  }
</style>

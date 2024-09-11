<template>
  <a-list :bordered="false">
    <a-list-item>
      <a-list-item-meta>
        <template #avatar>
          <a-typography-paragraph>
            {{ $t('userSetting.SecuritySettings.form.label.password') }}
          </a-typography-paragraph>
        </template>
        <template #description>
          <div class="content">
            <a-typography-paragraph>
              {{ $t('userSetting.SecuritySettings.placeholder.password') }}
            </a-typography-paragraph>
          </div>
          <div class="operation">
            <a-link>
              {{ $t('userSetting.SecuritySettings.button.update') }}
            </a-link>
          </div>
        </template>
      </a-list-item-meta>
    </a-list-item>
    <a-list-item>
      <a-list-item-meta>
        <template #avatar>
          <a-typography-paragraph>
            {{ $t('userSetting.SecuritySettings.form.label.securityQuestion') }}
          </a-typography-paragraph>
        </template>
        <template #description>
          <div class="content">
            <a-typography-paragraph class="tip">
              {{
                $t('userSetting.SecuritySettings.placeholder.securityQuestion')
              }}
            </a-typography-paragraph>
          </div>
          <div class="operation">
            <a-link>
              {{ $t('userSetting.SecuritySettings.button.settings') }}
            </a-link>
          </div>
        </template>
      </a-list-item-meta>
    </a-list-item>
    <a-list-item>
      <a-list-item-meta>
        <template #avatar>
          <a-typography-paragraph>
            {{ $t('userSetting.SecuritySettings.form.label.phone') }}
          </a-typography-paragraph>
        </template>
        <template #description>
          <div class="content">
            <a-typography-paragraph>
              已绑定：150******50
            </a-typography-paragraph>
          </div>
          <div class="operation">
            <a-link>
              {{ $t('userSetting.SecuritySettings.button.update') }}
            </a-link>
          </div>
        </template>
      </a-list-item-meta>
    </a-list-item>
    <a-list-item>
      <a-list-item-meta>
        <template #avatar>
          <a-typography-paragraph> v-html </a-typography-paragraph>
        </template>
        <template #description>
          <div class="content">
            <a-typography-paragraph class="tip">
              <span v-html="nodeStr1"></span>|||<span><nodeStr2 /></span>
            </a-typography-paragraph>
          </div>
          <div class="operation">
            <a-link @click="toConfirm"> 二次确认 </a-link>
          </div>
        </template>
      </a-list-item-meta>
    </a-list-item>
    <a-list-item>
      <a-list-item-meta>
        <template #avatar>
          <a-typography-paragraph>
            {{ $t('userSetting.SecuritySettings.form.label.email') }}
          </a-typography-paragraph>
        </template>
        <template #description>
          <div class="content">
            <a-typography-paragraph class="tip">
              {{ $t('userSetting.SecuritySettings.placeholder.email') }}
            </a-typography-paragraph>
          </div>
          <div class="operation">
            <a-link @click="drawserVisible = true">
              {{ $t('userSetting.SecuritySettings.button.update') }}
            </a-link>
          </div>
        </template>
      </a-list-item-meta>
    </a-list-item>
  </a-list>
  <Drawer
    v-if="drawserVisible"
    v-model:visible="drawserVisible"
    drawer-type="add"
  ></Drawer>
</template>

<script lang="ts" setup>
  import { ref, h } from 'vue';
  import { Tooltip } from '@arco-design/web-vue';
  import cmSecConfirm from './cm-sec-confirm/cm-sec-confirm';
  import Drawer from './cm-drawer/drawer.vue';

  const nodeStr1 = `<span class="demo">v-html</span>`;
  const nodeStr2 = h('span', { class: 'demo' }, 'h方法');
  // 字符串超长隐藏
  const replaceChange = (str) => {
    const strshow = str.replace(/,/g, '/');
    if (strshow.length > 11) {
      return `${strshow.slice(0, 11)}...`;
    }
    return strshow;
  };

  const dep = replaceChange('广州省/深圳市/南山区/福田区/宝安区/福田区/');
  const ModalContent = h('p', [
    '确定转移',
    h(Tooltip, { content: 'tooltip content' }, () =>
      h('span', { class: 'cm-highlight' }, dep)
    ),
    '下所有人员到',
    h(Tooltip, { content: dep }, () =>
      h('span', { class: 'cm-highlight' }, dep)
    ),
    '下吗？',
  ]);

  const toConfirm = () => {
    cmSecConfirm({
      type: 'confirm',
      ModalContent,
      onOk: () => {
        console.log(111);
      },
    });
  };

  const drawserVisible = ref(false);
</script>

<style scoped lang="less">
  .demo {
    color: red;
  }

  :deep(.arco-list-item) {
    border-bottom: none !important;
    .arco-typography {
      margin-bottom: 20px;
    }
    .arco-list-item-meta-avatar {
      margin-bottom: 1px;
    }
    .arco-list-item-meta {
      padding: 0;
    }
  }
  :deep(.arco-list-item-meta-content) {
    flex: 1;
    border-bottom: 1px solid var(--color-neutral-3);

    .arco-list-item-meta-description {
      display: flex;
      flex-flow: row;
      justify-content: space-between;

      .tip {
        color: rgb(var(--gray-6));
      }
      .operation {
        margin-right: 6px;
      }
    }
  }
</style>

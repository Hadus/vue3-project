import { h, VNode } from 'vue';
import { Modal } from '@arco-design/web-vue';
import { IconExclamationCircle } from '@arco-design/web-vue/es/icon';
import './index.less';

export default ({
  type = 'confirm',
  ModalContent,
  onOk,
  onCancel,
  okText = '确认',
  cancelText = '取消',
  width = '360',
}: {
  // confirm 和 warning一样，但多一个取消按钮
  type?: 'confirm' | 'info' | 'success' | 'warning' | 'error';
  ModalContent: VNode;
  onOk: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  width?: number | string;
}) => {
  return Modal[type]({
    modalClass: 'cm-sec-confirm',
    title: () => h('div', [h(IconExclamationCircle), ModalContent]),
    titleAlign: 'start',
    content: '',
    // content: () => h('div', [h(IconExclamationCircleFill), ModalContent]),
    onOk: () => {
      onOk();
    },
    onCancel() {
      if (onCancel) onCancel();
    },
    // 默认配置---可以修改
    okText,
    cancelText,
    width,
    // 默认配置---不可修改
    closable: true,
    okButtonProps: { status: 'danger' },
  });
};

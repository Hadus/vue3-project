import { VNode } from 'vue';

export type CmSecConfirmModalType = {
  // confirm 和 warning一样，但多一个取消按钮
  type?: 'confirm' | 'info' | 'success' | 'warning' | 'error';
  ModalContent: VNode;
  onOk: () => void;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  width?: number | string;
};

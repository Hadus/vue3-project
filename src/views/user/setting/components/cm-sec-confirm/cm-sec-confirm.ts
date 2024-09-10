import { h, VNode } from 'vue';
import { Modal } from '@arco-design/web-vue';

export default (ModalContent: VNode) => {
  return Modal.confirm({
    title: 'Confirm',
    content: () => h(ModalContent),
  });
};

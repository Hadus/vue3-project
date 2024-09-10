export type DrawerType = 'add' | 'edit' | 'detail';
type MoreBtnsType = {
  text: string;
  type?: 'primary';
  status?: 'normal' | 'warning' | 'success' | 'danger';
  icon?: string;
  onClick?: (d: () => void) => void;
};

export type DrawerPropsType = {
  visible: boolean;
  title: string;
  drawerType: DrawerType;
  width?: number;
  okText?: string;
  cancelText?: string;
  footerMoreBtns?: MoreBtnsType[];
};

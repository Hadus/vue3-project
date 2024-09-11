// eslint-disable-next-line import/prefer-default-export
export const rules = {
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

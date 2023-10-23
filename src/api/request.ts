import axios, { AxiosInstance, AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API as string, //VITE_BASE_API是在.env文件中定义的
  timeout: 5000
});

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    console.log(error);
    return Promise.reject();
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      return response;
    } else {
      Promise.reject();
    }
  },
  (error: AxiosError) => {
    console.log(error);
    let message = ''
    //http状态码：400 401 403 404 500 501 502 503 504
    const status = error.response && error.response.status
    switch (status) {
      case 400:
        message = '请求参数错误'
        break
      case 401:
        message = '身份信息无效'
        break
      case 403:
        message = '没有操作权限'
        break
      case 404:
        message = '请求资源不存在'
        break
      case 500:
        message = '服务器内部错误'
        break
      case 503:
        message = '服务器正在维护'
        break
      case 504:
        message = '服务器超时'
        break
      default:
        message = '未知错误'
        break
    }
    //利用element-ui Message做消息提示
    ElMessage.error(message);
    return Promise.reject();
  }
);
export default service;

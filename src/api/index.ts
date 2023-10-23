import request from './request';

export const fetchAllData = (data: object = {}) => {
  return request({
    url: 'api/allData',
    method: 'post',
    data: { test: 1 }
  });
};
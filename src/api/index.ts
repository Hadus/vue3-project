import request from './request';

export const fetchData = () => {
  return request({
    url: './table.json',
    method: 'get'
  });
};
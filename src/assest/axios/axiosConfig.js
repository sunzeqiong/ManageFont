import axios from 'axios';

const instance = axios.create({
//   baseURL: 'https://api.example.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(config => {
  // 在请求发送之前做一些处理
  return config;
}, error => {
  // 处理请求错误
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {
  // 在响应之前做一些处理
  return response;
}, error => {
  // 处理响应错误
  return Promise.reject(error);
});

export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function post(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
export default instance;
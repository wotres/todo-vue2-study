import axios from 'axios';

const axiosHttp = axios.create({
  baseURL: 'http://localhost:9090',
  withCredentials: false
});

axiosHttp.interceptors.request.use(
  (config) => {
    config.headers['Access-Control-Allow-Origin'] = 'http://localhost:9090';
    return config;
  }
)
const api = {
  async post(address, task, userName, orderType) {
    const request = {
      userName,
      task,
    }
    return await axiosHttp.post(address, request)
      .then(response => {
        if (response.status === 201 && response.data === "success") {
          return api.get(orderType);
        } else {
          console.log('save fail');
        }
      });
  },
  async delete(address, value, orderType) {
    return await axiosHttp.delete(address + value)
      .then(response => {
        if (response.status === 204 && response.data === "success") {
          return api.get(orderType);
        }
        console.log('delete fail');
      });
  },
  async patch(address, id, checked, orderType) {
    const request = {
      id,
      checked: !checked,
    }
    return await axiosHttp.patch(address, request)
      .then(response => {
        if (response.data === "success") {
          return api.get(orderType);
        } else {
          console.log('put fail');
        }
      });
  },
  async get(orderType) {
    return await axiosHttp.get(`/todo/${orderType}`)
      .then(response => {
        if(response.status === 200) {
          return response.data;
        } else {
          console.log('get fail');
        }
      });
  }
}

export default api;

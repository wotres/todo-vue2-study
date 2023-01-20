import axios from 'axios';

const api = {
  async fetch(orderType) {
    await axios.get(`/todo/${orderType}`)
      .then(response => {
        response.data = JSON.parse(response.data);
        return response
      })
  }
}

export default api;

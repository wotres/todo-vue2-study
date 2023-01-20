import axios from 'axios';

const api = {
  async post(address, value, orderType) {
    // await axios.post(address, JSON.stringify(value))
    //   .then(response => {
    //     if (response.data == "ok") {
    //       api.get(orderType);
    //     } else {
    //       console.log('save fail');
    //     }
    //   });
    console.log('post', address, value, orderType);
  },
  async delete(address, value, orderType) {
    // await axios.put(address + value)
    //   .then(response => {
    //     if (response.data == "ok") {
    //       api.get(orderType);
    //     } else {
    //       console.log('delete fail');
    //     }
    //   });
    console.log('delete', address, value, orderType);
  },
  async put(address, value, orderType) {
    // await axios.put(address, value)
    //   .then(response => {
    //     if (response.data == "ok") {
    //       api.get(orderType);
    //     } else {
    //       console.log('put fail');
    //     }
    //   });
    console.log('put', address, value, orderType);
  },
  async get(orderType) {
    this.$store.state.taskList = await axios.get(`/todo/${orderType}`)
      .then(response => {
        response.data = JSON.parse(response.data);
        return response
      });
  }
}

export default api;

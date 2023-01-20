import api from '@/service/api-service';

const setUserName = (state, userName) => {
  localStorage.setItem("userName", userName);
  return state.userName = userName;
}

const sortTaskList = async (state, payload) => {
  state.orderType = payload;
  state.taskList = await api.fetch(payload);
}

export { setUserName, sortTaskList };

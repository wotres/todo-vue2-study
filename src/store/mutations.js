import api from '@/service/api-service';

const setUserName = (state, userName) => {
  localStorage.setItem("userName", userName);
  return state.userName = userName;
}

const addNewTask = async (state, task) => {
  state.taskList = await api.post('/todo/save', task, state.userName, state.orderType);
}

const removeTask = async (state, id) => {
  state.taskList = await api.delete('/todo/delete', id, state.orderType);
}

const removeTaskAll = async (state) => {
  state.taskList = await api.delete('/todo', '', state.orderType);
}

const clickChecked = async (state, id, checked) => {
  state.taskList = await api.patch('/todo', id, checked, state.orderType);
}

const changeOrderType = async (state, orderType) => {
  state.orderType = orderType;
  state.taskList = await api.get(orderType);
}

const getTaskList = async (state) => {
  state.taskList = await api.get('desc');
}

export { setUserName, addNewTask, removeTask, removeTaskAll, clickChecked, changeOrderType, getTaskList };

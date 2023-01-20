import api from '@/service/api-service';

const setUserName = (state, userName) => {
  localStorage.setItem("userName", userName);
  return state.userName = userName;
}

const addNewTask = async (state, task) => {
  await api.post('/todo/save', task, state.orderType);
}

const removeTask = async (state, id) => {
  await api.delete('/todo/delete', id, state.orderType);
}

const removeTaskAll = async (state) => {
  await api.delete('/todo/deleteAll', '', state.orderType);
}

const clickChecked = async (state, id, checked) => {
  const value = {
    id: id,
    checked: !checked
  }
  await api.put('/todo/fetch', value, state.orderType);
}

const changeOrderType = async (state, orderType) => {
  state.orderType = orderType;
  await api.get('', orderType);
}

export { setUserName, addNewTask, removeTask, removeTaskAll, clickChecked, changeOrderType };

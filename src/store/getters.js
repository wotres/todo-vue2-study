const userName = (state) => {
  const userName = state.userName;
  return userName ? userName : localStorage.getItem('userName');
}
const taskList = (state) => {
  return state.taskList;
}

export { userName, taskList }

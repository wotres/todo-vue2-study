const userName = (state) => {
  const userName = state.userName;
  return userName ? userName : localStorage.getItem('userName');
}

export { userName }

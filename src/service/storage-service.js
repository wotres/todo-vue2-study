const storage = {
  fetchName() {
    const userName = localStorage.getItem("userName");
    return userName ? userName : 'noBody';
  }
}
export default storage;

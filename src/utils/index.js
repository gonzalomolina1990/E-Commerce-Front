const isLogin = (usertoken) => {
  if (usertoken) {
    return true;
  }
  return false;
};

export default isLogin;

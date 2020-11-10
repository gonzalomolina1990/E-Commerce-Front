const login = (user) => {
  return {
    type: "LOG_IN",
    payload: user,
  };
};

const createUser = (user) => {
  return {
    type: "CREATE_USER",
    payload: user,
  };
};

export { login, createUser };

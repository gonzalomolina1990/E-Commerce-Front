const login = (user) => {
  return {
    type: "LOG_IN",
    payload: user,
  };
};

const logout = (obj) => {
  return {
    type: "LOG_OUT",
    payload: obj,
  };
};

const createUser = (user) => {
  return {
    type: "CREATE_USER",
    payload: user,
  };
};

const updateUser = (name, lastname, address, phone) => {
  return {
    type: "UPDATE_USER",
    payload: { name, lastname, address, phone },
  };
};

export { login, createUser, logout, updateUser };

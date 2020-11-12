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

const updateProduct = (product) => {
  return {
    type: "UPDATE_PRODUCT",
    payload: product,
  };
};

export { login, createUser, logout, updateProduct };

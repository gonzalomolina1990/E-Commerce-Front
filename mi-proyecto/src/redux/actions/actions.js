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

const listCategories = (categories) => {
  return {
    type: "LIST_CATEGORIES",
    payload: categories,
  };
};

const deleteCategory = (category) => {
  return {
    type: "DELETE_CATEGORY",
    payload: category,
  };
};

const eachCategoryList = (category) => {
  return {
    type: "EACH_CATEGORY",
    payload: category,
  };
};

export {
  login,
  createUser,
  logout,
  updateProduct,
  listCategories,
  deleteCategory,
  eachCategoryList,
};

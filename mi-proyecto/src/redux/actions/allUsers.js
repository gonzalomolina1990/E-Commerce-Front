const saveUsers = (users) => {
  return {
    type: "SAVE_USERS",
    payload: users,
  };
};

/* const deleteUsers = (productId) => {
  return {
    type: "DELETE_PRODUCT",
    payload: productId,
  };
};
 */
export { saveUsers };

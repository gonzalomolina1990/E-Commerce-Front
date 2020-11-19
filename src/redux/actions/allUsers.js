const saveUsers = (users) => {
  return {
    type: "SAVE_USERS",
    payload: users,
  };
};

const deleteUser = (userId) => {
  return {
    type: "DELETE_USER",
    payload: userId,
  };
};

export { saveUsers, deleteUser };

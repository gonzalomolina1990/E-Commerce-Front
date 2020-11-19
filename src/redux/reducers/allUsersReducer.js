const allUsers = (state = [], action) => {
  switch (action.type) {
    case "SAVE_USERS":
      return action.payload;

    case "DELETE_USER":
      return [...state.filter((user) => user._id !== action.payload)];

    default:
      return state;
  }
};

export default allUsers;

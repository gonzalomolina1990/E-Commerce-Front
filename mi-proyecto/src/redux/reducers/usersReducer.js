const users = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return action.payload;

    case "LOG_IN":
      return action.payload;

    case "LOG_OUT":
      return action.payload;

    default:
      return state;
  }
};

export default users;

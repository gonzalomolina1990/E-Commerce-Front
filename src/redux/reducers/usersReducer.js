const users = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return action.payload;

    case "LOG_IN":
      return action.payload;

    case "LOG_OUT":
      return action.payload;

    case "UPDATE_USER":
      return {
        ...state,
        name: action.payload.name,
        lastname: action.payload.lastname,
        phone: action.payload.phone,
        address: action.payload.address,
      };
    default:
      return state;
  }
};

export default users;

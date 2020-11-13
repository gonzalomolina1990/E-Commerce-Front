const categories = (state = [], action) => {
  switch (action.type) {
    case "LIST_CATEGORIES":
      return action.payload;
    case "EACH_CATEGORY":
      return action.payload;
    case "DELETE_CATEGORY":
      return state.filter((category) => category._id !== action.payload);

    default:
      return state;
  }
};

export default categories;

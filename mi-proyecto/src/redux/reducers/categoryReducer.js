const categories = (state = {}, action) => {
  switch (action.type) {
    case "LIST_CATEGORY":
      return action.payload;
    case "EACH_CATEGORY":
      return action.payload;

    default:
      return state;
  }
};

export default categories;

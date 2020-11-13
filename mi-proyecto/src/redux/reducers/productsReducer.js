const products = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCT":
      return action.payload;
    case "EACH_CATEGORY":
      return action.payload;

    default:
      return state;
  }
};

export default products;

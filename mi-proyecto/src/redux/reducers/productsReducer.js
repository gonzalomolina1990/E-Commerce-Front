const products = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_PRODUCT":
      return action.payload;

    case "SAVE_PRODUCTS":
      return action.payload;

    case "DELETE_PRODUCT":
      return [...state.filter((product) => product._id !== action.payload)];

    default:
      return state;
  }
};

export default products;

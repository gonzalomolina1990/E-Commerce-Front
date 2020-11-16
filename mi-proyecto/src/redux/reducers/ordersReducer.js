const orders = (state = [], action) => {
  switch (action.type) {
    case "LIST_ORDERS":
      return action.payload;

    default:
      return state;
  }
};

export default orders;

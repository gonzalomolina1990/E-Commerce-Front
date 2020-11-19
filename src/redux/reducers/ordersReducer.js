const orders = (state = [], action) => {
  switch (action.type) {
    case "LIST_ORDERS":
      return action.payload;

    case "UPDATE_ORDER":
      return state.map((order) => {
        if (order._id === action.payload.id) {
          return { ...order, orderState: action.payload.orderState };
        }
        return order;
      });

    default:
      return state;
  }
};

export default orders;

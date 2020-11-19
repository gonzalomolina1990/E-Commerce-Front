const listOrders = (orders) => {
  return {
    type: "LIST_ORDERS",
    payload: orders,
  };
};

const updateState = (id, orderState) => {
  return {
    type: "UPDATE_ORDER",
    payload: { id, orderState },
  };
};

export { listOrders, updateState };

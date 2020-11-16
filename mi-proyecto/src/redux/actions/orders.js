const listOrders = (orders) => {
  return {
    type: "LIST_ORDERS",
    payload: orders,
  };
};

export { listOrders };

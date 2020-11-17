const addProduct = (cart) => {
  return {
    type: "ADD_PRODUCT",
    payload: cart,
  };
};

export { addProduct };

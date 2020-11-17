const addProduct = (cart) => {
  return {
    type: "ADD_PRODUCT",
    payload: cart,
  };
};

const removeProduct = (id) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: id,
  };
};

const clearProduct = (product) => {
  return {
    type: "CLEAR_PRODUCT",
    payload: product,
  };
};

export { addProduct, removeProduct, clearProduct };

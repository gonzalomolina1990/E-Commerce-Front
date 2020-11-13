const saveProducts = (products) => {
  return {
    type: "SAVE_PRODUCTS",
    payload: products,
  };
};

const deleteProduct = (productId) => {
  return {
    type: "DELETE_PRODUCT",
    payload: productId,
  };
};

export { saveProducts, deleteProduct };

const saveProducts = (products) => {
  return {
    type: "SAVE_PRODUCTS",
    payload: products,
  };
};

export { saveProducts };

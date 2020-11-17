const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      if (state.length === 0) {
        return [
          ...state,
          {
            product: action.payload,
            quantity: 1,
          },
        ];
      } else {
        return state.map((item) => {
          if (item.product.id === action.payload.id) {
            return {
              ...item,

              quantity: item.quantity + 1,
            };
          } else {
            return [
              ...state,
              {
                product: action.payload,
                quantity: 1,
              },
            ];
          }
        });
      }

    default:
      return state;
  }
};

export default cart;

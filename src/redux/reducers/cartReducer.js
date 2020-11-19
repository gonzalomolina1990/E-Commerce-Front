import Product from "../../Components/Product";

const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      if (
        !state.some(
          (item) =>
            item.product._id === action.payload._id && item.product.stock > 0
        )
      ) {
        return [
          ...state,
          {
            product: action.payload,
            quantity: 1,
          },
        ];
      } else {
        return state.map((item) => {
          if (
            item.product._id === action.payload._id &&
            item.product.stock > item.quantity
          ) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }

    case "REMOVE_PRODUCT":
      return state.map((item) => {
        if (item.product._id === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

    case "CLEAR_PRODUCT":
      return state.filter((cart) => cart.product._id !== action.payload);

    case "CLEAR_CART":
      return action.payload;

    default:
      return state;
  }
};

export default cart;

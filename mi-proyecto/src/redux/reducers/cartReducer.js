import Product from "../../Components/Product";

const cart = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      if (!state.some((item) => item.product._id === action.payload._id)) {
        return [
          ...state,
          {
            product: action.payload,
            quantity: 1,
          },
        ];
      } else {
        return state.map((item) => {
          if (item.product._id === action.payload._id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }
    default:
      return state;
  }
};

export default cart;

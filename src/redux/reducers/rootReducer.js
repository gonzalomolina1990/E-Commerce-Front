import { combineReducers } from "redux";
import users from "./usersReducer";
import products from "./productsReducer";
import categories from "./categoryReducer";
import allUsers from "./allUsersReducer";
import orders from "./ordersReducer";
import cart from "./cartReducer";

const rootReducer = combineReducers({
  users,
  products,
  categories,
  allUsers,
  orders,
  cart,
});

export default rootReducer;

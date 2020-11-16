import { combineReducers } from "redux";
import users from "./usersReducer";
import products from "./productsReducer";
import categories from "./categoryReducer";
import allUsers from "./allUsersReducer";
import orders from "./ordersReducer";

const rootReducer = combineReducers({
  users,
  products,
  categories,
  allUsers,
  orders,
});

export default rootReducer;

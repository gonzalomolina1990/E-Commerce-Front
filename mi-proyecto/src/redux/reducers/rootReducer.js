import { combineReducers } from "redux";
import users from "./usersReducer";
import products from "./productsReducer";
import categories from "./categoryReducer";
import allUsers from "./allUsersReducer";

const rootReducer = combineReducers({ users, products, categories, allUsers });

export default rootReducer;

import { combineReducers } from "redux";
import users from "./usersReducer";
import products from "./productsReducer";

const rootReducer = combineReducers({ users, products });

export default rootReducer;

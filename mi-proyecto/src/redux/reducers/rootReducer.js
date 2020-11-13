import { combineReducers } from "redux";
import users from "./usersReducer";
import products from "./productsReducer";
import categories from "./categoryReducer";

const rootReducer = combineReducers({ users, products, categories });

export default rootReducer;

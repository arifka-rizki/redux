import { combineReducers } from "redux";
import productReducer from "./newProduct";
import cartReducer from "./cart.js";

export default combineReducers({
    products: productReducer,
    carts: cartReducer
})
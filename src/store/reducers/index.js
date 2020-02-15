import { combineReducers } from "redux";
import products from "./products";
import productSelection from "./productSelection";

export default combineReducers({ products, productSelection });

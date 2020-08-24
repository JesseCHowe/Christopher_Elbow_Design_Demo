import { combineReducers } from "redux";
import products from "./products";
import bonBons from "./bonBons";
import confections from "./confections";

export default combineReducers({ products, bonBons, confections });

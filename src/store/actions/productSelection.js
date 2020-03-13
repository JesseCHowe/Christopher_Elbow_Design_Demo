import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const selectChocolate = chocolate => {
  return {
    type: actionTypes.SELECT_CHOCOLATE,
    chocolate
  };
};

export const setCart = cart => {
  return {
    type: actionTypes.SET_CART,
    cart
  };
};

export const addToCart = chocolate => {
  return {
    type: actionTypes.ADD_TO_CART,
    chocolate
  };
};

export const removeFromCart = chocolate => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    chocolate
  };
};

export const removeAllFromCart = chocolate => {
  return {
    type: actionTypes.REMOVE_ALL_FROM_CART,
    chocolate
  };
};

export const initData = category => {
  return dispath => {
    axios
      .get(
        "https://christopher-elbow-demo.firebaseio.com/products/E3QU6FcTL0bEiDwaJ2Mz.json"
      )
      .then(response => {
        return response.data;
      })
      .then(data => {
        return data.filter(o => o.category === "ChocolateBars");
      });
  };
};

import * as actionTypes from "./actionTypes";

export const selectChocolate = chocolate => {
  return {
    type: actionTypes.SELECT_CHOCOLATE,
    chocolate
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

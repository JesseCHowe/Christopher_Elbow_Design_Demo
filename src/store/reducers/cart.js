import * as actionTypes from "../actions/actionTypes";

const initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        [action.chocolate]: {
          ...state[action.chocolate],
          qty: state[action.chocolate].qty + 1
        }
      };
    case actionTypes.REMOVE_FROM_CART:
      if (state[action.chocolate].qty > 0) {
        return {
          ...state,
          [action.chocolate]: {
            ...state[action.chocolate],
            qty: state[action.chocolate].qty - 1
          }
        };
      }
      return state;
    case actionTypes.REMOVE_ALL_FROM_CART:
      return {
        ...state,
        [action.chocolate]: {
          ...state[action.chocolate],
          qty: 0
        }
      };
    default:
      return state;
  }
};

export default products;

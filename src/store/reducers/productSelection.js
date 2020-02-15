import * as actionTypes from "../actions/actionTypes";

const initialState = "Cherry Streusel Chocolate Bar";

const productSelection = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_CHOCOLATE:
      return action.chocolate;
    default:
      return state;
  }
};

export default productSelection;

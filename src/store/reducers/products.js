import * as actionTypes from "../actions/actionTypes";

const initialState = [];

const products = (state = initialState, action) => {
  const index = state.findIndex(o => o.name === action.chocolate);

  switch (action.type) {
    case actionTypes.SET_CART:
      return action.cart;
    case actionTypes.ADD_TO_CART:
      if (index === -1) {
        return state.concat({
          name: action.chocolate.name,
          price: action.chocolate.price,
          url: action.chocolate.url,
          image: action.chocolate.image,
          qty: 1
        });
      } else {
        return [
          ...state.slice(0, index),
          {
            ...state[index],
            qty: state[index].qty + 1
          },
          ...state.slice(index + 1)
        ];
      }

    case actionTypes.REMOVE_FROM_CART:
      if (state[index].qty === 1) {
        return state.filter(o => o.name !== action.chocolate);
      }
      return [
        ...state.slice(0, index),
        {
          ...state[index],
          qty: state[index].qty - 1
        },
        ...state.slice(index + 1)
      ];

    case actionTypes.REMOVE_ALL_FROM_CART:
      return state.filter(o => o.name !== action.chocolate);

    default:
      return state;
  }
};

export default products;

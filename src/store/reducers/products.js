import { storeProducts } from "../../data";
import * as actionTypes from "../actions/actionTypes";

const initialState = [
  {
    name: "Strawberry Crisp Chocolate Bar",
    qty: 11
  },
  {
    name: "Cherry Streusel Chocolate Bar",
    qty: 23
  }
];

const products = (state = initialState, action) => {
  const index = state.findIndex(o => o.name === action.chocolate);

  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      if (state[index].name === action.chocolate) {
        return [
          ...state.slice(0, index),
          {
            ...state[index],
            qty: state[index].qty + 1
          },
          ...state.slice(index + 1)
        ];
      } else {
        return state.concat({
          name: action.chocolate,
          qty: 1
        });
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

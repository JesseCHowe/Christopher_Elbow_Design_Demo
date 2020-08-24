import * as actionTypes from "../actions/actionTypes";

const initialState = {
  sort: "default",
  view: "gallery",
};

const confections = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SORT_MODE:
      return {
        ...state,
        sort: action.sort
      };
      case actionTypes.SET_VIEW_MODE:
        return {
          ...state,
          view: action.view
        }
    default:
      return state;
  }
};

export default confections;

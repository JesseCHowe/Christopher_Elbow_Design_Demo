import * as actionTypes from "../actions/actionTypes";

const initalState = {
  bonBonSelection: false,
  currentIndex: null,
  dimensions: null,
  step: 1,
  items: []
};

const bonBons = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.NEXT_STEP:
      return {
        ...state,
        step: ++state.step
      };
    case actionTypes.PREVIOUS_STEP:
      return {
        ...state,
        step: --state.step
      };
    case actionTypes.ADD_BONBON:
      let newArray = state.items.slice();
      newArray[state.currentIndex] = action.bonbon;
      console.log("new bonBon", newArray);
      return {
        ...state,
        items: newArray
      };
    case actionTypes.RESET_BONBON:
      return {
        bonBonSelection: false,
        currentIndex: null,
        step: 1,
        items: []
      };
    case actionTypes.SET_INDEX:
      console.log("adding Current Index to reducer");
      return {
        ...state,
        currentIndex: action.currentIndex
      };
    case actionTypes.TOGGLE_BONBON_SELECTION:
      return {
        ...state,
        bonBonSelection: action.active
      };
    case actionTypes.SET_DIMENSIONS:
      return {
        ...state,
        dimensions: action.dimensions
      };
    default:
      return state;
  }
};

export default bonBons;

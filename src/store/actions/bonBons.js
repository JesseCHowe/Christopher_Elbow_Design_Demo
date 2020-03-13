import * as actionTypes from "./actionTypes";

export const nextStep = () => {
  return {
    type: actionTypes.NEXT_STEP
  };
};

export const previousStep = () => {
  return {
    type: actionTypes.PREVIOUS_STEP
  };
};

export const addBonBon = bonbon => {
  console.log("adding bonBon");
  return {
    type: actionTypes.ADD_BONBON,
    bonbon
  };
};

export const reset = () => {
  return {
    type: actionTypes.RESET_BONBON
  };
};

export const setItemIndex = currentIndex => {
  return {
    type: actionTypes.SET_INDEX,
    currentIndex
  };
};

export const bonBonSelection = active => {
  return {
    type: actionTypes.TOGGLE_BONBON_SELECTION,
    active
  };
};

export const setDimensions = dimensions => {
  return {
    type: actionTypes.SET_DIMENSIONS,
    dimensions
  };
};

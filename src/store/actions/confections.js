import * as actionTypes from "./actionTypes";

export const viewMode = (view) => {
  return {
    type: actionTypes.SET_VIEW_MODE,
    view,
  };
};

export const sortMode = (sort) => {
  return {
    type: actionTypes.SET_SORT_MODE,
    sort,
  };
};

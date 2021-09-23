import * as filtersActionCreators from "./filtersActionCreators";

export const changeStatusFilter = (status) => (dispatch) => {
  dispatch(filtersActionCreators.statusFilterChanged(status));
};

export const colorFilterAdded = (color) => (dispatch) => {
  dispatch(filtersActionCreators.colorFilterAdded(color));
};

export const colorFilterRemoved = (color) => (dispatch) => {
  dispatch(filtersActionCreators.colorFilterRemoved(color));
};

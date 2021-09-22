import * as filtersActionCreators from "./filtersActionCreators";

export const changeStatusFilter = (status) => (dispatch) => {
  dispatch(filtersActionCreators.statusFilterChanged(status));
};

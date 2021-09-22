import * as filtersActionTypes from "./filtersActionTypes";

export const statusFilterChanged = (status) => ({
  type: filtersActionTypes.statusFilterChanged,
  payload: status,
});

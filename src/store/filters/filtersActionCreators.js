import * as filtersActionTypes from "./filtersActionTypes";

export const statusFilterChanged = (status) => ({
  type: filtersActionTypes.statusFilterChanged,
  payload: status,
});

export const colorFilterAdded = (color) => ({
  type: filtersActionTypes.colorFilterAdded,
  payload: color,
});

export const colorFilterRemoved = (color) => ({
  type: filtersActionTypes.colorFilterRemoved,
  payload: color,
});

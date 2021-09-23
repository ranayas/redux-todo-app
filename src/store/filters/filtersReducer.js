import * as StatusFilters from "../../shared/StatusFilters";
import * as filtersActionTypes from "./filtersActionTypes";
const initialState = {
  status: StatusFilters.all,
  colors: [],
};

const filtersReducer = (state, action) => {
  if (!state) {
    state = initialState;
  }

  switch (action.type) {
    case filtersActionTypes.statusFilterChanged: {
      const status = action.payload;
      return {
        ...state,
        status,
      };
    }
    case filtersActionTypes.colorFilterAdded: {
      const color = action.payload;
      return {
        ...state,
        colors: [...state.colors, color],
      };
    }
    case filtersActionTypes.colorFilterRemoved: {
      return {
        ...state,
        colors: [...state.colors.filter((color) => color !== action.payload)],
      };
    }
    default: {
      return state;
    }
  }
};

export default filtersReducer;

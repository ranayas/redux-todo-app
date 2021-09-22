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
    default: {
      return state;
    }
  }
};

export default filtersReducer;

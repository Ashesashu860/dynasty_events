import { actionTypes } from "../actions/action";

const initialState = {
  currentRoute: "home"
};

export const routeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ROUTE:
      return { ...state, currentRoute: action.route };
    default:
      return state;
  }
};

import { createStore, combineReducers } from "redux";
import { routeReducer } from "./reducers/reducer";

export const store = createStore(combineReducers([routeReducer]));

import { combineReducers } from "redux";
import { servicesReducer } from "./serviceReducers";
import { citiesReducer } from "./cityReducers";

export const rootReducer = combineReducers({
  servicesReducer,
  citiesReducer,
});

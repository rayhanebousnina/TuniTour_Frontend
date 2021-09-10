import { combineReducers } from "redux";
import { servicesReducer } from "./serviceReducers";
import { citiesReducer } from "./cityReducers";
import { userRegisterReducer } from "./userRegisterReducers";
import { userLoginReducer } from "./userLoginReducers";

export const rootReducer = combineReducers({
  servicesReducer,
  citiesReducer,
  user: userRegisterReducer,
  userLoginReducer,
});

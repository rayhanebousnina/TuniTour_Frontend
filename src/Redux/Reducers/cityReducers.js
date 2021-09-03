import {
  GET_CITY,
  ADD_CITY,
  UPDATE_CITY,
  DELETE_CITY,
} from "../Actions/action_types";

const initialState = { cities: [] };
export const citiesReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_CITY:
      state = {
        ...state,
        cities: payload,
      };
    default:
      return state;
  }
};

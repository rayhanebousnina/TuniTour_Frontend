import {
  GET_CITY,
  ADD_CITY,
  UPDATE_CITY,
  DELETE_CITY,
} from "../Actions/action_types";

const initialState = { cities: [] };
export const citiesReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    //Get city
    case GET_CITY:
      state = {
        ...state,
        cities: payload,
      };

    //Add city
    case ADD_CITY:
      state = {
        ...state,
        cities: [...state.cities, payload],
      };
    // console.log(state)
    // break;
  }
  return state;
};

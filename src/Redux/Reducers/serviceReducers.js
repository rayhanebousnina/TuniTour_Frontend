import {
  GET_SERVICE,
  ADD_SERVICE,
  UPDATE_SERVICE,
  DELETE_SERVICE,
} from "../Actions/action_types";

const initialState = { services: [] };
export const servicesReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    //Get city
    case GET_SERVICE:
      state = {
        ...state,
        services: payload,
      };

    //Add city
    case ADD_SERVICE:
      state = {
        ...state,
        services: [...state.services, payload],
      };
    // console.log(state)
    // break;
  }
  return state;
};

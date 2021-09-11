import {
  GET_SERVICE,
  ADD_SERVICE,
  UPDATE_SERVICE,
  DELETE_SERVICE,
  GET_SERVICE_BY_ID,
} from "../Actions/action_types";

const initialState = { services: [], service: null };
export const servicesReducer = (state = { services: [] }, action) => {
  const { payload, type } = action;
  switch (type) {
    //Get city
    case GET_SERVICE:
      state = {
        ...state,
        services: payload,
      };

    //Get service by id
    case GET_SERVICE_BY_ID:
      state = {
        ...state,
        service: payload,
      };

    //Add city
    case ADD_SERVICE:
      state = {
        ...state,
        services: [...state.services, payload],
      };
  }
  return state;
};

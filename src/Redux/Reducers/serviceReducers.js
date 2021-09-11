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
      return {
        ...state,
        services: payload,
      };
    //Get service by id
    case GET_SERVICE_BY_ID:
      return {
        ...state,
        service: payload,
      };

    //Add service
    case ADD_SERVICE:
      return {
        ...state,
        services: [...state.services, payload],
      };
    // Update service
    case UPDATE_SERVICE:
      return {
        ...state,
        services: state.services.map((service) =>
          service._id === payload._id ? payload : service
        ),
      };
    //delete service

    case DELETE_SERVICE:
      return {
        ...state,
        services: state.services.filter((data) => data._id !== payload),
      };
    default:
      return state;
  }
};

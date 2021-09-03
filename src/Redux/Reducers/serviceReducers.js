import {
  GET_SERVICE,
  ADD_SERVICE,
  UPDATE_SERVICE,
  DELETE_SERVICE,
} from "../Actions/action_types";

const services = [];
export const servicesReducer = (state = services, action) => {
  switch (action.type) {
    case GET_SERVICE:
      return action.payload;
  }
  return state;
};

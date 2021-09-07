import { fetchServices } from "../request";
import { GET_SERVICE, ADD_SERVICE } from "./action_types";
import axios from "axios";

// Get all services
export const getServices = () => async (dispatch) => {
  try {
    const res = await fetchServices();
    console.log(res.data, "Myservice");
    dispatch({
      type: GET_SERVICE,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};

// Add new city
export const newService =
  (
    serviceName,
    serviceImage,
    serviceDescription,
    serviceAddress,
    serviceWorkingHours,
    servicePhone,
    servicePrice,
    serviceLocation,
    serviceCategory
  ) =>
  async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:2000/home/addService", {
        serviceName,
        serviceImage,
        serviceDescription,
        serviceAddress,
        serviceWorkingHours,
        servicePhone,
        servicePrice,
        serviceLocation,
        serviceCategory,
      });
      dispatch({
        type: ADD_SERVICE,
        payload: res.data,
      });
      console.log("payload");
    } catch (error) {
      console.log(error);
    }
  };

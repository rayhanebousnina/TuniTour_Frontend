import { fetchServices } from "../request";
import { GET_SERVICE, ADD_SERVICE, GET_SERVICE_BY_ID } from "./action_types";
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

// Get service by id
export const getServiceById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:4000/home/allservices_by_id/${id}`
    );
    console.log(res.data, "MyService");
    dispatch({
      type: GET_SERVICE_BY_ID,
      payload: res.data,
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
      const res = await axios.post("http://localhost:4000/home/addService", {
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

import { fetchCities, publishCities } from "../request";
import { ADD_CITY, GET_CITY } from "./action_types";
import axios from "axios";

// Get all cities
export const getCities = () => async (dispatch) => {
  try {
    const res = await fetchCities();
    console.log(res.data, "Mycity");
    dispatch({
      type: GET_CITY,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};

// Add new city
export const newCity =
  (cityName, cityImage, cityDescription, cityServices) => async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:2000/home/addCity", {
        cityName,
        cityImage,
        cityDescription,
        cityServices,
      });
      dispatch({
        type: ADD_CITY,
        payload: res.data,
      });
      console.log("payload");
    } catch (error) {
      console.log(error);
    }
  };

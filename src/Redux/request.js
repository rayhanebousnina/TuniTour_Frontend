import axios from "axios";

import {
  GET_SERVICES_API,
  ADD_SERVICES_API,
  UPDATE_SERVICES_API,
  DELETE_SERVICES_API,
  GET_SERVICE_API,
  GET_CITIES_API,
  ADD_CITIES_API,
  GET_CITY_API,
} from "./Shared/apiURL";

/***********************************************************************/
export const fetchServices = () =>
  axios
    .get(GET_SERVICES_API, {
      Accept: "application/json",
      "Content-Type": "application/json",
    })
    .then((res) => res.data);

export const fetchServiceById = (id) =>
  axios
    .get(GET_SERVICE_API, {
      Accept: "application/json",
      "Content-Type": "application/json",
    })
    .then((res) => res.data);

export const publishServices = () =>
  axios
    .post(ADD_SERVICES_API, {
      Accept: "application/json",
      "Content-Type": "application/json",
    })
    .then((res) => res.data);
/***********************************************************************/
export const fetchCities = () =>
  axios
    .get(GET_CITIES_API, {
      Accept: "application/json",
      "Content-Type": "application/json",
    })
    .then((res) => res.data);

export const fetchCityById = (id) =>
  axios
    .get(GET_CITY_API, {
      Accept: "application/json",
      "Content-Type": "application/json",
    })
    .then((res) => res.data);

export const publishCities = () =>
  axios
    .post(ADD_CITIES_API, {
      Accept: "application/json",
      "Content-Type": "application/json",
    })
    .then((res) => res.data);

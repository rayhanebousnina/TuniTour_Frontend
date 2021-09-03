import axios from "axios";

import {
  GET_SERVICES_API,
  ADD_SERVICES_API,
  UPDATE_SERVICES_API,
  DELETE_SERVICES_API,
  GET_CITIES_API,
} from "./Shared/apiURL";

export const fetchServices = () =>
  axios
    .get(GET_SERVICES_API, {
      Accept: "application/json",
      "Content-Type": "application/json",
    })
    .then((res) => res.data);

// export const publishDishes=()=>
// Axios.post(ADD_DISHES_API,{
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
// }).then(res=>res.data)

export const fetchCities = () =>
  axios
    .get(GET_CITIES_API, {
      Accept: "application/json",
      "Content-Type": "application/json",
    })
    .then((res) => res.data);

import { fetchCities } from "../request";
import { GET_CITY } from "./action_types";
import axios from "axios";

export function getCities() {
  return (dispatch) => {
    fetchCities()
      .then((res) => {
        dispatch({
          type: GET_CITY,
          payload: res,
        });
        // console.log(res, "res");
      })

      .catch((err) =>
        // dispatch({
        //   payload: err,
        // })
        console.log("error")
      );
  };
}

// export const getCities = () => async (dispatch) => {
//   try {
//     const res = await axios.get("http://localhost:5000/home/allcities");
//     console.log(res.data, "Mycity");
//     dispatch({
//       type: GET_CITY,
//       payload: res.data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

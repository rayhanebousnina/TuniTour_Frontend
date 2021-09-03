import { fetchServices } from "../request";

export function getServices() {
  return (dispatch) => {
    fetchServices()
      .then((services) =>
        dispatch({
          type: GET_SERVICE,
          payload: services,
        })
      )

      .catch((err) =>
        dispatch({
          payload: err,
        })
      );
  };
}

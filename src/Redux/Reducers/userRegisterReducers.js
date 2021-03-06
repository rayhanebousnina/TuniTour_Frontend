const initState = {
  error: null,
  message: "",
  loading: false,
  registered: false,
};

export const userRegisterReducer = (state = initState, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      state = {
        ...state,
        loading: true,
      };

      break;
    case "USER_REGISTER_SUCCESS":
      state = {
        ...state,
        loading: false,
        registered: true,
        message: action.payload.message,
      };
      console.log(state, "state");
      break;
    case "USER_REGISTER_FAILURE":
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }

  return state;
};

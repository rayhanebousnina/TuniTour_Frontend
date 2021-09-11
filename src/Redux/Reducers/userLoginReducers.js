const initialState = {
  token: {
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    contactNumber: "",
    profilePicture: "",
  },
  authenticate: false,
  authenticating: false,
};

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case " LOGIN_FAILED":
      state = {
        ...state,
        authenticating: false,
      };
      break;
    case "LOGIN_SUCCESS":
      state = {
        ...state,
        token: action.payload.token,
        authenticate: true,
      };

      break;

    case "LOGOUT_SUCCESS":
      state = {
        ...initialState,
      };
      break;
    default:
  }

  return state;
};

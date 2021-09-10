import React from "react";
import { Route, Redirect } from "react-router-dom";
const UserPrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        component={(props) => {
          const token = window.localStorage.getItem("token");
          if (token) {
            return <Component {...props} />;
          } else {
            return <Redirect to={`/login`} />;
          }
        }}
      />
    </div>
  );
};

export default UserPrivateRoute;

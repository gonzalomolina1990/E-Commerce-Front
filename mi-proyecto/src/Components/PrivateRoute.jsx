import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import isLogin from "../utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.users.usertoken);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin(token) ? <Component {...props} /> : <Redirect to="/welcome" />
      }
    />
  );
};

export default PrivateRoute;

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import isLogin from "../utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.users.usertoken);
  const admin = useSelector((state) => state.users.admin);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin(token) && admin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;

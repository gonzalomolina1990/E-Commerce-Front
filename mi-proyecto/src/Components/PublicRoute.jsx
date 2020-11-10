import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import isLogin from "../utils";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const token = useSelector((state) => state.users.usertoken);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin(token) && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;

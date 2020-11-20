import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import Navigation from "./Navigation";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/user";
import { useHistory, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: `${process.env.REACT_APP_URL}/api/v1/users/find`,
      data: {
        password: password,
        email: email,
      },
    })
      .then((res) => {
        dispatch(login(res.data));
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navigation />
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form center">
            <h3 className="mt-5 login100-form-title">Iniciar Sesión</h3>
            <div className="form-group wrap-input100  mt-5">
              <input
                className="form-control"
                type="text"
                id="email"
                name="email"
                placeholder="Ingrese un email..."
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="form-group wrap-input100">
              <input
                className="form-control"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Ingrese su contraseña..."
                id="password"
                name="password"
              />
            </div>
            <div className="container-login100-form-btn  mt-3 ml-3 mr-3">
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  handleLogin(e);
                }}
              >
                Iniciar sesión
              </button>
            </div>
          </form>
          <div className="mt-4 wrap-input100">
            <Link to={"/register"}>
              Si no tenes cuenta, podes crearte una pa gastar la kiki
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

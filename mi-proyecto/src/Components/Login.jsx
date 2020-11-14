import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import Navigation from "./Navigation";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/actions";
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
      url: "http://localhost:8000/api/v1/users/find",
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
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="mt-5">Iniciar Sesión</h3>
            <form>
              <div className="form-group mt-5">
                <label for="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder=" Ej: tunombre@mail.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  name="password"
                />
              </div>

              <button
                className="btn btn-primary mt-3"
                onClick={(e) => {
                  handleLogin(e);
                }}
              >
                Iniciar sesión
              </button>
            </form>
            <div className="mt-4">
              <Link to={"/register"}>
                Si no tenes cuenta, podes crearte una pa gastar la kiki
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

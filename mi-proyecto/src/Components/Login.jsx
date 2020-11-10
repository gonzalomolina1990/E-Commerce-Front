import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/actions";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Iniciar Sesión</h3>
            <form>
              <div className="form-group">
                <label for="email">E-mail</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Ingresa tu E-mail"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Ingresa tu password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => {
                  handleLogin(e);
                }}
              >
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { createUser } from "../redux/actions/actions";
import { useHistory, Link } from "react-router-dom";
import Navigation from "./Navigation";

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  //  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "http://localhost:8000/api/v1/users/create",
      data: {
        name: name,
        lastname: lastname,
        password: password,
        address: address,
        email: email,
        phone: phone,
      },
    })
      .then((res) => {
        dispatch(createUser(res.data));
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navigation />

      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 ">
            <form className="login100-form center" onSubmit={handleSubmit}>
              <span className="login100-form-title mt-5"> Registro </span>
              <div
                className="wrap-input100 mt-3 ml-3 mr-3"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  aria-describedby="helpId"
                  placeholder="Ingrese un nombre..."
                />
                <span className="focus-input100"></span>
                <span className="">
                  <span className=""></span>
                </span>
              </div>
              <div className="wrap-input100 mt-3 ml-3 mr-3">
                <input
                  className="input100 "
                  type="text"
                  name="lastname"
                  onChange={(e) => setLastname(e.target.value)}
                  id="lastname"
                  aria-describedby="helpId"
                  placeholder="Ingrese un apellido..."
                />
                <span className="focus-input100"></span>
                <span className="">
                  <span className=""></span>
                </span>
              </div>
              <div
                className="wrap-input100  mt-3 ml-3 mr-3"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="helpId"
                  placeholder="Ingrese un email..."
                />
                <span className="focus-input100"></span>
                <span className="">
                  <span className=""></span>
                </span>
              </div>
              <div
                className="wrap-input100  mt-3 ml-3 mr-3"
                data-validate="Password is required"
              >
                <input
                  className="input100 "
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  aria-describedby="helpId"
                  placeholder="Ingrese un password..."
                />
                <span className="focus-input100"></span>
                <span className="">
                  <span className=""></span>
                </span>
              </div>
              <div
                className="wrap-input100  mt-3 ml-3 mr-3"
                data-validate="Password is required"
              >
                <input
                  className="input100 "
                  type="text"
                  name="address"
                  onChange={(e) => setAddress(e.target.value)}
                  id="address"
                  aria-describedby="helpId"
                  placeholder="Ingrese una dirección..."
                />
                <span className="focus-input100"></span>
                <span className="">
                  <span className=""></span>
                </span>
              </div>
              <div
                className="wrap-input100  mt-3 ml-3 mr-3"
                data-validate="Password is required"
              >
                <input
                  className="input100 "
                  type="number"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  aria-describedby="helpId"
                  placeholder="Ingrese un telefono..."
                />
                <span className="focus-input100  mt-3 ml-3 mr-3"></span>
                <span className="">
                  <span className=""></span>
                </span>
              </div>
              <span className=""></span>
              <span className="">
                <span className=""></span>
              </span>

              <div className="container-login100-form-btn  mt-5 ml-3 mr-3 ">
                <button type="submit" className="btn btn-primary">
                  Registrarse
                </button>
              </div>
              <div className="text-center  mt-3 ml-3 mr-3 mb-5 w-full ">
                <span className="txt1"> ¿Ya tienes una cuenta? </span>

                <Link to={"/login"} className="btn btn-primary">
                  Inicia sesion
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

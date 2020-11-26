import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";

const PasswordReset = () => {
  const token = useSelector((state) => state.users.usertoken);
  const email = useSelector((state) => state.users.email);

  const [newPassword, setNewPassword] = useState("");
  const [actualPassword, setActualPassword] = useState("");
  const [showMessage, setShowMessage] = useState(0);

  const handleUpdatePass = async (id) => {
    const res = await axios({
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `${process.env.REACT_APP_URL}/api/v1/resetpassword`,
      data: {
        email: email,
        actualPassword: actualPassword,
        newPassword: newPassword,
      },
    })
      .then((res) => {
        setShowMessage(1);
      })
      .catch((res) => {
        setShowMessage(2);
      });
  };

  let passOkAlert = () => {
    if (showMessage === 1) {
      return (
        <Alert variant="success" className="mt-3">
          Contraseña actualizada
        </Alert>
      );
    } else if (showMessage === 2) {
      return (
        <Alert variant="danger" className="mt-3">
          La contraseña ingresada no es la correcta
        </Alert>
      );
    }
  };

  return (
    <>
      <Navigation />

      <div className="container-login100 my-5">
        <div className="wrap-login100">
          <form className="login100-form center">
            <h3 className="mt-5 login100-form-title">Actualizar contraseña</h3>
            <div className="form-group wrap-input100  mt-5">
              <input
                className="form-control"
                type="password"
                id="actualPassword"
                name="actualPassword"
                placeholder="Ingrese su contraseña actual"
                onChange={(e) => {
                  setActualPassword(e.target.value);
                }}
              />
            </div>

            <div className="form-group wrap-input100">
              <input
                className="form-control"
                type="password"
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
                placeholder="Ingrese su nueva contraseña"
                id="password"
                name="password"
              />
            </div>
            <div className="container-login100-form-btn  mt-3 ml-3 mr-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => {
                  handleUpdatePass(e);
                }}
              >
                Actualizar contraseña
              </button>
            </div>
          </form>
          <div>{passOkAlert()}</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PasswordReset;

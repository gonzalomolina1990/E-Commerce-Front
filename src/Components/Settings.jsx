import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { updateUser } from "../redux/actions/user";

const Settings = () => {
  const token = useSelector((state) => state.users.usertoken);
  const user = useSelector((state) => state.users);
  const [name, setName] = useState(user.name);
  const [lastname, setLastname] = useState(user.lastname);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);

  const dispatch = useDispatch();

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const response = axios({
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `${process.env.REACT_APP_URL}/api/v1/settings`,
      data: {
        name: name,
        lastname: lastname,
        address: address,
        phone: phone,
      },
    })
      .then((res) => {
        console.log("data:", response.data);
        dispatch(updateUser(name, lastname, address, phone));
      })
      /*       .then((res) => {
        history.push("/");
      })  */
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("users name:", user.name);
  return (
    <>
      <Navigation />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3"></div>

          <div className="col-md-6">
            <h3 className="mt-4">Actualice sus datos personales</h3>
            <form noValidate className="text-left" autoComplete="off">
              <div className="form-group mt-5">
                <label for="name">Nombre:</label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  value={name}
                  name="name"
                  placeholder="Nombre"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div className="form-group mt-5">
                <label for="lastname">Apellido:</label>
                <input
                  className="form-control"
                  type="text"
                  id="lastname"
                  value={lastname}
                  name="lastname"
                  placeholder="Apellido"
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />
              </div>

              <div className="form-group mt-5">
                <label for="address">Dirección:</label>
                <input
                  className="form-control"
                  type="text"
                  id="address"
                  value={address}
                  name="address"
                  placeholder="Teléfono"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>

              <div className="form-group mt-5">
                <label for="phone">Teléfono:</label>
                <input
                  className="form-control"
                  type="number"
                  id="phone"
                  value={phone}
                  name="phone"
                  placeholder="phone"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>

              <button
                type="button"
                className="mt-3 mb-3 btn btn-primary"
                color="primary"
                onClick={(e) => {
                  handleUpdateUser(e);
                }}
              >
                Guardar
              </button>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Settings;

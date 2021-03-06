import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import Navigation from "./Navigation";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/user";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const AdminView = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.users.usertoken);

  const handleCreateCategory = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `${process.env.REACT_APP_URL}/api/v1/categories`,
      data: {
        name: name,
        slug: slug,
      },
    })
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navigation />
      <div className="overlay"></div>

      <div className="container my-5">
        <div className="row mt-5">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h3 className="mt-4">Crear nueva categoria</h3>
            <form noValidate autoComplete="off">
              <div className="form-group mt-5">
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nombre"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div className="form-group mt-5">
                <input
                  className="form-control"
                  type="text"
                  id="slug"
                  name="slug"
                  placeholder="slug"
                  onChange={(e) => {
                    setSlug(e.target.value);
                  }}
                />
              </div>

              <button
                type="button"
                className="mt-3 form-control bg-primary text-light"
                variant="contained"
                color="primary"
                onClick={(e) => {
                  handleCreateCategory(e);
                }}
              >
                Crear Categoria
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

export default AdminView;

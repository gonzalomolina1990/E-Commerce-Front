import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import Navigation from "./Navigation";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/actions";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";

const AdminView = () => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.users.usertoken);

  const handleCreateProduct = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: "http://localhost:8000/api/v1/categories",
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
  /* 
  React.useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        url: "http://localhost:8000/api/v1/categories/",
      });
      setCategoriesList(response.data);
      console.log(response.data);
    };
    getCategories();
  }, []);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }; */

  return (
    <>
      <Navigation />

      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="mt-4">Crear nueva categoria</h3>
            <form noValidate autoComplete="off">
              <div className="form-group mt-5">
                <label for="name">Name</label>
                <input
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
                <label for="image">Slug</label>
                <input
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
                className="mt-3"
                variant="contained"
                color="primary"
                onClick={(e) => {
                  handleCreateProduct(e);
                }}
              >
                Crear Categoria
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminView;
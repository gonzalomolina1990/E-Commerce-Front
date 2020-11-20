import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import Navigation from "./Navigation";
import { useDispatch } from "react-redux";
import { login, updateProduct } from "../redux/actions/user";
import { useHistory, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const UpdateCategory = ({ slug }) => {
  const params = useParams();

  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [newSlug, setNewSlug] = useState("");

  const history = useHistory();
  const token = useSelector((state) => state.users.usertoken);

  React.useEffect(() => {
    const getCategory = async () => {
      const response = await axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        url: `${process.env.REACT_APP_URL}/api/v1/categories/${params.slug}`,
      });

      setName(response.data.name);
      setNewSlug(response.data.slug);
      setCategoryId(response.data._id);
    };
    getCategory();
  }, []);

  const handleUpdateCategory = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `${process.env.REACT_APP_URL}/api/v1/categories/${categoryId}`,
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

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h3 className="mt-4">Actualizar categoría</h3>
            <form noValidate autoComplete="off">
              <div className="form-group mt-5">
                <label for="name">Nombre</label>
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
                <label for="price">Slug </label>
                <input
                  className="form-control"
                  type="text"
                  id="slug"
                  value={newSlug}
                  name="slug"
                  placeholder="Slug"
                  onChange={(e) => {
                    setNewSlug(e.target.value);
                  }}
                />
              </div>

              <button
                type="button"
                className="mt-3 btn btn-primary"
                variant="contained"
                onClick={(e) => {
                  handleUpdateCategory(e);
                }}
              >
                Actualizar Categoria
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

export default UpdateCategory;

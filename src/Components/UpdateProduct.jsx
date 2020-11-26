import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import Navigation from "./Navigation";
import { useDispatch } from "react-redux";

import { useHistory, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const UpdateProduct = ({ id }) => {
  const params = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [slug, setSlug] = useState("");
  const [featured, setFeatured] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.users.usertoken);

  React.useEffect(() => {
    const getProduct = async () => {
      const response = await axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        url: `${process.env.REACT_APP_URL}/api/v1/products/${params.id}`,
      });

      setName(response.data.name);
      setDescription(response.data.description);
      setImage(response.data.image);
      setPrice(response.data.price);
      setStock(response.data.stock);
      setSlug(response.data.slug);
      setFeatured(response.data.featured);
    };
    getProduct();
  }, []);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `${process.env.REACT_APP_URL}/api/v1/products/${params.id}`,
      data: {
        name: name,
        description: description,
        image: image,
        price: price,
        stock: stock,
        slug: slug,
        featured: featured,
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
        <div className="row">
          <div className="col-md-3"></div>

          <div className="col-md-6">
            <h3 className="mt-5">Actualizar producto</h3>
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
                <label for="description">Descripción</label>
                <textarea
                  className="form-control"
                  type="text"
                  id="description"
                  value={description}
                  name="description"
                  placeholder="Descripción del producto"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>

              <div className="form-group mt-5">
                <label for="image">Imagen</label>
                <input
                  className="form-control"
                  type="text"
                  id="image"
                  value={image}
                  name="image"
                  placeholder="Ruta de imagen"
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
              </div>

              <div className="form-group mt-5">
                <label for="price">Precio</label>
                <input
                  className="form-control"
                  type="text"
                  id="price"
                  value={price}
                  name="price"
                  placeholder="Precio"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>

              <div className="form-group mt-5">
                <label for="price">Stock</label>
                <input
                  className="form-control"
                  type="number"
                  id="stock"
                  value={stock}
                  name="stock"
                  placeholder="Stock"
                  onChange={(e) => {
                    setStock(e.target.value);
                  }}
                />
              </div>

              <div className="form-group mt-5">
                <label for="price">Slug </label>
                <input
                  className="form-control"
                  type="text"
                  id="slug"
                  value={slug}
                  name="slug"
                  placeholder="Slug"
                  onChange={(e) => {
                    setSlug(e.target.value);
                  }}
                />
              </div>
              <div class="form-group mt-5">
                <label for="description">Destacado</label>

                <select
                  required
                  name="featured"
                  class="form-control"
                  id="exampleFormControlSelect1"
                  onChange={(e) => {
                    setFeatured(e.target.value);
                  }}
                >
                  <option disabled selected value>
                    ¿Producto destacado?
                  </option>
                  <option value={true}>Sí</option>
                  <option value={false}>No</option>
                </select>
              </div>

              <button
                type="button"
                className="mt-3 mb-3 btn btn-primary"
                variant="contained"
                color="primary"
                onClick={(e) => {
                  handleUpdateProduct(e);
                }}
              >
                Actualizar Producto
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

export default UpdateProduct;

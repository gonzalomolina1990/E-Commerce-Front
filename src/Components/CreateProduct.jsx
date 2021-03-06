import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import Navigation from "./Navigation";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const AdminView = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [slug, setSlug] = useState("");
  const [featured, setFeatured] = useState("");
  const [category, setCategory] = useState("");
  const [categoriesList, setCategoriesList] = useState(null);

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
      url: `${process.env.REACT_APP_URL}/api/v1/products/`,
      data: {
        name: name,
        description: description,
        image: image,
        price: price,
        stock: stock,
        category: category,
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

  React.useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        url: `${process.env.REACT_APP_URL}/api/v1/categories/`,
      });
      setCategoriesList(response.data);
    };
    getCategories();
  }, []);

  return (
    <>
      <Navigation />
      <div className="overlay"></div>

      <div className="container my-5">
        <div className="row mt-5">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h3 className="mt-4">Crear nuevo producto</h3>
            <form noValidate autoComplete="off">
              <div className="form-group mt-5">
                <label for="name">Name</label>
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
                <label for="description">Descripción</label>
                <textarea
                  className="form-control"
                  type="text"
                  id="description"
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
                  type="number"
                  id="price"
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
                  name="stock"
                  placeholder="Stock"
                  onChange={(e) => {
                    setStock(e.target.value);
                  }}
                />
              </div>

              <div className="form-group mt-5">
                <label for="price">Slug</label>
                <input
                  className="form-control"
                  type="text"
                  id="slug"
                  name="slug"
                  placeholder="Slug"
                  onChange={(e) => {
                    setSlug(e.target.value);
                  }}
                />
              </div>

              <div className="form-group mt-5">
                <label for="category">Categoría</label>
                <select
                  required
                  name="category"
                  class="form-control"
                  id="exampleFormControlSelect1"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  <option disabled selected value>
                    Seleccione categoria
                  </option>
                  {categoriesList &&
                    categoriesList.map((category) => {
                      return <option>{category.name}</option>;
                    })}
                </select>
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
                    Producto destacado?
                  </option>
                  <option value={true}>Sí</option>
                  <option value={false}>No</option>
                </select>
              </div>

              <button
                type="button"
                className="mt-5 form-control bg-primary text-light"
                onClick={(e) => {
                  handleCreateProduct(e);
                }}
              >
                Crear Producto
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

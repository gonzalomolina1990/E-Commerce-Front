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
      url: "http://localhost:8000/api/v1/products/",
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
        url: "http://localhost:8000/api/v1/categories/",
      });
      setCategoriesList(response.data);
      console.log(response.data);
    };
    getCategories();
  }, []);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <Navigation />

      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="mt-4">Crear nuevo producto</h3>
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
                <label for="description">Descripción</label>
                <textarea
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
                  type="text"
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
                <label for="description">Categoría</label>

                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                  <Form.Control
                    as="select"
                    multiple
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  >
                    {categoriesList &&
                      categoriesList.map((category) => {
                        return <option>{category.name}</option>;
                      })}
                  </Form.Control>
                </Form.Group>
              </div>

              <div className="form-group mt-5">
                <label for="description">Feautered</label>

                <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                  <Form.Control
                    as="select"
                    multiple
                    id="inlineFormCustomSelect"
                    onChange={(e) => {
                      setFeatured(e.target.value);
                    }}
                  >
                    <option value={true}>true</option>;
                    <option value={false}>false</option>;
                  </Form.Control>
                </Form.Group>
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
                Crear Producto
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminView;

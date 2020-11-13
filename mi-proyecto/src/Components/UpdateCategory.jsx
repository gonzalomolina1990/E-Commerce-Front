import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import Navigation from "./Navigation";
import { useDispatch } from "react-redux";
import { login, updateProduct } from "../redux/actions/actions";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";

const UpdateCategory = () => {
  const categoryToUpdate = useSelector((state) => state.products);

  const [name, setName] = useState(categoryToUpdate.name);
  const [description, setDescription] = useState(categoryToUpdate.description);
  const [image, setImage] = useState(categoryToUpdate.image);
  const [price, setPrice] = useState(categoryToUpdate.price);
  const [stock, setStock] = useState(categoryToUpdate.stock);
  const [slug, setSlug] = useState(categoryToUpdate.slug);
  const [featured, setFeatured] = useState(categoryToUpdate.featured);
  const [product, setProduct] = useState(null);

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
        url: "http://localhost:8000/api/v1/products/",
      });
      setProduct(response.data);
      console.log(response.data);
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
      url: `http://localhost:8000/api/v1/products/${categoryToUpdate._id}`,
      data: {
        name: name,
        description: description,
        image: image,
        price: price,
        stock: stock,
        slug: slug,
      },
    })
      .then((res) => {
        history.push("/");
        dispatch(updateProduct(categoryToUpdate));
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
          <div className="col">
            <h3 className="mt-4">Actualizar producto</h3>
            <form noValidate autoComplete="off">
              <div className="form-group mt-5">
                <label for="name">Nombre</label>
                <input
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

              <div className="form-group mt-5">
                <label for="description">Featured</label>

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
                  handleUpdateProduct(e);
                }}
              >
                Actualizar Producto
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateCategory;

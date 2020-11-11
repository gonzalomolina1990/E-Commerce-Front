import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/actions";
import { useHistory } from "react-router-dom";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

const AdminView = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const handleCreateProduct = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "http://localhost:8000/api/v1/products/",
      data: {
        name: name,
        description: description,
        image: image,
        price: price,
        category: category,
      },
    })
      .then((res) => {
        dispatch(login(res.data));
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="mt-4">Iniciar Sesión</h3>
            <form className={classes.margin} noValidate autoComplete="off">
              <div className="form-group mt-5">
                <InputLabel htmlFor="email">Name</InputLabel>
                <Input
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
                <InputLabel htmlFor="email">Description</InputLabel>
                <Input
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
                <InputLabel htmlFor="email">Image</InputLabel>
                <Input
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
                <InputLabel htmlFor="email">Price</InputLabel>
                <Input
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
                <InputLabel htmlFor="email">Category</InputLabel>
                <Input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Categoría"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />
              </div>

              <Button
                type="button"
                className="mt-3"
                variant="contained"
                color="primary"
                onClick={(e) => {
                  handleCreateProduct(e);
                }}
              >
                Crear Producto
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminView;

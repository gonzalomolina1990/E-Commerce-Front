import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Navigation from "./Navigation";
import { useDispatch } from "react-redux";
import { updateProduct } from "../redux/actions/actions";
import { saveProducts, deleteProduct } from "../redux/actions/productsActions";
import { useHistory, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const AdminProductView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.users.usertoken);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        headers: {
          "Content-type": "aplication/json",
          Authorization: `Bearer ${token}`,
        },
        url: "http://localhost:8000/api/v1/products/",
      });
      dispatch(saveProducts(response.data));
    };
    getProducts();
  }, []);

  const handleDeleteProduct = (id) => {
    const response = axios({
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `http://localhost:8000/api/v1/products/${id}`,
    });
    dispatch(deleteProduct(id));
    console.log(id);
  };

  /*   const handleUpdateProductEvent = (e) => {
    axios({
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `http://localhost:8000/api/v1/products/${toUpdateProduct}`,
    });
  }; */

  return (
    <>
      <Navigation />

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h3 className="mt-4">Productos</h3>
            <Link
              to={"/create-product"}
              className="btn btn-success btn-lg btn-block"
            >
              Crear producto nuevo
            </Link>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Categoria</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              {products &&
                products.map((product) => {
                  return (
                    <tbody>
                      <td>{product.name}</td>
                      <td>{product.category.name}</td>
                      <td>
                        <Link to={`/update-product/${product._id}`}>
                          <button
                            className="btn btn-warning btn-sm"
                            /*                 onClick={(e) => {
                              setToUpdateProduct(product.id);
                              dispatch(updateProduct(product));
                            }} */
                          >
                            Modificar
                          </button>{" "}
                        </Link>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDeleteProduct(product._id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tbody>
                  );
                })}
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProductView;

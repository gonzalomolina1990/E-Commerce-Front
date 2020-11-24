import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Navigation from "./Navigation";
import { useDispatch } from "react-redux";
import { updateProduct } from "../redux/actions/products";
import { saveProducts, deleteProduct } from "../redux/actions/products";
import { useHistory, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Footer from "./Footer";

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
        url: `${process.env.REACT_APP_URL}/api/v1/products/`,
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
      url: `${process.env.REACT_APP_URL}/api/v1/products/${id}`,
    });
    dispatch(deleteProduct(id));
  };

  return (
    <>
      <Navigation />
      <div className="overlay"></div>

      <div className="container mt-5">
        <div className=" topDiv">
          <h3 className="mt-4">Productos</h3>
          <div className="tableStyle">
            <Link
              to={"/create-product"}
              className="btn btn-primary btn-lg btn-block mt-3"
            >
              Crear producto nuevo
            </Link>

            <table className="table table-bordered  mt-5 table-hover">
              <thead className="bg-dark text-light">
                <tr>
                  <th scope="col">Producto</th>
                  <th scope="col">Categoria</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>

              {products &&
                products.map((product) => {
                  return (
                    <tbody className="tbodyAdmin">
                      <td data-label="Producto" className="">
                        {product.name}
                      </td>
                      <td data-label="Categoria" className="">
                        {product.category.name}
                      </td>
                      <td data-label="Acciones">
                        <Link to={`/update-product/${product._id}`}>
                          <button className="btn btn-info btn-sm">
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
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminProductView;

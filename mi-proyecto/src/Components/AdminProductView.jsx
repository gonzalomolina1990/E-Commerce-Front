import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import Navigation from "./Navigation";
import { useDispatch } from "react-redux";
import { updateProduct } from "../redux/actions/actions";
import { useHistory, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const AdminProductView = () => {
  const [productsList, setProductsList] = useState(null);
  const [toDeleteProduct, setToDeleteProduct] = useState();
  const [toUpdateProduct, setToUpdateProduct] = useState();

  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.users.usertoken);

  React.useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        url: "http://localhost:8000/api/v1/products/",
      });
      setProductsList(response.data);
      console.log(response.data);
    };
    getProducts();
  }, []);

  const handleDeleteProductEvent = (e) => {
    axios({
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `http://localhost:8000/api/v1/products/${toDeleteProduct}`,
    });
  };

  const handleUpdateProductEvent = (e) => {
    axios({
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `http://localhost:8000/api/v1/products/${toUpdateProduct}`,
    });
  };

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

              {productsList &&
                productsList.map((product) => {
                  return (
                    <tbody>
                      <td>{product.name}</td>
                      <td>{product.category.name}</td>
                      <td>
                        <Link to={"/update-product"}>
                          <button
                            className="btn btn-warning btn-sm"
                            onClick={() => {
                              setToUpdateProduct(product.id);
                              handleUpdateProductEvent();
                              dispatch(updateProduct(product));
                            }}
                          >
                            Modificar
                          </button>{" "}
                        </Link>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => {
                            setToDeleteProduct(product._id);
                            handleDeleteProductEvent();
                            console.log(toDeleteProduct);
                          }}
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
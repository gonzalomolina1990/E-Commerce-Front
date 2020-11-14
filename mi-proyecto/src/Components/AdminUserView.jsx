import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Navigation from "./Navigation";
import { useDispatch } from "react-redux";
import { saveUsers } from "../redux/actions/allUsers";
import { useHistory, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const AdminProductView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.users.usertoken);
  const users = useSelector((state) => state.allUsers);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios({
        method: "GET",
        headers: {
          "Content-type": "aplication/json",
          Authorization: `Bearer ${token}`,
        },
        url: "http://localhost:8000/api/v1/users",
      });
      dispatch(saveUsers(response.data));
    };
    getUsers();
  }, []);

  /*   const handleDeleteProduct = (id) => {
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
 */
  return (
    <>
      <Navigation />

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h3 className="mt-4">Usuarios</h3>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Usuarios</th>

                  <th>Permiso</th>
                </tr>
              </thead>

              {users &&
                users.map((user) => {
                  return (
                    <tbody>
                      <td>{user.email}</td>

                      <td>
                        <Link to={"" /* `/update-product/${product._id}` */}>
                          <button className="btn btn-warning btn-sm">
                            Modificar
                          </button>{" "}
                        </Link>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={
                            "" /* () => handleDeleteProduct(product._id) */
                          }
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

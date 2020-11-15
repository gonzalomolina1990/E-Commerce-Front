import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Navigation from "./Navigation";
import { useDispatch } from "react-redux";
import { saveUsers, deleteUser } from "../redux/actions/allUsers";
import { useHistory, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const AdminProductView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.users.usertoken);
  const users = useSelector((state) => state.allUsers);
  const [admin, setAdmin] = useState("");

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

  const handleDeleteUser = (id) => {
    const response = axios({
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `http://localhost:8000/api/v1/users/${id}`,
    });
    dispatch(deleteUser(id));
    console.log(id);
  };

  const handleUpdateUser = async (id) => {
    const response = await axios({
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `http://localhost:8000/api/v1/users/${id}`,
      data: { admin: admin },
    });
    console.log(response.data);
    /*     setAdmin(response.data.admin); */
  };

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
                  <th>Acciones</th>
                  <th>Eliminar</th>
                </tr>
              </thead>

              {users &&
                users.map((user) => {
                  return (
                    <tbody>
                      <td>{user.email}</td>

                      <td>
                        <form>
                          {user.admin ? (
                            <>
                              <div className="">
                                <input
                                  className="mr-2"
                                  type="radio"
                                  name="admin"
                                  checked="true"
                                  id="admin"
                                  onChange={(e) => setAdmin(e.target.value)}
                                  value={true}
                                />
                                <label className="" for="admin">
                                  Administrador
                                </label>
                              </div>
                              <div className="">
                                <input
                                  className="mr-2"
                                  type="radio"
                                  name="admin"
                                  id="user"
                                  onChange={(e) => setAdmin(e.target.value)}
                                  value={false}
                                />
                                <label className="" for="user">
                                  Usuario
                                </label>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="">
                                <input
                                  className="mr-2"
                                  type="radio"
                                  name="admin"
                                  id="admin"
                                  onChange={(e) => setAdmin(e.target.value)}
                                  value={true}
                                />
                                <label className="" for="admin">
                                  Administrador
                                </label>
                              </div>
                              <div className="">
                                <input
                                  className="mr-2"
                                  type="radio"
                                  name="admin"
                                  checked="true"
                                  id="user"
                                  onChange={(e) => setAdmin(e.target.value)}
                                  value={false}
                                />
                                <label className="" for="user">
                                  Usuario
                                </label>
                              </div>
                            </>
                          )}

                          <button
                            className="btn btn-success btn-sm"
                            type="button"
                            onClick={() => handleUpdateUser(user._id)}
                          >
                            Guardar
                          </button>
                        </form>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDeleteUser(user._id)}
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

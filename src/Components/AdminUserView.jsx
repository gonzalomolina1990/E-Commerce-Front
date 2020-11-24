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
import Footer from "./Footer";

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
        url: `${process.env.REACT_APP_URL}/api/v1/users`,
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
      url: `${process.env.REACT_APP_URL}/api/v1/users/${id}`,
    });
    dispatch(deleteUser(id));
  };

  const handleUpdateUser = async (id) => {
    const response = await axios({
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `${process.env.REACT_APP_URL}/api/v1/users/${id}`,
      data: { admin: admin },
    });

    /*     setAdmin(response.data.admin); */
  };

  return (
    <>
      <Navigation />
      <div className="overlay"></div>

      <div className="container mt-5">
        <div className="topDiv">
          <h3 className="mt-4">Usuarios</h3>
          <div className="tableStyle">
            <table className="mt-4 text-left table table-bordered table-hover">
              <thead className="bg-dark text-light">
                <tr>
                  <th scope="col">Usuario</th>
                  <th scope="col">Acciones</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>

              {users &&
                users.map((user) => {
                  return (
                    <tbody className="tbodyAdmin">
                      <td data-label="Usuarios">{user.email}</td>

                      <td data-label="Acciones">
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
                            className="btn btn-primary btn-sm"
                            type="button"
                            onClick={() => handleUpdateUser(user._id)}
                          >
                            Guardar
                          </button>
                        </form>
                      </td>
                      <td data-label="Eliminar">
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
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminProductView;

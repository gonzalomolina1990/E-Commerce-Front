import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import Navigation from "./Navigation";
import { useDispatch } from "react-redux";
import { listCategories, deleteCategory } from "../redux/actions/category";
import { useHistory, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Footer from "./Footer";

const AdminCategoryView = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.users.usertoken);
  const categories = useSelector((state) => state.categories);

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
      dispatch(listCategories(response.data));
    };
    getCategories();
  }, []);

  const handleDeleteCategoryEvent = (id) => {
    const response = axios({
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `${process.env.REACT_APP_URL}/api/v1/categories/${id}`,
    });

    dispatch(deleteCategory(id));
  };
  //
  return (
    <>
      <Navigation />
      <div className="overlay"></div>

      <div className="container my-5">
        <div className=" topDiv">
          <h3 className="mt-4">Categorías</h3>
          <div className="tableStyle">
            <Link
              to={"/create-category"}
              className="btn btn-primary btn-lg btn-block mt-4"
            >
              Crear categoría nueva
            </Link>
            <table className="table table-bordered mt-5 table-hover">
              <thead className="bg-dark text-light">
                <tr>
                  <th scope="col">Categoria</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>

              {categories &&
                categories.map((category) => {
                  return (
                    <tbody className="tbodyAdmin">
                      <td data-label="Categoria" className="">
                        {category.name}
                      </td>
                      <td data-label="Acciones">
                        <Link to={`/update-category/${category.slug}`}>
                          <button className="btn btn-info btn-sm mr-2 ">
                            Modificar
                          </button>
                        </Link>
                        <button
                          className="btn btn-danger btn-sm "
                          onClick={() => {
                            handleDeleteCategoryEvent(category._id);
                          }}
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

export default AdminCategoryView;

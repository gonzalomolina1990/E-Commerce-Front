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
import Categories from "./Categories";

const AdminCategoryView = () => {
  const [categoriesList, setCategoriesList] = useState(null);
  const [toDeleteCategory, setToDeleteCategory] = useState();

  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.users.usertoken);

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

  const handleDeleteCategoryEvent = (e) => {
    axios({
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `http://localhost:8000/api/v1/category/${toDeleteCategory}`,
    });
  };

  return (
    <>
      <Navigation />

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h3 className="mt-4">Categorías</h3>
            <Link
              to={"/create-category"}
              className="btn btn-success btn-lg btn-block"
            >
              Crear categoría nueva
            </Link>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Categoria</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              {categoriesList &&
                categoriesList.map((category) => {
                  return (
                    <tbody>
                      <td>{category.name}</td>
                      <td>
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={console.log("modificar category")}
                        >
                          Modificar
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => {
                            setToDeleteCategory(category._id);
                            handleDeleteCategoryEvent();

                            console.log(toDeleteCategory);
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

export default AdminCategoryView;

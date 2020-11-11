import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import Navbar from "./Navbar";

const Categories = () => {
  const [categoriesList, setCategoriesList] = React.useState(null);

  React.useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/v1/categories/"
      );
      setCategoriesList(response.data);
      console.log(response.data);
    };
    getCategories();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="mt-4"> </h3>
            <h3>categories</h3>
            {categoriesList &&
              categoriesList.map((category) => {
                return <p>{category.name}</p>;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;

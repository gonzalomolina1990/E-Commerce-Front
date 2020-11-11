import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Navigation from "./Navigation";

const Categories = () => {
  const [categoriesList, setCategoriesList] = React.useState(null);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/v1/categories"
      );
      setCategoriesList(response.data);
      console.log(response.data);
    };
    getCategories();
  }, []);

  return (
    <>
      <Navigation />

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

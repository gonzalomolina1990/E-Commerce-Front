import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Navigation from "./Navigation";
import { eachCategoryList, listCategories } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import EachCategory from "./Category";

const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        url: "http://localhost:8000/api/v1/categories/",
      });
      dispatch(listCategories(response.data));
      console.log(response.data);
    };
    getCategories(); //sacar populate
  }, []);

  return (
    <>
      <Navigation />

      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="mt-4"> </h3>
            <h3>categories</h3>
            {categories &&
              categories.map((category) => {
                return (
                  <Link to={`/categories/${category.slug}`}>
                    {category.name}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;

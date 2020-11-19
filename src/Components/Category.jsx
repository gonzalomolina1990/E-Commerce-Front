import React, { useEffect, useState } from "react";
import "../App.css";
import Navigation from "./Navigation";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Category = ({ slug }) => {
  const dispatch = useDispatch();
  const params = useParams();

  const [category, setCategory] = useState({});

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios({
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        url: `${process.env.REACT_APP_URL}/api/v1/categories/${params.slug}`,
      });
      console.log(response.data);
      setCategory(response.data);
    };
    getCategory();
  }, [params.slug]);

  return (
    <>
      <Navigation />

      <div className="container">
        <div className="row">
          {category.products &&
            category.products.map((product) => {
              return (
                <>
                  <div className="col-md-3">
                    <ProductCard product={product}></ProductCard>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Category;
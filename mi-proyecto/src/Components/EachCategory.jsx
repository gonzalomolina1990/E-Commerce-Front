import React from "react";
import "../App.css";
import Navigation from "./Navigation";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import { eachCategoryList } from "../redux/actions/actions";

const EachCategory = () => {
  const [productsByCat, setProductsByCat] = React.useState(null);
  const dispatch = useDispatch();
  dispatch(eachCategoryList({}));

  React.useEffect(() => {
    const getProductsByCategory = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/v1/categories/:slug"
      );
      setProductsByCat(response.data);
      console.log(response.data);
    };
    getProductsByCategory();
  }, []);

  return (
    <>
      <Navigation />
      <div className="container mt-5">
        <h3 className="mt-5">Estamos en each category</h3>

        <div className="row">
          {productsByCat &&
            productsByCat.map((product) => {
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

export default EachCategory;

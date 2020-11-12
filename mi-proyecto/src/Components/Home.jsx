import React from "react";
import "../App.css";
import Navigation from "./Navigation";
import axios from "axios";
import ImgMediaCard from "./ProductCard";

const Home = () => {
  const [productsList, setProductsList] = React.useState(null);

  React.useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/v1/products?featured=true"
      );
      setProductsList(response.data);
      console.log(response.data);
    };
    getProducts();
  }, []);

  return (
    <>
      <Navigation />
      <div className="container">
        <h3 className="mt-4">PRODUCTOS</h3>

        <div className="row">
          {productsList &&
            productsList.map((product) => {
              return (
                <>
                  <div className="col-md-3">
                    <ImgMediaCard product={product}></ImgMediaCard>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;

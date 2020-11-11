import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import axios from "axios";

const Home = () => {
  const [productsList, setProductsList] = React.useState(null);

  React.useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/v1/products/"
      );
      setProductsList(response.data);
    };
    getProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>HOME</h3>
            {console.log(productsList)}
            {productsList &&
              productsList.map((product) => {
                <p>product.name</p>;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import "../App.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import ProductCard from "./ProductCard";

const Home = () => {
  const [productsList, setProductsList] = React.useState(null);

  React.useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/v1/products?featured=true`
      );
      setProductsList(response.data);
    };
    getProducts();
  }, []);

  return (
    <>
      <Navigation />
      <div className="">
        <Carousel>
          <Carousel.Item>
            <div className="d-block w-100 banner1"></div>
            <Carousel.Caption className="bannerBox">
              <h2>EL FUTURO ES HOY</h2>
              <h5>¡Lo último en tecnología a tu alcance!</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-block w-100 banner2"></div>

            <Carousel.Caption className="bannerBox">
              <h2>TU COCINA IDEAL</h2>
              <h5>Para equiparla como más te guste.</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-block w-100 banner3"></div>

            <Carousel.Caption className="bannerBox">
              <h2>ENVIOS SIN CARGO A TODO EL PAIS</h2>
              <h5>Y podés pagar con tu medio de pago favorito.</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="container">
        <h3 className="mt-4">Productos destacados</h3>

        <div className="row mt-4">
          {productsList &&
            productsList.map((product) => {
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
      <Footer />
    </>
  );
};

export default Home;

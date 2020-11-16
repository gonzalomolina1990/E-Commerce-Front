import React, { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Navigation from "./Navigation";
import CardGroup from "react-bootstrap/CardGroup";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

export default function Cart() {
  const [product, setProduct] = React.useState("");
  const params = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/v1/product/${params.slug}`
      );

      setProduct(response.data);
      console.log(response.data);
    };
    getProduct();
  }, []);

  return (
    <>
      <Navigation />

      <div className="container mt-8">
        <h2 className="text-left mt-5 mb-2">Carrito</h2>
        <hr className="mb-5" />
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="https://api.carlosgutierrez.com.uy/fotos/fotos/80444/principal-lg-2x.jpg"
                  className="img-fluid"
                  alt={""}
                  onClick={handleShow}
                />
              </div>
              <div className="col-md-6">
                <h4 className=" text-left">Nombre del producto</h4>
                <p className="text-left mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque unde adipisci, veniam harum qui tempore quis, rerum rem
                  blanditiis et quam.
                </p>
                <div className="cartButtons">
                  <span className="badge badge-pill badge-light addingPill">
                    <span className="mr-3 addingButton">+</span> 12
                    <span className="ml-3 addingButton">-</span>
                  </span>
                  <span className="ml-4 trashButton">
                    <i class="far fa-trash-alt"></i>
                  </span>
                  <span className="priceCartResponsive ml-4">
                    <sup>U$S</sup> 10
                  </span>
                </div>
              </div>
              <div className="col-2">
                <h3 className="priceCart">
                  <sup>U$S</sup> 10
                </h3>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Resumen del pedido</h5>
                <div className="d-flex justify-content-between cartTextBox">
                  <span className="card-text ">Nombre del producto</span>{" "}
                  <span className="card-text">U$S 10</span>
                </div>
              </div>
              <div className="card-footer text-muted">
                <span className="totalPriceCart">Total del pedido: U$S 15</span>
              </div>
            </div>
            <Button className="btn btn-warning mt-2" block>
              <i class="fas fa-cart-plus"></i> Proceder al pago
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

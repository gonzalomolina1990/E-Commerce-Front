import React, { useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Cart() {
  const [product, setProduct] = React.useState("");
  const params = useParams();
  const [show, setShow] = useState(false);
  const cart = useSelector((state) => state.cart);

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

  const totalProduct = cart.map((item) => {
    const totalUnit = item.product.price * item.quantity;
    return totalUnit;
  });

  const total = totalProduct.reduce((a, b) => a + b, 0);

  return (
    <>
      <Navigation />

      <div className="container mt-8">
        <h2 className="text-left mt-5 mb-2">Carrito</h2>
        <hr className="mb-5" />
        <div className="row">
          <div className="col-md-9">
            {cart &&
              cart.map((item) => {
                return (
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        src={item.product.image}
                        className="img-fluid"
                        alt={""}
                        onClick={handleShow}
                      />
                    </div>
                    <div className="col-md-6">
                      <h4 className=" text-left">{item.product.name}</h4>
                      <p className="text-left mt-3">
                        {item.product.description}
                      </p>
                      <div className="cartButtons">
                        <span className="badge badge-pill badge-light addingPill">
                          <span className="mr-3 addingButton">+</span>{" "}
                          {item.quantity}
                          <span className="ml-3 addingButton">-</span>
                        </span>
                        <span className="ml-4 trashButton">
                          <i class="far fa-trash-alt"></i>
                        </span>
                        <span className="priceCartResponsive ml-4">
                          <sup>U$S</sup> {item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>
                    <div className="col-2">
                      <h3 className="priceCart">
                        <sup>U$S</sup> {item.product.price * item.quantity}
                      </h3>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Resumen del pedido</h5>
                {cart &&
                  cart.map((item) => {
                    return (
                      <>
                        <div className="d-flex justify-content-between cartTextBox">
                          <span className="card-text ">
                            {item.product.name} ({item.quantity})
                          </span>
                          <span className="card-text">
                            U$S {item.product.price * item.quantity}
                          </span>
                        </div>
                        <hr />
                      </>
                    );
                  })}
              </div>
              <div className="card-footer text-muted">
                <span className="totalPriceCart">
                  Total del pedido: U$S {total}
                </span>
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

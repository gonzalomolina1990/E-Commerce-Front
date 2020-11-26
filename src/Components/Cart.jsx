import React, { useState } from "react";
import axios from "axios";

import { useParams, Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  clearProduct,
  removeProduct,
  clearCart,
} from "../redux/actions/cart";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Cart() {
  const dispatch = useDispatch();
  const [product, setProduct] = React.useState("");
  const params = useParams();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const cart = useSelector((state) => state.cart);
  const token = useSelector((state) => state.users.usertoken);
  const user = useSelector((state) => state.users);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_URL}/api/v1/product/${params.slug}`
      );

      setProduct(response.data);
    };
    getProduct();
  }, []);

  const totalProduct = cart.map((item) => {
    const totalUnit = item.product.price * item.quantity;
    return totalUnit;
  });

  const total = totalProduct.reduce((a, b) => a + b, 0);

  const handlePurchase = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `${process.env.REACT_APP_URL}/api/v1/order/`,
      data: {
        cart: cart,
        totalPrice: total,
        buyer: user.name + " " + user.lastname,
      },
    })
      .then((res) => {
        history.push("/successful-purchase");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navigation />

      <div className="container topDiv my-5">
        <h2 className="text-left mt-5 mb-2">Carrito</h2>
        <hr className="mb-3" />
        <div className="row">
          <div className="col-md-9">
            {" "}
            {cart &&
              cart.map((item) => {
                return (
                  <div className="mt-5">
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
                        <p className="text-left mt-3 mb-5">
                          {item.product.description}
                        </p>
                        <div className="cartButtons">
                          <span className="badge badge-pill badge-light addingPill">
                            <span
                              className="mr-3 addingButton"
                              onClick={() => {
                                dispatch(addProduct(item.product));
                              }}
                            >
                              +
                            </span>{" "}
                            {item.quantity}
                            <span
                              className="ml-3 addingButton"
                              onClick={() => {
                                dispatch(removeProduct(item.product._id));
                              }}
                            >
                              -
                            </span>
                          </span>
                          <span className="ml-4 trashButton">
                            <i
                              class="far fa-trash-alt"
                              onClick={() =>
                                dispatch(clearProduct(item.product._id))
                              }
                            ></i>
                          </span>
                          <span className="priceCartResponsive ml-4">
                            <sup>U$S</sup> {item.product.price * item.quantity}
                          </span>
                        </div>
                      </div>
                      <div className="col-2">
                        {" "}
                        <span className="priceCart ml-4">
                          <sup>U$S</sup> {item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="col-md-3">
            <div className="card text-center mt-5">
              <div className="card-body">
                <h5 className="card-title mb-4">Resumen del pedido</h5>
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
            {user && user.usertoken ? (
              <Button
                className="btn btn-primary mt-2"
                onClick={(e) => {
                  return handlePurchase(e), dispatch(clearCart([]));
                }}
                block
              >
                <i
                  class="fas fa-cart-plus mr-2 "
                  style={{ color: "white" }}
                ></i>{" "}
                Proceder al pago
              </Button>
            ) : (
              <Link to={"/login"}>
                <Button className="btn btn-primary mt-2" block>
                  <i class="fas fa-cart-plus"></i> Proceder al pago
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

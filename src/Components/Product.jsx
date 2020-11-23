import React, { useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Navigation from "./Navigation";
import CardGroup from "react-bootstrap/CardGroup";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { addProduct } from "../redux/actions/cart";
import { useSelector, useDispatch } from "react-redux";
import Footer from "./Footer";

export default function Product() {
  const dispatch = useDispatch();
  const [product, setProduct] = React.useState("");
  const params = useParams();
  const [show, setShow] = useState(false);
  const cart = useSelector((state) => state.cart);

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
  let stockAlert = () => {
    if (0 < product.stock && product.stock < 10) {
      return (
        <Alert variant="danger" className="mt-3">
          Últimas {product.stock} unidades!!
        </Alert>
      );
    } else if (product.stock >= 10) {
      return (
        <Alert variant="success" className="mt-3">
          Quedan {product.stock} unidades.
        </Alert>
      );
    } else {
      return (
        <Alert variant="warning" className="mt-3">
          Actualmente no tenemos este producto en stock.
        </Alert>
      );
    }
  };

  return (
    <>
      <Navigation />

      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="productModal"
        show={show}
        onHide={handleClose}
      >
        <Modal.Body>
          <img
            centered
            src={product.image}
            alt={product.name}
            className="imageModal"
          />
        </Modal.Body>
      </Modal>

      <div className="container mt-5">
        <div className="row topDiv">
          <div className="col-md-5">
            {" "}
            <img
              src={product.image}
              className="img-fluid"
              alt={product.name}
              onClick={handleShow}
            />
          </div>
          <div className="col-md-7">
            <h3>{product.name}</h3>
            <small className="text-muted">
              {product.category && product.category.name}
            </small>

            <p>{product.description}</p>

            <hr />

            <div className="row align-items-center">
              <div className="col-4">
                <h2 className="priceStyles">
                  <sup>U$S</sup> {product.price}
                </h2>
              </div>

              <div className="col-8">{stockAlert()}</div>

              <p className="p-4">
                Comprá seguro con la garantía de ElectroHack. Recibe el producto
                que esperabas o te devolvemos tu dinero.
              </p>
            </div>
            {product.stock > 0 && (
              <Button
                className="btn btn-primary"
                block
                onClick={() => {
                  dispatch(addProduct(product));
                }}
              >
                <i class="fas fa-cart-plus mr-3" style={{ color: "white" }}></i>{" "}
                Agregar al carrito
              </Button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

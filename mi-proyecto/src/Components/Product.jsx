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
        `http://localhost:8000/api/v1/product/${params.slug}`
      );

      setProduct(response.data);
      /*   console.log(response.data); */
    };
    getProduct();
  }, []);

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
        <div className="row">
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
            <span className="badge badge-pill badge-light addingPill">
              <span className="mr-3 addingButton">-</span> 1
              <span className="ml-3 addingButton">+</span>
            </span>
            <hr />

            <div className="row">
              <div className="col-4">
                <h1>
                  <sup>U$S</sup> {product.price}
                </h1>
              </div>

              <div></div>
              <div className="col-8">
                {" "}
                {product.stock > 0 ? (
                  <Alert variant="danger" className="mt-3">
                    Últimas {product.stock} unidades!!
                  </Alert>
                ) : (
                  <Alert variant="warning" className="mt-3">
                    Actualmente no tenemos este producto en stock
                  </Alert>
                )}
              </div>

              <p className="p-4">
                Disponible a un precio menor de otros vendedores que podrían no
                ofrecer envío. Comprá seguro con la garantía de ElectroHack
              </p>
            </div>
            <Button
              className="btn btn-warning"
              block
              onClick={() => {
                dispatch(addProduct(product));
              }}
            >
              <i class="fas fa-cart-plus"></i> Agregar al carrito
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

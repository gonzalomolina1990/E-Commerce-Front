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
            <hr />
            <div className="row">
              <div className="col-4">
                <h1>
                  <sup>U$S</sup> {product.price}
                </h1>
              </div>
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
            <Button className="btn btn-warning" block>
              <i class="fas fa-cart-plus"></i> Agregar al carrito
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

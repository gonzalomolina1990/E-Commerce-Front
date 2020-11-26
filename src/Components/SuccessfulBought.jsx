import React, { useState } from "react";
import Navigation from "./Navigation";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import Footer from "./Footer";
export default function SuccessfulBought() {
  return (
    <>
      <Navigation />
      <div className="container topDiv">
        <div className="row topDiv">
          <div className="col-md-6 text-left">
            <Alert variant="success" className="marginCards">
              <Alert.Heading>¡Gracias por elegirnos!</Alert.Heading>
              <p>
                Su compra se ha realizado con éxito. Su pedido será entregado en
                las próximas 72 horas (o no).
              </p>
              <hr />
              <p className="mb-0">
                No dude en no contactarnos para rastrear su pedido.
              </p>
            </Alert>
          </div>
          <div className="col-md-6 ">
            <Card className="marginCards">
              <Card.Body>
                <Card.Title>
                  ¡Descubre nuestros productos destacados!
                </Card.Title>
                <Card.Text>¡Envío gratis a todo el país! </Card.Text>
                <Button variant="success" as={Link} to={"/"}>
                  Continúa comprando
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="middleDiv"></div>
      <Footer />
    </>
  );
}

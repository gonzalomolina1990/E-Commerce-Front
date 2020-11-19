import React, { useState } from "react";
import Navigation from "./Navigation";
import Alert from "react-bootstrap/Alert";

export default function SuccessfulBought() {
  return (
    <>
      <Navigation />
      <div className="container mt-5">
        <div className="raw">
          <div className="col-lg-6 text-left">
            <Alert variant="success">
              <Alert.Heading>¡Gracias por elegirnos!</Alert.Heading>
              <p>
                Su compra se ha realizado con éxito. Su pedido será entregado en
                las próximas 72 horas.
              </p>
              <hr />
              <p className="mb-0">
                No dude contactarnos para rastrear su pedido.
              </p>
            </Alert>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </>
  );
}

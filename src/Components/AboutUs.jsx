import React, { useState } from "react";
import Navigation from "./Navigation";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import Footer from "./Footer";
export default function AboutUs() {
  return (
    <>
      <Navigation />
      <div className="categoriesBanner">
        <h1>Sobre nosotros</h1>
      </div>
      <div className="container topDiv">
        <div className="row topDiv">
          <div className="col-md-6 ">
            Dedicados, fuertes, emprendedores, trabajadores. La pasion por la
            programacion es algo que trasciende las barreras de lo racional, y
            nos permite trasladar nuestra mente a un mundo en el que no podemos
            salir. Estamos encapsulados frente a una computadora pero haciendo
            una inmersion a traves de la pantalla, que no solo nos atrapa, si no
            nos lleva a otra dimension.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

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
      <div className="container ">
        <div className="topDiv card rowStyles">
          <div className="row no-gutters ">
            <div className="col-md-6 ">
              <p className="text-left pt-5 pb-5 pl-5 pr-5 ">
                Somos un grupo de estudiantes que realizamos este proyecto como
                trabajo final de nuestro curso. Buscamos nuestra primera
                experiencia laboral, siendo este proyecto el puntapié inicial
                para poder seguir formándonos como programadores. Nuestra idea
                es seguir mejorandolo, agregando funcionalidades y haciendo que
                su rendimiento sea más óptimo. Por cualquier consulta u
                oportunidad de mejora, nos pueden contactar en los siguientes
                links. ¡Muchas gracias por su tiempo!
              </p>
              <div className="d-flex justify-content-between mr-5 ml-5 mb-5">
                <Link
                  to={{ pathname: "https://www.linkedin.com/in/agustinrivero" }}
                  target="_blank"
                >
                  Agustin Rivero
                </Link>
                <Link
                  to={{
                    pathname: "https://www.linkedin.com/in/gonzalomolina1990",
                  }}
                  target="_blank"
                >
                  Gonzalo Molina
                </Link>
                <Link
                  to={{ pathname: "https://www.linkedin.com/in/soledadsienra" }}
                  target="_blank"
                >
                  Soledad Sienra
                </Link>
              </div>
            </div>
            <div className="col-md-6 bkImg"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

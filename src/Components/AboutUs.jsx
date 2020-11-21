import React, { useState } from "react";
import Navigation from "./Navigation";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

import Footer from "./Footer";
export default function AboutUs() {
  return (
    <>
      <Navigation />
      <div className="categoriesBanner">
        <h1>Sobre nosotros</h1>
      </div>
      <div className="container">
        <Card className="mt-5">
          <Card.Img
            variant="top"
            src="https://electrohack.vercel.app/img/team.jpg"
          />
          <Card.Body>
            <Card.Text>
              Somos un grupo de estudiantes que realizamos este proyecto como
              trabajo final de nuestro curso. Buscamos nuestra primera
              experiencia laboral, siendo este proyecto el puntapié inicial para
              poder seguir formándonos como programadores. Utilizamos la una
              metodología agil, con reuniones diarias y estableciéndonos plazos
              para testear nuestra app.
            </Card.Text>
            <Card.Text>
              Nuestra idea es seguir mejorandolo, agregando funcionalidades y
              haciendo que su rendimiento sea más óptimo. Por cualquier consulta
              u oportunidad de mejora, nos pueden contactar en los siguientes
              links. ¡Muchas gracias por su tiempo!
            </Card.Text>
            <div className="d-flex justify-content-between mt-5 mr-5 ml-5  ">
              <Link
                to={{ pathname: "https://www.linkedin.com/in/agustinrivero" }}
                target="_blank"
                className="aboutUsLinks"
              >
                Gonzalo Molina
              </Link>
              <Link
                to={{
                  pathname: "https://www.linkedin.com/in/gonzalomolina1990",
                }}
                target="_blank"
                className="aboutUsLinks"
              >
                Soledad Sienra
              </Link>
              <Link
                to={{ pathname: "https://www.linkedin.com/in/soledadsienra" }}
                target="_blank"
                className="aboutUsLinks"
              >
                Agustin Rivero
              </Link>
            </div>
          </Card.Body>
        </Card>

        <div className="mt-5 text-left">
          <div className="row">
            <div className="col-md-6 arrowStyle">
              <ul>
                <h5 className="mt-5 mb-4">
                  Este sitio web fue desarrollado desde cero, utilizando las
                  siguientes tecnologías:
                </h5>
                <li className="mt-2">
                  <i class="fas fa-chevron-circle-right "></i> React.js
                </li>
                <li className="mt-2">
                  <i class="fas fa-chevron-circle-right "></i> Node.js
                </li>
                <li className="mt-2">
                  <i class="fas fa-chevron-circle-right "></i> MongoDB
                </li>
                <li className="mt-2">
                  <i class="fas fa-chevron-circle-right "></i> Redux
                </li>
                <li className="mt-2">
                  <i class="fas fa-chevron-circle-right "></i> Bootstrap
                </li>
                <li className="mt-2">
                  <i class="fas fa-chevron-circle-right "></i> JWT para validar
                  los token
                </li>
                <li className="mt-2">
                  <i class="fas fa-chevron-circle-right "></i> Bcrypt para
                  encriptar las contraseñas
                </li>
              </ul>
            </div>
            <div className="col-md-6 arrowStyle">
              <ul>
                <h5 className="mt-5 mb-4">
                  Actualmente nos encontramos trabajando en las siguientes
                  funcionalidades:
                </h5>
                <li className="mt-2">
                  <i class="fas fa-long-arrow-alt-right "></i> Efectuar un
                  método de pago
                </li>
                <li className="mt-2">
                  <i class="fas fa-long-arrow-alt-right "></i> Buscador de
                  productos
                </li>
                <li className="mt-2">
                  <i class="fas fa-long-arrow-alt-right "></i> Cargar imágenes a
                  AWS S3
                </li>
                <li className="mt-2">
                  <i class="fas fa-long-arrow-alt-right "></i> Categorizar por
                  marcas
                </li>
                <li className="mt-2">
                  <i class="fas fa-long-arrow-alt-right "></i> Reestablecer la
                  contraseña
                </li>
                <li className="mt-2">
                  <i class="fas fa-long-arrow-alt-right "></i> Seguir puliendo
                  el front-end (responsive)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

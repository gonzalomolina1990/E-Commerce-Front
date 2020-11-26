import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="footer text-left">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4 className="mt-5">Casa central</h4>
              <p>Hack Academy pegadito a la estación.</p>
              <p>Lun. a Vie. 09:00 - 18:00hs.</p>
              <p>Sab. no molestar.</p>
              <p>Estacionamiento por la paralela que hay lugar.</p>
            </div>

            <div className="col-md-3">
              <h4 className="mt-5">Sobre Nosotros</h4>
              <p>
                <Link to={"/about-us"}>Quienes somos</Link>
              </p>

              <p>
                <Link
                  to={{
                    pathname: "https://www.linkedin.com/in/agustinrivero",
                  }}
                  target="_blank"
                >
                  Agustin Rivero
                </Link>
              </p>
              <p>
                <Link
                  to={{
                    pathname: "https://www.linkedin.com/in/gonzalomolina1990",
                  }}
                  target="_blank"
                >
                  Gonzalo Molina
                </Link>
              </p>
              <p>
                <Link
                  to={{
                    pathname: "https://www.linkedin.com/in/soledadsienra",
                  }}
                  target="_blank"
                >
                  Soledad Sienra
                </Link>
              </p>
            </div>

            <div className="col-md-3">
              <h4 className="mt-5">Testea nuestro sitio</h4>
              <p>
                Ingresa{" "}
                <Link to={"/about-us"} style={{ textDecoration: "underline" }}>
                  aquí
                </Link>{" "}
                para resetear la base de datos y loguearte con los usuarios de
                prueba.
              </p>
            </div>
            <div className="col-md-3">
              <h4 className="mt-5">
                Charly Gut <small>©</small>
              </h4>
              <p>Todos los derechos reservados.</p>
            </div>
          </div>
          {/*  <div className="d-flex">
            <i className="fas fa-atom iconFooter"></i>
          </div> */}
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="footer text-left">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <ul className="mt-5">
                <h4>Casa central</h4>
                <li>Hack Academy pegadito a la estación.</li>
                <li>Lun. a Vie. 09:00 - 18:00hs.</li>
                <li>Sab. no molestar.</li>
                <li>Estacionamiento por la paralela que hay lugar.</li>
              </ul>
            </div>

            <div className="col-md-3">
              <ul className="mt-5">
                <h4>Sobre Nosotros</h4>
                <li>
                  <Link to={"/about-us"}>Quienes somos</Link>
                </li>

                <li>
                  <Link
                    to={{
                      pathname: "https://www.linkedin.com/in/agustinrivero",
                    }}
                    target="_blank"
                  >
                    Agustin Rivero
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "https://www.linkedin.com/in/gonzalomolina1990",
                    }}
                    target="_blank"
                  >
                    Gonzalo Molina
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "https://www.linkedin.com/in/soledadsienra",
                    }}
                    target="_blank"
                  >
                    Soledad Sienra
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3">
              <ul className="mt-5">
                <h4>Testea nuestro sitio</h4>
                <li>Ingresar como usuario:</li>
                <li>usuario@electrohack.com</li>
                <li>Ingresar como administrador:</li>
                <li>admin@electrohack.com</li>
                <li>Contraseñas: root</li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="mt-5">
                <h4>
                  Charly Gut <small>©</small>
                </h4>
                <li>Todos los derechos reservados.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

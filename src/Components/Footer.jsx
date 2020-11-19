import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="footer text-left">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <ul className="mt-5">
                <h4>Casa central</h4>

                <li>Hack academy pegadito a la estación.</li>
                <li>Lun. a Vie. 09:00 - 18:00hs.</li>
                <li>Sab. no molestar.</li>
                <li>Estacionamiento por la paralela que hay lugar.</li>
              </ul>
            </div>

            <div className="col-4">
              <ul className="mt-5">
                <h4>Sobre Nosotros</h4>
                <li>Quiénes somos</li>

                <li>
                  <Link to={}>Agustín Rivero</Link>
                </li>
                <li>
                  <Link>Gonzalo Molina</Link>
                </li>
                <li>
                  <Link to={"https://www.linkedin.com/in/soledadsienra/"}>
                    Soledad Sienra
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-4">
              <ul className="mt-5">
                <h4>Testea nuestro sitio</h4>
                <li>Hack academy pegadito a la estación</li>
                <li>Lun. a Vie. 09:00 - 18:00hs</li>
                <li>Sab. no molestar</li>
                <li>Estacionamiento por la paralela que hay lugar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

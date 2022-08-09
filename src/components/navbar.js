import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <>
      <div className="navigation">
        <nav>
          <ul className="navul">
            <li>
              <Link className="piclink" to="/">
                <img src="/navlogo.png" alt="getcodinglogo" />
              </Link>
            </li>
            <li>
              <Link className="navlink" to="/Analyse">
                Beratung
              </Link>
            </li>
            <li>
              <Link className="navlink" to="/Design">
                UX/UI Design
              </Link>
            </li>
            <li>
              <Link className="navlink" to="/Development">
                Entwicklung
              </Link>
            </li>
            <li>
              <Link className="navlink" to="/About">
                Über uns
              </Link>
            </li>
            <button className="navbtn"> Kostenfreie Anfrage</button>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default navbar;

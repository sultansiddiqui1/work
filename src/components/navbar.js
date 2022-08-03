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
              <img src="/navlogo.png" alt="getcodinglogo" />
            </li>
            <li>
              <Link to="/Analyse"> Beratung</Link>
            </li>
            <li>
              <Link to="/Design">UX/UI Design</Link>
            </li>
            <li>
              <Link to="/Development">Entwicklung</Link>
            </li>
            <li>
              <Link to="/About">Über uns</Link>
            </li>
            <button className="navbtn"> Kostenfreie Anfrage</button>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default navbar;

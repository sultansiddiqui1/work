import React from "react";
import "./Concept.css";

function Concept() {
  return (
    <>
      <div className="concept">
        <div className="concept_body">
          <div className="concept_titlesection">
            <div className="concept_whiteborder">
              <img src="./white_border.png" alt="white border" />
            </div>
            <div className="concept_titletext">Konzeption</div>
          </div>
          <div className="concept_paragraph">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua
          </div>

          <div className="ourprojects_concept">
            <div className="concept_ourprojects_title">
              Unsere Projekte in diesem Bereich
            </div>
            <div className="concept_cards">
              <div className="concept_card"></div>
              <div className="concept_card"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Concept;

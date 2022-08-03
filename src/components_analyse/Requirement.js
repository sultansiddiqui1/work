import React from "react";
import "./Requirement.css";

function Requirement() {
  return (
    <>
      <div className="requirement_section">
        <div className="requirement_section_mainbody">
          <div className="requirement_section_headersection">
            <div className="requirements_section_whiteborder">
              <img src="./white_border.png" alt="white fancy border" />
            </div>
            <div className="requirements_section_titletext">
              Anforderungsanalyse
            </div>
          </div>
          <div className="requirements_section_paragraphsection">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua
          </div>
        </div>
        <div className="Requirements_cardsection">
          <div className="requirements_card1"></div>
          <div className="requirements_card1"></div>
          <div className="requirements_card1"></div>
        </div>
      </div>
    </>
  );
}

export default Requirement;

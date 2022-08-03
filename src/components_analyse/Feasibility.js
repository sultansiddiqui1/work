import React from "react";
import "./Feasibility.css";

function Feasibility() {
  return (
    <>
      <div className="Feasibility">
        <div className="Feasibility_body">
          <div className="Feasibility_titlesection">
            <div className="Feasability_whiteborder">
              <img src="./blueborder.png" alt="blue fancy border"></img>
            </div>
            <div className="Feasibility_titlesection_text">
              Machbarkeitsanalyse
            </div>
          </div>
          <div className="Feasibility_paragraphsection">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua
          </div>

          <div className="Feasibility_cardsection">
            <div className="Feasibility_card1"></div>
            <div className="Feasibility_card1"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feasibility;

import React from "react";
import "./Uidesign.css";

function Uidesign() {
  return (
    <>
      <div className="uidesign">
        <div className="uidesign_body">
          <div className="uidesign_headingsection">
            <div className="uidesign_whiteborder">
              <img src="./white_border.png" alt="fancy white border" />
            </div>
            <div className="uidesign_titletext">UI Design</div>
          </div>
          <div className="uidesigntextsection">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua
          </div>

          <div className="uidesign_cardsection">
            <div className="uidesign_cardsection_title">
              Unsere Projekte in diesem Bereich
            </div>
            <div className="uidesign_cards">
              <div className="uidesigncard"></div>
              <div className="uidesigncard"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Uidesign;

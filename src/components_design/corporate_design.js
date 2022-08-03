import React from "react";
import "./corporate_design.css";

function corporate_design() {
  return (
    <>
      <div className="corparate_design">
        <div className="corparatedesign_body">
          <div className="corparatedesign_titlesection">
            <div className="corparatedesign_purpleborder">
              <img src="./purpleborder.png" alt="white border" />
            </div>
            <div className="corparatedesign_titletext">Corporate Design</div>
          </div>
          <div className="corparate_designtextsection">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua
          </div>
          <div className="corparatedesign_cardssection">
            <div className="corparatedesign_cardsection_title">
              Unsere Projekte in diesem Bereich
            </div>
            <div className="corparatedesign_cards">
              <div className="card_corparatedesign"></div>
              <div className="card_corparatedesign"></div>
              <div className="card_corparatedesign"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default corporate_design;

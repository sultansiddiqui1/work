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
              <div className="concept_card">
                <div className="concept_card_title">WillEyes Media</div>
                <div className="concept_card_image">
                  <img src="./macbook.png" alt="macbook pic"></img>
                </div>
                <div className="concept_card_iconsection">
                  <div className="conceptcard_iconsection_icon1">
                    <img src="./groupicon.png" alt="group icon"></img>
                  </div>
                  <div className="conceptcard_iconsection_icon2">
                    <img
                      src="./seperatoricon.png"
                      alt="white vertical dash"
                    ></img>
                  </div>
                  <div className="conceptcard_iconsection_icon3">
                    <img src="./boxicon2.png" alt="ai icon"></img>
                  </div>
                  <div className="conceptcard_iconsection_icon4">
                    <img
                      src="./seperatoricon.png"
                      alt="white vertical dash"
                    ></img>
                  </div>
                  <div className="conceptcard_iconsection_icon5">
                    <img src="./boxicon3.png" alt="icon 3"></img>
                  </div>
                </div>
              </div>
              <div className="concept_card">
                <div className="concept_card_title">WillEyes Media</div>
                <div className="concept_card_image">
                  <img src="./macbook.png" alt="macbook pic"></img>
                </div>
                <div className="concept_card_iconsection">
                  <div className="conceptcard_iconsection_icon1">
                    <img src="./groupicon.png" alt="group icon"></img>
                  </div>
                  <div className="conceptcard_iconsection_icon2">
                    <img
                      src="./seperatoricon.png"
                      alt="white vertical dash"
                    ></img>
                  </div>
                  <div className="conceptcard_iconsection_icon3">
                    <img src="./boxicon2.png" alt="ai icon"></img>
                  </div>
                  <div className="conceptcard_iconsection_icon4">
                    <img
                      src="./seperatoricon.png"
                      alt="white vertical dash"
                    ></img>
                  </div>
                  <div className="conceptcard_iconsection_icon5">
                    <img src="./boxicon3.png" alt="icon 3"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Concept;

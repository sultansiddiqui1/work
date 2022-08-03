import React from "react";
import "./Software_analyse.css";

function Software_analyse() {
  return (
    <>
      <div className="software_section">
        <div className="software_section_mainbody">
          <div className="software_section_titlesection">
            <div className="softwaresection_blueborder">
              <img src="./blueborder.png" alt="fancy blue border"></img>
            </div>
            <div className="softwaresection_titletext">Software Beratung</div>
          </div>
          <div className="softwaresection_text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua
          </div>
        </div>
      </div>

      <div className="software_ourprojectssection">
        <div software_ourprojectssection_mainbody>
          <div className="softwaresection_ourprojects_title">
            Unsere Projekte in diesem Bereich
          </div>

          <div className="softwaresection_ourprojects_cardsection">
            <div className="analyse_card1"></div>
            <div className="analyse_card1"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Software_analyse;

import React, { useState } from "react";
import "./Requirement.css";

function Requirement() {
  const [variable, setVariable] = useState("Media");
  const [variable2, setVariable2] = useState("Media");
  const [variable3, setVariable3] = useState("Media");
  const handlemouseover = () => {
    setVariable("Wedding");
  };
  const handlemouseover2 = () => {
    setVariable2("Wedding");
  };
  const handlemouseover3 = () => {
    setVariable3("Wedding");
  };
  const handlemouseoff = () => {
    setVariable("media");
  };
  const handlemouseoff2 = () => {
    setVariable2("media");
  };
  const handlemouseoff3 = () => {
    setVariable3("media");
  };
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
          <div
            className="requirements_card1"
            onMouseOver={handlemouseover}
            onMouseOut={handlemouseoff}
          >
            <div className="requirements_card1_titlesection">
              WillEyes {variable}
            </div>
            <div className="requirements_card1_image">
              <img src="./macbook.png" alt="macbook image"></img>
            </div>
            <div className="requirements_card1_iconsection">
              <div className="requirements_card1_iconsection_icon1">
                <img src="./groupicon.png" alt="group-icon"></img>
              </div>
              <div className="requirements_card1_iconsection_icon2">
                <img src="./seperatoricon.png" alt="white seperator"></img>
              </div>
              <div className="requirements_card1_iconsection_icon3">
                <img src="./boxicon2.png" alt="ai-icon"></img>
              </div>
              <div className="requirements_card1_iconsection_icon4">
                <img src="./seperatoricon.png" alt="white vertical line"></img>
              </div>
              <div className="requirements_card1_iconsection_icon5">
                <img src="./boxicon3.png" alt="third icon"></img>
              </div>
            </div>
          </div>
          <div
            className="requirements_card1"
            onMouseOver={handlemouseover2}
            onMouseOut={handlemouseoff2}
          >
            <div className="requirements_card1_titlesection">
              WillEyes {variable2}
            </div>
            <div className="requirements_card1_image">
              <img src="./macbook.png" alt="macbook image"></img>
            </div>
            <div className="requirements_card1_iconsection">
              <div className="requirements_card1_iconsection_icon1">
                <img src="./groupicon.png" alt="group-icon"></img>
              </div>
              <div className="requirements_card1_iconsection_icon2">
                <img src="./seperatoricon.png" alt="white seperator"></img>
              </div>
              <div className="requirements_card1_iconsection_icon3">
                <img src="./boxicon2.png" alt="ai-icon"></img>
              </div>
              <div className="requirements_card1_iconsection_icon4">
                <img src="./seperatoricon.png" alt="white vertical line"></img>
              </div>
              <div className="requirements_card1_iconsection_icon5">
                <img src="./boxicon3.png" alt="third icon"></img>
              </div>
            </div>
          </div>
          <div
            className="requirements_card1"
            onMouseOver={handlemouseover3}
            onMouseOut={handlemouseoff3}
          >
            <div className="requirements_card1_titlesection">
              WillEyes {variable3}
            </div>
            <div className="requirements_card1_image">
              <img src="./macbook.png" alt="macbook image"></img>
            </div>
            <div className="requirements_card1_iconsection">
              <div className="requirements_card1_iconsection_icon1">
                <img src="./groupicon.png" alt="group-icon"></img>
              </div>
              <div className="requirements_card1_iconsection_icon2">
                <img src="./seperatoricon.png" alt="white seperator"></img>
              </div>
              <div className="requirements_card1_iconsection_icon3">
                <img src="./boxicon2.png" alt="ai-icon"></img>
              </div>
              <div className="requirements_card1_iconsection_icon4">
                <img src="./seperatoricon.png" alt="white vertical line"></img>
              </div>
              <div className="requirements_card1_iconsection_icon5">
                <img src="./boxicon3.png" alt="third icon"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Requirement;

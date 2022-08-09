import React, { useState } from "react";
import "./corporate_design.css";

function corporate_design() {
  const [title, setTitle]=useState('Media');
  const [title2, setTitle2] = useState("Media");
  const [title3, setTitle3] = useState("Media");
  const handlemouseover = () => {
    setTitle("Wedding");
  };
  const handlemouseover2 = () => {
    setTitle2("Wedding");
  };
  const handlemouseover3 = () => {
    setTitle3("Wedding");
  };
  const handlemouseoff = () => {
    setTitle("Media");
  };
  const handlemouseoff2 = () => {
    setTitle2("Media");
  };
  const handlemouseoff3 = () => {
    setTitle3("Media");
  };



  
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
              <div
                className="card_corparatedesign"
                onMouseOver={handlemouseover}
                onMouseOut={handlemouseoff}
              >
                <div className="card1_title">WillEyes {title}</div>
                <div className="card1_image">
                  <img src="./macbook.png" alt="macbook image" />
                </div>

                <div className="card1_icon_section">
                  <div className="card1_iconsection_icon1">
                    <img
                      src="./groupicon.png"
                      alt=" icon with three people in a group"
                    />
                  </div>
                  <div className="card1_iconsection_icon2">
                    <img src="./seperatoricon.png" alt="white vertical dash" />
                  </div>
                  <div className="card1_iconsection_icon3">
                    <img src="./boxicon2.png" alt=" ai head image" />
                  </div>
                  <div className="card1_iconsection_icon4">
                    <img src="./seperatoricon.png" alt="white vertical dash" />
                  </div>
                  <div className="card1_iconsection_icon5">
                    <img src="./boxicon3.png" alt="monitor icon" />
                  </div>
                </div>
              </div>
              <div
                className="card_corparatedesign"
                onMouseOver={handlemouseover2}
                onMouseOut={handlemouseoff2}
              >
                <div className="card1_title">WillEyes {title2}</div>
                <div className="card1_image">
                  <img src="./macbook.png" alt="macbook image" />
                </div>

                <div className="card1_icon_section">
                  <div className="card1_iconsection_icon1">
                    <img
                      src="./groupicon.png"
                      alt=" icon with three people in a group"
                    />
                  </div>
                  <div className="card1_iconsection_icon2">
                    <img src="./seperatoricon.png" alt="white vertical dash" />
                  </div>
                  <div className="card1_iconsection_icon3">
                    <img src="./boxicon2.png" alt=" ai head image" />
                  </div>
                  <div className="card1_iconsection_icon4">
                    <img src="./seperatoricon.png" alt="white vertical dash" />
                  </div>
                  <div className="card1_iconsection_icon5">
                    <img src="./boxicon3.png" alt="monitor icon" />
                  </div>
                </div>
              </div>

              {/* <div className="card_corparatedesign"></div> */}

              {/* <div className="card_corparatedesign"></div> */}
              <div
                className="card_corparatedesign"
                onMouseOver={handlemouseover3}
                onMouseOut={handlemouseoff3}
              >
                <div className="card1_title">WillEyes {title3}</div>
                <div className="card1_image">
                  <img src="./macbook.png" alt="macbook image" />
                </div>

                <div className="card1_icon_section">
                  <div className="card1_iconsection_icon1">
                    <img
                      src="./groupicon.png"
                      alt=" icon with three people in a group"
                    />
                  </div>
                  <div className="card1_iconsection_icon2">
                    <img src="./seperatoricon.png" alt="white vertical dash" />
                  </div>
                  <div className="card1_iconsection_icon3">
                    <img src="./boxicon2.png" alt=" ai head image" />
                  </div>
                  <div className="card1_iconsection_icon4">
                    <img src="./seperatoricon.png" alt="white vertical dash" />
                  </div>
                  <div className="card1_iconsection_icon5">
                    <img src="./boxicon3.png" alt="monitor icon" />
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

export default corporate_design;

import React from "react";
import "./ShopSystem.css";

function ShopSystem(props) {
  return (
    <>
      <div {...props}className="shopsystem">
        <div className="shopsystem_titlesection">
          <div className="shopsystem_titlesection_border">
            <img src="./white_border.png" alt="white fancy border" />
          </div>
          <div className="shopsystem_titlesection_text">Shop Systeme</div>
        </div>
        <div className="shopsystem_text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua
        </div>

        <div className="projects_area">
          <div className="projects_area_title">
            Unsere Projekte in diesem Bereich
          </div>
          <div className="projects_area_cards">
            <div className="projects_area_card ">
              <div className="projectscard1_title">WillEyes Media</div>
              <div className="projectscard1_image">
                <img src="./macbook.png" alt="macbook image" />
              </div>

              <div className="projectscard1_icon_section">
                <div className="projectscard1_iconsection_icon1">
                  <img
                    src="./groupicon.png"
                    alt=" icon with three people in a group"
                  />
                </div>
                <div className="projetcscard1_iconsection_icon2">
                  <img src="./seperatoricon.png" alt="white vertical dash" />
                </div>
                <div className="projectscard1_iconsection_icon3">
                  <img src="./boxicon2.png" alt=" ai head image" />
                </div>
                <div className="projectscard1_iconsection_icon4">
                  <img src="./seperatoricon.png" alt="white vertical dash" />
                </div>
                <div className="projectscard1_iconsection_icon5">
                  <img src="./boxicon3.png" alt="monitor icon" />
                </div>
              </div>
            </div>

            <div className="projects_area_card1">
              <div className="projectscard1_title">WillEyes Media</div>
              <div className="projectscard1_image">
                <img src="./macbook.png" alt="macbook image" />
              </div>

              <div className="projectscard1_icon_section">
                <div className="projectscard1_iconsection_icon1">
                  <img
                    src="./groupicon.png"
                    alt=" icon with three people in a group"
                  />
                </div>
                <div className="projetcscard1_iconsection_icon2">
                  <img src="./seperatoricon.png" alt="white vertical dash" />
                </div>
                <div className="projectscard1_iconsection_icon3">
                  <img src="./boxicon2.png" alt=" ai head image" />
                </div>
                <div className="projectscard1_iconsection_icon4">
                  <img src="./seperatoricon.png" alt="white vertical dash" />
                </div>
                <div className="projectscard1_iconsection_icon5">
                  <img src="./boxicon3.png" alt="monitor icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopSystem;

import React from "react";
import "./Intro.css";
import Background from "../images/backgroundtop.png";

function Intro() {
  return (
    <>
  <div className="firstviewport">

      <div className="centralbody">
        <div className="leftcard">
          <div className="textpart">
            <div className="text1">Individuelle </div>
            <div className="text">Softwareentwicklung</div>
            <button className="btnintro">Kontaktieren Sie uns!</button>
          </div>
        </div>
        <div className="rightcard">
          <div className="box">
            <div className="boxtitle">Unser neuestes Projekt</div>
            <div className="boximage">
              <img src="macbook.png" alt="macbook iamge" className="macbookimage"/>
            </div>
            <div className="boxicons">
              <div className="icon1">
                <img
                  src="groupicon.png"
                  alt="icon with three people in a group"
                />
                <div className="hidden">
                  Beratung

                </div>
              </div>
              <div className="seperator">
                <img
                  src="seperatoricon.png"
                  alt="white line"
                  className="seperatoricon"
                />
                
              </div>
              <div className="icon2">
                <img src="boxicon2.png" alt="boxicon3" />
                <div className="hidden">
                  Development

                </div>
              </div>
              <div className="seperator">
                <img
                  src="seperatoricon.png"
                  alt="white line"
                  className="seperatoricon"
                />
                
            

              </div>
              <div className="icon3">
                <img src="boxicon3.png" alt="boxicon3" />
                <div className="hidden">
                  Design

                </div>

              </div>
              

            </div>
           <button className="hidden hidden-button">
             Zum Projekt
            </button>
          </div>
        </div>
      </div>
      <div className="image">
        <img src="/imagebackground.png" alt="background-image" />
        </div>
        </div>
        <div className="background-blue">

        </div>
     



      
     
    </>
  );
}

export default Intro;

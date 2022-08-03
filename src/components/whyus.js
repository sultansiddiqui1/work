import React from "react";
import "./whyus.css";
import background from "../images/backgroundimage2.png";

function whyus() {
  return (
    <>
    <div className="whyus">
      <div className="title_whygetcoding">Warum getCoding?</div>
      <div className="innerbodywhyus">
        <div className="personintro">
          <div className="personimage">
            <img src="/till.png" alt="image of Till Sappa" />

          </div>
          <div className="persondetails">
          <div className="tillfirstline">
            <div className="name">
              Till Sappa
            </div>
            <div className="tilltitle">
               Head of Marketing
            </div>

          </div>
          <div className="tillsecondline">
            till.sappa@gmail.com

          </div>
          <div className="tillthirdline">
            0421 245323

          </div>


          </div>



        </div>

      <div className="quotes">
        <div className="quote1">
          <img src="closequote.png" alt="close open"></img>
        </div>
        <div className="quote2">
        <img src="openquote.png" alt="quote open"></img>
        </div>
      </div>

      </div>


      </div>


      <div className="corevalues">
        <div className="corevalues_headersection">
          <div className="corevalues_blueborder">
            <img src="/blueborder.png" alt="blue border"/>

          </div>
        <div className="title_corevalues">Our core values</div>

        </div>
        
        <div className="corevalues_line1">
          <div className="line1box1">
            <p className="titlebox1">Transparenz</p>
            <p className="textbox1">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
            <button className="buttonbox">Kontaktieren Sie uns!</button>
          </div>
          <div className="line1box2">
            <img
              className="line1box2img"
              src="/backgroundimage2.png"
              alt="image"
            />
          </div>
          <div className="line1box3">
            <p className="headingline1box3"> Positivity</p>
            <p className="textline1box3">
              Teil des Problems oder Teil <br></br> der Lösung ?
            </p>
            <button className="buttonbox">Kontaktieren Sie uns!</button>
          </div>
        </div>

        <div className="corevalues_line2">
          <div className="line2box1">
            <img src="/image21.png" alt="image21" className="image21" />
          </div>
          <div className="line2box2">
            <div className="line2box2title">Transparenz</div>
            <div className="line2box2text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur at aperiam eos quidem ipsam fugit similique quo porro.
              Fugiat alias non doloribus saepe ratione consequuntur, quis
              doloremque mollitia amet maxime.
            </div>
            <button className="buttonbox">Kontaktieren Sie uns!</button>
          </div>
          <div className="line2box3">
            <img
              src="/backgroundimage2.png"
              alt="image 22"
              className="image22"
            />
          </div>
        </div>

        <div className="corevalues_line3">
          <div className="line3box1">
            <div className="line3box1header">Karriere bei getCoding</div>
            <div className="line3box1text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </div>
            <button className="buttonbox">Offnen Stellen</button>
          </div>
          <div className="line3box2">
            <img src="/image21.png" alt="image 21" className="image23" />
          </div>
        </div>
      </div>

      <div className="greybg">
        <img src="/grey.png" alt="greybg" className="greybackground" />
      </div>
      <div className="greydiv">

      </div>

      <div className="technologies">
        <div className="technologiestitle">
          Expertise um jedes Projekt individuell umzusetzen
        </div>
        <div className="technologyicons">
          <img src="/php.png" alt="php icon" className="php" />
          <img src="/shop.png" alt="shop icon" className="shop" />
          <img src="/go.png" alt="go icon" className="go" />
          <img src="/python.png" alt="python icon" className="python" />
          <img
            src="/javascript.png"
            alt="javascript icon"
            className="javascript"
          />
          <img src="react.png" alt="react logo" className="react" />
          <img src="Wordpress.png" alt="wordpresslogo" className="wordpress" />
        </div>
      </div>
    </>
  );
}

export default whyus;

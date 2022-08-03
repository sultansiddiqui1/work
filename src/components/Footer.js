import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <>
      <div className="newssection">
        <div className="newheader">
          <p className="headerNews">News</p>
        </div>
        <div className="newscards">
          <div className="card">
            <p className="cardtitle">Unser neuestes Projekt </p>
            <img
              src="/macbook.png"
              alt="macbook image"
              className="macbookicon"
            />
            <button className="btnfooter"> Mehr dazeu </button>
          </div>
          <div className="card">
            <p className="cardtitle">
              Digitalisierung interner <br />
              Prozesse
            </p>
            <img src="/Rectangle126.png" alt="white rectangle" />
            <button className="btnfooter"> Mehr dazeu </button>
          </div>
          <div className="card">
            <p className="cardtitle">
              Digitalisierung interner <br />
              Prozesse
            </p>
            <img src="/Rectangle126.png" alt="white rectangle" />
            <button className="btnfooter"> Mehr dazeu </button>
          </div>
        </div>
      </div>
      <div className="footerbody">
        <div className="leftbody">
          <div className="footericon">
            <img src="/navlogo.png" alt=" get coding logo" />
          </div>

          <div className="footertext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            nostrum pariatur dignissimos quibusdam vel excepturi officiis
            voluptate animi, sed vero facilis culpa accusamus reiciendis labore
            non, corporis commodi quae cum?
          </div>

          <div className="contactinformation">
            <div className="contacttitle">Find Us</div>
            <div className="socialmedia">
              <div className="linkedin">
                <img src="/linkedin.png" alt="linkedinlogo" />
              </div>
              <div className="instagram">
                <img src="/instagram.png" alt="instagram logo" />
                <img
                  src="/instagraminner.png"
                  alt="instgram logo inner"
                  className="instagraminner"
                />
              </div>
              <div className="facebook">
                <img src="/facebook.png" alt="facebook logo" />
              </div>
            </div>
          </div>
        </div>

        <div className="bodyright">
          <div className="upperright">
            <div className="column1">
              <p className="header">Beratung</p>
              <p>Software Beratung</p>
              <p>KOnzeption</p>
              <p>
                {" "}
                Analyse & <br />
                Machbarkeitsanalyse
              </p>
            </div>
            <div className="column2">
              <p className="header">UX/UI Design</p>
              <p>UX Reasearch</p>
              <p>Beratunf & Workshop</p>
              <p>UX & UI Design</p>
            </div>
            <div className="column3">
              <p className="header">Entwickling</p>
              <p> App-Anwendungen</p>
              <p>Shop-Systeme</p>
              <p>Data Science</p>
              <p>
                {" "}
                Webportal & <br /> Digitla Experience Platforms
              </p>
            </div>
            <div className="column4">
              <p className="header">Über uns</p>
              <p>Kontakt</p>
              <p> Karriere</p>
            </div>
          </div>
          <div className="lowerright">
            <div className="lowercolumn1">
              <p className="header">Tech Lexikon</p>

              <p>Programmiersprachen</p>
              <p>Was ist UX-Desing</p>
              <p>Was ist UX-Desing</p>
              <p>Was ist UX-Desing</p>
            </div>
            <div className="lowercolumn2">
              <p className="header">News</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

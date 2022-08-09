import React, { useEffect, useState, createContext } from "react";
import "./competencies.css";
import background from "../images/backgroundimage2.png";

function competencies() {
  const wordpressprovider = createContext();
  const [advice, setAdvice] = useState([]);
  const [loading, setLoading] = useState(false);

  const siteurl =
    "https://api.getcoding.de/wp-json/wp/v2/homepage_content?category_slug=kernkompetenzen";

  useEffect(() => {
    fetch(siteurl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setAdvice(data);
      });
  });
  // .then((response) => response.json())
  // .then((json) => setAdvice(json));

  // console.log(advice);

  //   setLoading(true)

  /*  async function loadposts(){
        var response=await fetch(siteurl);
        // if(!response.ok){
        //   console.log("not working");
        //   return;



        // }
        // const advice=await response.json;
        // setAdvice(response.json);

      }
      loadposts();
      setAdvice(response.json);
    },[])
    console.log(advice); */
  // const [advice, setAdvice] = useState("");
  // useEffect(() => {
  //   const url =
  //     "https://api.getcoding.de/wp-json/wp/v2/homepage_content?category_slug=kernkompetenzen";
  //   const fetchData = async () => {
  //     try {
  //       console.log("entered try block");
  //       const response = await fetch(url).then(
  //         (result)=>{
  //           setAdvice(result);
  //         }
  //       )
  //     //   const json = await response.json();
  //     //   console.log(json);
  //     //   setAdvice(json);
  //     //   console.log("advice");
  //     } catch (error) {
  //       console.log("error", error);
  //       console.log("error block reached");
  //     }
  //    };
  //   fetchData();
  // }, []);
  // console.log("here is the response" + advice);

  return (
    <>
      <div className="secondviewport">
        <div className="centralcard">
          <div className="header">
            <div className="header-image">
              <img src="./blueborder.png" alt="blue border" />
            </div>
            <div className="header_text">Unsere Kernkompetenzen</div>
            <div>
              {/* <pre> {JSON.stringify(advice, null, 2)}  </pre> */}
                  {advice.map((item) => (
                <div>
                  <h1
                    dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                  />
                </div>
              ))} 
              {/* <h1 dangerouslySetInnerHTML={{ __html: advice.content.rendered }} /> */}
            </div>
          </div>

          <div className="navs">
            <nav>
              <ul className="navigation2">
                <li> Beratung & Analyse</li>
                <li> UI & UX Design </li>
                <li>Entwicklung</li>
                <li> Künstliche Intelligenz</li>
              </ul>
            </nav>
          </div>

          <div className="insidecard">
            <div className="description">
              <div className="btn1">
                <button className="btncompetencies">Mehr erfahren</button>
              </div>
            </div>

            <div className="imagecard">
              <div className="mainimage">
                <img src="/till.png" alt="image of Till Sappa " />
              </div>

              <div className="texts">
                <div className="textline1">
                  <div className="name">Till Sappa </div>

                  <div className="title"> Head of Marketing</div>
                </div>
                <div className="line2">till.sappa@getcoding.de</div>
                <div className="line3">0421 245323</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="casestudies">
        <div className="left" style={{ backgroundImage: `url(${background})` }}>
          <div className="casestudiesheader">
            <div className="textin">Case Studies</div>
          </div>
          <div className="casestudiestext">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
            placeat. Saepe veritatis maiores, reiciendis quos quas perspiciatis
            sit ipsum ut blanditiis alias possimus soluta! Voluptates ipsam
            eligendi tempore obcaecati eos! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aperiam facere veniam voluptate natus
            nisi fugiat at ipsum sit error! Mollitia, atque? Doloribus inventore
            nesciunt fugit quas a. Deserunt, voluptatem laborum. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quas minus non
            praesentium sequi at nihil ab distinctio sunt itaque laboriosam
            voluptas, iste officia culpa modi similique officiis nobis quos
            laborum!
          </div>
        </div>
        <div className="right">
          <div className="topcard">
            <div className="topcardheader">
              Konzeption und Entwicklung<br></br> einer internen Firmensoftware
            </div>
            <div classNmae="topcardimage">
              <img
                src="macbook.png"
                alt="macbook iamge"
                className="macbookimage"
              />
            </div>
            <div className="competenciesicons">
              <div className="competenciesicon1">
                <img
                  src="redicon1.png"
                  alt=" red icon with three people in a group"
                />
                <div className="competencieshidden">Beratung</div>
              </div>
              <div className="competenciesseparator">
                <img src="redseperator.png" alt="red vertical line" />
              </div>

              <div className="competenciesicon2">
                <img src="card1.png" alt="red ai" />
                <div className="competencieshidden">Development</div>
              </div>
              <div className="competenciesseparator">
                <img src="redseperator.png" alt="red vertical line" />
              </div>
              <div className="competenciesicon3.png">
                <img src="card2.png" alt="red monitor" />
                <div className="competencieshidden">Design</div>
              </div>
            </div>
            <button className="competenciesbutton">Zum Projekt</button>
          </div>
          <div className="topcard">
            <div className="topcardheader">
              Konzeption und Entwicklung<br></br> einer internen Firmensoftware
            </div>
            <div classNmae="topcardimage">
              <img
                src="macbook.png"
                alt="macbook iamge"
                className="macbookimage"
              />
            </div>
            <div className="competenciesicons">
              <div className="competenciesicon1">
                <img
                  src="redicon1.png"
                  alt=" red icon with three people in a group"
                />
                <div className="competencieshidden">Beratung</div>
              </div>
              <div className="competenciesseparator">
                <img src="redseperator.png" alt="red vertical line" />
              </div>

              <div className="competenciesicon2">
                <img src="card1.png" alt="red ai" />
                <div className="competencieshidden">Development</div>
              </div>
              <div className="competenciesseparator">
                <img src="redseperator.png" alt="red vertical line" />
              </div>
              <div className="competenciesicon3.png">
                <img src="card2.png" alt="red monitor" />
                <div className="competencieshidden">Design</div>
              </div>
            </div>
            <button className="competenciesbutton">Zum Projekt</button>
          </div>
          <div className="topcard">
            <div className="topcardheader">
              Konzeption und Entwicklung<br></br> einer internen Firmensoftware
            </div>
            <div classNmae="topcardimage">
              <img
                src="macbook.png"
                alt="macbook iamge"
                className="macbookimage"
              />
            </div>
            <div className="competenciesicons">
              <div className="competenciesicon1">
                <img
                  src="redicon1.png"
                  alt=" red icon with three people in a group"
                />
                <div className="competencieshidden">Beratung</div>
              </div>
              <div className="competenciesseparator">
                <img src="redseperator.png" alt="red vertical line" />
              </div>

              <div className="competenciesicon2">
                <img src="card1.png" alt="red ai" />
                <div className="competencieshidden">Development</div>
              </div>
              <div className="competenciesseparator">
                <img src="redseperator.png" alt="red vertical line" />
              </div>
              <div className="competenciesicon3.png">
                <img src="card2.png" alt="red monitor" />
                <div className="competencieshidden">Design</div>
              </div>
            </div>
            <button className="competenciesbutton">Zum Projekt</button>
          </div>
        </div>
      </div>

      <div className="redbg">
        <img src="/backgroundred.png" alt="image" />
      </div>
      <div className="reddiv"></div>
    </>
  );
}

export default competencies;

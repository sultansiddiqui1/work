import React from "react";
import { useState } from "react";

function animationsrough() {
  const [text, setText] = useState("nohover");
  const handlemouseover = () => {
    if (text === "wedding") {
      setText("media");
    } else {
      setText("wedding");
    }
  };
  const handlehover = () => {
   
      setText("hover function triggered");
    
  };
  const handlenohover =()=>{
    setText('no hover');
  }
  return (
    <>
      <div>
        <h1>{text}</h1>
        <button onClick={handlemouseover} onMouseOver={handlehover} onMouseOut={handlenohover}>
          Click me
        </button>
      </div>
    </>
  );
}

export default animationsrough;

import React, { useRef, useEffect } from "react";
import "./chart.css";

type CanvasProps = React.DetailedHTMLProps<
  React.CanvasHTMLAttributes<HTMLCanvasElement>,
  HTMLCanvasElement
>;

const Canvas: React.FC<CanvasProps> = ({ ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const draw = (ctx: CanvasRenderingContext2D) => {
    // the first outercircle
    ctx.beginPath();
    ctx.strokeStyle = "grey";

    ctx.arc(35, 800, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.font = "100px serif";
    ctx.strokeStyle = "#1D50B0";
    ctx.strokeText("01", 20, 920);
    ctx.font = "24px serif";
    ctx.fillStyle = "white";
    ctx.fillText("Beratung", 25, 930);
    ctx.moveTo(25, 950);
    ctx.lineTo(200, 950);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.font = "15px serif";
    ctx.fillText("Softwareberatung", 25, 970);
    ctx.fillText("Anforderungsanalyse", 25, 990);
    ctx.fillText("Machbarkeitsanalyse", 25, 1010);

    //the first innercircle
    ctx.fillStyle = "blue";

    ctx.beginPath();

    ctx.arc(35, 800, 20, 0, 2 * Math.PI);
    ctx.fill();

    //first curve:
    ctx.beginPath();
    ctx.moveTo(55, 800);
    ctx.quadraticCurveTo(400, 1000, 550, 600);
    ctx.stroke();

    //second outer circle:
    ctx.beginPath();
    ctx.arc(550, 600, 40, 0, 2 * Math.PI);
    ctx.stroke();

    // text for second circle:
    ctx.font = "100px serif";
    ctx.strokeStyle = "#8920F2";
    ctx.strokeText("02", 550, 720);
    ctx.font = "24px serif";
    ctx.fillStyle = "white";
    ctx.fillText("Konzeption & Design", 550, 730);
    ctx.moveTo(550, 750);
    ctx.lineTo(850, 750);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.font = "15px serif";
    ctx.fillText("UX Research", 550, 770);
    ctx.fillText("Konzeption", 550, 790);
    ctx.fillText("Coporate Design", 550, 810);
    ctx.fillText("UI Design", 550, 830);

    //second inner circle:
    ctx.fillStyle = "purple";
    ctx.beginPath();
    ctx.arc(550, 600, 20, 0, 2 * Math.PI);
    ctx.fill();

    //second to thid curve:
    ctx.beginPath();
    ctx.moveTo(550, 600);
    ctx.quadraticCurveTo(1000, 300, 1250, 400);
    ctx.stroke();

    // third outer circle:
    ctx.beginPath();
    ctx.arc(1250, 400, 40, 0, 2 * Math.PI);
    ctx.stroke();

    // text for the third circle:
    ctx.font = "100px serif";
    ctx.strokeStyle = "#981E25";
    ctx.strokeText("03", 1210, 520);
    ctx.font = "24px serif";
    ctx.fillStyle = "white";
    ctx.fillText("Entwicklung", 1210, 530);
    ctx.moveTo(1200, 550);
    ctx.lineTo(1490, 550);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.font = "15px serif";
    ctx.fillText("Künstliche Intelligenz", 1200, 570);
    ctx.fillText("Shop-Systeme", 1200, 590);
    ctx.fillText("App-Anwendungen", 1200, 610);

    // third inner circle:
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(1250, 400, 20, 0, 2 * Math.PI);
    ctx.fill();

    //third to fourth dash:
    ctx.beginPath();
    ctx.moveTo(1250, 400);
    ctx.quadraticCurveTo(1450, 450, 1450, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1450, 300);
    ctx.quadraticCurveTo(1450, 200, 1800, 200);
    ctx.stroke();

    //fourth outercircle:
    ctx.beginPath();
    ctx.arc(1800, 200, 40, 0, 2 * Math.PI);
    ctx.stroke();

    //fourth text:
    ctx.font = "100px serif";
    ctx.strokeStyle = "#2E5C29";
    ctx.strokeText("04", 1750, 320);
    ctx.font = "24px serif";
    ctx.fillStyle = "white";
    ctx.fillText("Aktualität & Go-Live", 1750, 330);
    ctx.moveTo(1750, 350);
    ctx.lineTo(1890, 350);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.font = "15px serif";
    ctx.fillText("Wartung", 1750, 370);
    ctx.fillText("Modernisieren", 1750, 390);
    ctx.fillText("optimieren", 1750, 410);

    //fourth innercircle:
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(1800, 200, 20, 0, 2 * Math.PI);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    //Our draw come here
    draw(context);
  }, [draw]);

  return (
    <>
      <div className="chartsectiontext">
        <div className="chartsection_header">
          <div className="chartsection_blueborder">
            <img src="./blueborder.png" alt="fancy blue border" />
          </div>
          <div className="chartsection_title">
         <h1> Projektablauf </h1>
          </div>
        </div>

        <div className="chartsectionmaintext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam sunt
          ad officiis repudiandae, hic laboriosam voluptate ea a incidunt
          inventore unde possimus vero consectetur, aperiam autem. Natus,
          officia veniam. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Eveniet repellat mollitia, blanditiis dignissimos hic
          repellendus quisquam et enim consectetur ab iusto nihil eligendi
          soluta sed reprehenderit excepturi inventore cumque ullam. orem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quam minus, sint
          laboriosam amet odit unde? Consectetur, ab est? Quaerat veniam ipsam
          sunt facilis? Hic ipsa natus commodi necessitatibus iusto id.
        </div>

        <div className="chatsectionbutton">
          <div className="label">
            Haben Sie Fragen oder möchten weitere Projekte sehen ?
          </div>
          <div className="buttonchart">
            <button className="btnchart">Kontaktieren Sie uns!</button>
          </div>
        </div>
      </div>

      <canvas
        className="canvas"
        width={props.width}
        height={props.height}
        ref={canvasRef}
        {...props}
      />
    </>
  );
};

export default Canvas;

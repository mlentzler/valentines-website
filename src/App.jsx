import React, { useState } from "react";
import topegiHappy from "./assets/topegi-happy.gif";
import topegiCries from "./assets/togepi-cries.gif";
import sadTopegiWaving from "./assets/sad-topegi-waving.gif";
import topegiHappyLove from "./assets/topegi-happy-love.gif";
import topegiLove from "./assets/topegi-love.gif";
import "./App.css";

function App() {
  const [noButtonTransform, setNoButtonTransform] = useState({
    x: "0px",
    y: "0px",
  });
  const [currentGif, setCurrentGif] = useState(topegiHappy);
  const [showNo, setShowNo] = useState(true);

  const handleNoClick = () => {
    const newX = Math.random() * 500 - 200 + "px";
    const newY = Math.random() * 500 - 200 + "px";
    setNoButtonTransform({ x: newX, y: newY });
    setCurrentGif((prev) =>
      prev === topegiCries ? sadTopegiWaving : topegiCries,
    );
  };

  const handleYesClick = () => {
    setCurrentGif((prev) =>
      prev === topegiLove ? topegiHappyLove : topegiLove,
    );
    setShowNo(false);
  };

  return (
    <div className="container">
      <div className="static-content">
        <h1>Will you be my Valentine Goppi?</h1>
        <img
          src={currentGif}
          alt="Gif"
          style={{ width: "300px", height: "300px", objectFit: "contain" }}
        />
      </div>
      <div className="button-container">
        <button className="button-yes" onClick={handleYesClick}>
          Yes
        </button>
        {showNo && (
          <button
            className="button-no"
            onClick={handleNoClick}
            style={{
              transform: `translate(${noButtonTransform.x}, ${noButtonTransform.y})`,
            }}
          >
            No :(
          </button>
        )}
      </div>
    </div>
  );
}

export default App;

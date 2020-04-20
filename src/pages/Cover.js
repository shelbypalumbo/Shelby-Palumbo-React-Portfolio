import React from "react";
import { Link } from "react-router-dom";
import Background from "../images/cover.jpg";

function Cover() {
  const style = {
    background: {
      backgroundImage: `url(${Background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100vh"
    }
  };
  return (
    <div style={style.background}>
      <div className="text-left">
        <div className="coverpageText">
          <h1> Shelby Palumbo</h1>
          <br />
          <h3>Web Developer </h3>
          <h6>Check out my work!</h6>

          <Link to="/About" className="coverBtn">
            Enter
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cover;

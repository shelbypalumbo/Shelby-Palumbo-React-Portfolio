import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Cover() {
  return (
    <div className="coverpageText text-left">
      <h1> Shelby Palumbo</h1>
      <br />
      <h3>Web Developer </h3>
      <h5>Check out my work!</h5>
      <h6>
        <Link to="/About" className="coverBtn">
          Enter
        </Link>
      </h6>
    </div>
  );
}

export default Cover;

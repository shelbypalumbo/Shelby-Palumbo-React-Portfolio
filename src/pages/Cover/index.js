import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Cover() {
  return (
    <div className="coverpageText text-left">
      <h1> Shelby Palumbo</h1>
      <br />
      <h3>Web Developer </h3>
      <h6>Check out my work!</h6>

      <Link to="/About" className="coverBtn">
        Enter
      </Link>
    </div>
  );
}

export default Cover;

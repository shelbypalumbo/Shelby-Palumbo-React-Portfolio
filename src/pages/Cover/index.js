import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Cover() {
  return (
    <div
      style={{ fontFamily: "'Raleway', sans-serif" }}
      className="coverpage text-left"
    >
      <div className="text">
        <h1> Shelby Palumbo</h1>
        <br />
        <h3>Web Developer </h3>
        <h6>
          <Link to="/About" className="coverBtn">
            Enter
          </Link>
        </h6>
      </div>
    </div>
  );
}

export default Cover;

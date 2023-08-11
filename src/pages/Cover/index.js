import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Headshot from "../../images/headshot1.jpeg";

function Cover() {
  return (
    <div
      style={{ fontFamily: "'Raleway', sans-serif" }
      }
      className="coverpage"
    >
      <div>
        <img src={Headshot} className="bio-imgs" alt="headshot" /></div>

      <div className="text">
        <h1> Shelby Palumbo</h1>

        <h3>Web Developer </h3>
        <h6>
          <Link to="/About" className="coverBtn">
            Enter
          </Link>
        </h6>
      </div>

    </div >

  );
}

export default Cover;

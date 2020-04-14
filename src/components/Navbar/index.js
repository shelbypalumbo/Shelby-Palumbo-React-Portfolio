import React from "react";
import "./style.css";
import {Link} from "react-router-dom";

function Navbar() {
 return( 
 <nav className="navbar navbar-expand-lg">
  <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarNav"
    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/About"><i className="fas fa-user-tie"></i> About Me <span
            className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item dropdown">
        <Link to="/" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
aria-expanded="false">Portfolio <i className="fa fa-archive"></i></Link>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/Design"><i className="fas fa-terminal"></i> Web Development Projects</a>
          <a className="dropdown-item" href="/Tech"><i className="fas fa-tools"></i> Technician Experience</a>
          <a className="dropdown-item" href="/Resume"><i className="far fa-file"></i> Resume</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Contact"><i className="fas fa-address-book"></i> Contact</a>
      </li>
    </ul>
  </div>
</nav>);
}
export default Navbar;

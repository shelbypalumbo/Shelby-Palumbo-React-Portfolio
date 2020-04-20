import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <div>
      <nav className="nav flex-column">
        <Link className="nav-link active" to="/About">
          About
        </Link>
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            to="#"
            role="button"
            rel="noopener noreferrer"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Portfolio
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="/Design">
              Web Development Projects
            </Link>
            <Link className="dropdown-item" to="/Tech">
              Technician Experience
            </Link>
            <Link className="dropdown-item" to="/Resume">
              Resume
            </Link>
          </div>
        </li>
        <Link className="nav-link" to="/Contact">
          Contact
        </Link>
      </nav>
    </div>
  );
}
export default Navbar;

import React from "react";
import "./style.css";

function Navbar() {
  return (
    <div>
      <nav className="nav flex-column">
        <a className="nav-link active" href="/About">
          About
        </a>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            href="/"
            role="button"
            rel="noopener noreferrer"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Portfolio
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="Design">
              Web Development Projects
            </a>
            <a className="dropdown-item" href="Tech">
              Technician Experience
            </a>
            <a className="dropdown-item" href="Resume">
              Resume
            </a>
          </div>
        </li>

        <a className="nav-link" href="Contact">
          Contact
        </a>
      </nav>
    </div>
  );
}
export default Navbar;

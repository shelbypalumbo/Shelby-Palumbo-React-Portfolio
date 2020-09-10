import React from "react";
import "./style.css";
import fivver from "../../images/fivver.png";

function Footer() {
  return (
    <footer>
      <div className="position-sticky">
        <span>
          &#169; SLP 2020 <i className="fas fa-cat"></i> &nbsp; &nbsp; &nbsp;
          <a
            className="li-ic"
            href="https://www.linkedin.com/in/shelby-palumbo/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin-in fa-lg black-text mr-md-3 mr-3 fa-2x">
              {" "}
            </i>
          </a>
          <a
            className="ins-ic"
            href="https://github.com/shelbypalumbo"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-github fa-lg white-text mr-md-3 mr-3 fa-2x">
              {" "}
            </i>
          </a>
          <a
            href="https://www.fiverr.com/share/NWE2vo"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="fivver" src={fivver} />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;

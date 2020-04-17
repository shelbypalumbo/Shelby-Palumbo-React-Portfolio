import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import Form from "../components/Form";
import Container from "../components/Container";
import Github from "../images/gitHub.png";

function Contact() {
  const style = {
    textstyle: {
      textAlign: "center"
    }
  };
  return (
    <Container>
      <h2>Contact Info</h2>
      <hr />
      <Row>
        <Col size="lg-8 md-12">
          <Form />
        </Col>
        <Col size="lg-4 md-12" style={style.textstyle}>
          <h5>Connect with me:</h5>
          <i className="fas fa-mobile-alt"></i> (203)690-0030 <br />
          <i className="far fa-envelope"></i> shelbypalumbo94@gmail.com <br />
          <a
            href="https://github.com/shelbypalumbo"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="gitImg" alt="github" src={Github} width="30%" />
          </a>
          <div
            className="LI-profile-badge"
            data-version="v1"
            data-size="small"
            data-locale="en_US"
            data-type="horizontal"
            data-theme="dark"
            data-vanity="shelby-palumbo-a96748196"
          >
            <a
              className="LI-simple-link"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/shelby-palumbo-a96748196?trk=profile-badge"
            >
              Shelby Palumbo
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

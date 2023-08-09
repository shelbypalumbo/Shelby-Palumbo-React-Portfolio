import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Headshot from "../images/headshot1.jpeg";
import Cats from "../images/tableCats.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Jumbotron from "../components/Jumbotron";

function About() {
  // const style = {
  //   fontColor: {
  //     color: "#a79b43"
  //   }
  // };
  return (
    <div>
      <Jumbotron />
      <Wrapper>
        <Container>
          <Row>
            <Col size="md-2 sm-12">
              <Navbar />
            </Col>
            <Col size="md-10 sm-12">
              <h2 className="page-title">About Me</h2>
              <hr />

              <p>
                <img src={Headshot} className="bio-imgs" alt="headshot" />
                &nbsp;&nbsp; &nbsp;&nbsp; Hello, my name is Shelby Palumbo and I
                am a Web Developer.
              </p>

              <p>
                &nbsp;&nbsp; &nbsp;&nbsp; Since 2014, I have worked in the
                professional audio industry as a Diamond Series Microphone
                Technician for
                <a
                  href="https://www.telefunken-elektroakustik.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  &nbsp; Telefunken Elektroakustik.
                </a>
              </p>
              <p>
                &nbsp;&nbsp; &nbsp;&nbsp;About a year ago, I decided to take a
                look back on some of my old web development projects from
                college and I was immediately drawn back in. I started classes
                &nbsp;through Coursera, watching tutorials, and then I stumbled
                upon the UCONN Full Stack Coding Bootcamp.
                <img className="cat-imgs" src={Cats} alt="Loui and Mina" />
              </p>

              <p>
                &nbsp;&nbsp; &nbsp;&nbsp; I received my certificate on May 9,
                2020 and I couldn't be more excited for my future. I find the
                challenge of an ever changing field and lifelong learning
                exhilarating. I now have experience with{" "}
                <strong className="technologies">
                  React, MongoDB, MySql, Node.js, Express.js, JavaScript, HTML, and
                  CSS.
                </strong>
              </p>
              <p>
                &nbsp;&nbsp; &nbsp;&nbsp;These days you'll find me locked in on
                a computer screen with a cup of coffee, or spending time with my
                two cats, Mina and Loui.
              </p>
              <p>
                For freelance inquiries visit my{" "}
                <a
                  href="https://www.fiverr.com/share/NWE2vo"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  fivver gig,
                </a>{" "}
                connect with me on{" "}
                <a
                  className="LI-simple-link"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/shelby-palumbo?trk=profile-badge"
                >
                  linkedIn,
                </a>{" "}
                or visit my contact page.
              </p>
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default About;

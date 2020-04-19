import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Headshot from "../images/headshot2.png";
import Cats from "../images/tableCats.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Jumbotron from "../components/Jumbotron";

function About() {
  const style = {
    fontColor: {
      color: "#a79b43"
    }
  };
  return (
    <div>
      <Jumbotron />
      <Wrapper>
        <Container>
          <Row>
            <Col size="lg-2 sm-12">
              <Navbar />
            </Col>
            <Col size="9">
              <Col size="12">
                <h2>About Me</h2>
                <hr />
                <img src={Headshot} className="bio-imgs" alt="headshot" />

                <p>
                  {" "}
                  Hello, my name is Shelby Palumbo and I am an aspiring Full
                  Stack Developer!
                </p>
              </Col>

              <p>
                &nbsp;&nbsp; &nbsp;&nbsp; Since 2014, I have worked in the
                professional audio industry as a Diamond Series Microphone
                Technician for
                <a
                  href="https://www.telefunken-elektroakustik.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Telefunken Elektroakustik.
                </a>
                While I have enjoyed my time as a technician, I started to feel
                unsatisfied and understimulated with my work.
              </p>
              <p>
                &nbsp;&nbsp; &nbsp;&nbsp;About a year ago, I decided to take a
                look back on some of my old web development projects from
                college and I was immediately drawn back in. I started classes
                through Coursera, watching tutorials, and then I stumbled upon
                the UCONN coding bootcamp!
                <img className="cat-imgs" src={Cats} alt="Loui and Mina" />
              </p>
              <p>
                &nbsp;&nbsp; &nbsp;&nbsp;This program has shown me that web
                development is the right path for me. While there is still so
                much left for me to learn, I find the challenge of an ever
                changing feild and lifelong learning exciting!
              </p>
              <p>
                &nbsp;&nbsp; &nbsp;&nbsp;I now have experience with{" "}
                <strong style={style.fontColor}>
                  React, MongoDB, MySql, Node.js, Express.js, JavaScript, HTML,
                  and CSS.
                </strong>
              </p>
              <p>
                {" "}
                &nbsp;&nbsp; &nbsp;&nbsp;These days you'll find me locked in on
                a computer screen, drinking coffee, and spending time with my
                two cats, Mina and Loui.
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

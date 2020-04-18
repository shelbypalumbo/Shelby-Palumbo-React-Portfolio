import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import me_lester from "../images/techImages/me&lester.jpg";
import techImages from "../techImages.js";
import Img from "../components/Img";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Jumbotron from "../components/Jumbotron";

class Tech extends Component {
  state = {
    techImages
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <Wrapper>
          <Container>
            <Row>
              <Col size="lg-2 sm-12">
                <Navbar />
              </Col>
              <Col size="lg-10 sm-12">
                <h2 className="text-left">
                  My Time as a Microphone Technician
                </h2>
                <hr />

                <div className="media">
                  <div className="media-body">
                    <p>
                      &nbsp; Since 2014, I have worked in the professional audio
                      industry as a Diamond Series Microphone Technician for{" "}
                      <a
                        rel="noopener noreferrer"
                        href="https://www.telefunken-elektroakustik.com/"
                        target="_blank"
                      >
                        Telefunken Elektroakustik.
                      </a>
                      As a technician, I have gained many applicable skills in
                      maintaining technical hardware and managing a small team.
                      I am a skilled precision solder, I am qualified to operate
                      a lapping machine, sonic cleaners, power tools, table top
                      machinery, digital multimeters, oscilliscopes, calipers,
                      micrometers, etc.{" "}
                    </p>
                  </div>
                  <img
                    src={me_lester}
                    className="align-self-start mr-3 lester shadow"
                    alt="me and lester pup"
                  />
                </div>
              </Col>
            </Row>
            <hr />
            <Row>
              {this.state.techImages.map(techImgs => (
                <Img image={techImgs.image} />
              ))}
            </Row>
          </Container>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}
export default Tech;

import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import webDevProjects from "../webDevProjects.js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Jumbotron from "../components/Jumbotron";

class Design extends Component {
  state = {
    webDevProjects
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
                <h2>Web Development Projects</h2>
                <hr />
                <p>
                  Below are a few of my recent projects. Check out
                  <a
                    href="https://github.com/shelbypalumbo"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {" "}
                    my github profile
                  </a>{" "}
                  to view all of my work.
                </p>

                <Row>
                  {this.state.webDevProjects.map(projects => (
                    <Col size="md-6 sm-12">
                      <Card
                        key={projects.id}
                        image={projects.image}
                        card_title={projects.card_title}
                        card_text={projects.card_text}
                        technologies={projects.technologies}
                        project_repo={projects.project_repo}
                        deployed_project={projects.deployed_project}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default Design;

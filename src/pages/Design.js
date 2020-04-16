import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import webDevProjects from "../webDevProjects.json";

const style = {
  containerStyle: {
    height: "600px"
  }
};

class Design extends Component {
  // Setting this.state.webDevProjects to the webDevProjects json array
  state = {
    webDevProjects
  };

  render() {
    return (
      <Container style={style.containerStyle}>
        <h2>Web Development Projects</h2>
        <hr />
        <Row>
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
        </Row>
        {/* {this.state.webDevProjects.map(images => ( */}
        {/* <img src={require("../images/employeeDirectory.png")} /> */}
        {/* ))} */}
        <Row>
          {this.state.webDevProjects.map(projects => (
            <Col size="md-4 sm-12">
              <Card
                id={projects.id}
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
      </Container>
    );
  }
}

export default Design;

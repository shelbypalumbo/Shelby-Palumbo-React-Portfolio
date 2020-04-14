import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import webDevProjects from "../webDevProjects.json";
import { Link } from "react-router-dom";

const style = {
    containerStyle: {
        height: 500
    },
    cardMargin: {
        marginBottom: 10
    }
}

class Design extends Component {
    // Setting this.state.webDevProjects to the webDevProjects json array
    state = {
        webDevProjects
    };

    render() {
        return (
            <Container style={style.containerStyle} className="overflow-auto">

                <h2>Web Development Projects</h2>
                <hr></hr>
                <Row>
                    <p>Below are a few of my recent projects. Check out
                        <Link to="https://github.com/shelbypalumbo" target="_blank"> my github profile</Link> to view all of
                                my work.
                    </p>
                </Row>

                <Row style={style.cardMargin}>
                    {this.state.webDevProjects.map(projects => (
                        <Col size="col-md-4 col-sm-12">
                            <Card
                                id={projects.id}
                                image={projects.image}
                                card_title={projects.card_title}
                                card_text={projects.card_text}
                                project_repo={projects.project_repo}
                                deployed_project={projects.deployed_project}
                            />
                        </Col>))}
                </Row>
            </Container>
        );
    }
}

export default Design;
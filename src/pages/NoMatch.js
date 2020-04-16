import React, { Component } from "react";

// import { render } from "@testing-library/react";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";

class NoMatch extends Component {
  componentDidMount() {
    this.props.history.push({
      pathname: "/"
    });
  }
  render() {
    return <div></div>;
  }
}
export default NoMatch;

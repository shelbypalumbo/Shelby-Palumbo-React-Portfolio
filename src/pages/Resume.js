import React from "react";
import ReactDOM from "react-dom";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import Resumepdf from "../images/Shelby_Palumbo_New_Resume.pdf";
import createReactClass from "create-react-class";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Jumbotron from "../components/Jumbotron";

function SPResume() {
  const style = {
    resumeStyle: {
      width: "100%",
      height: "450px"
    }
  };
  var Resume = createReactClass({
    render() {
      return (
        <iframe style={style.resumeStyle} title="resume" src={Resumepdf} />
      );
    },
    componentDidMount() {
      this.renderFrameContents();
    },
    renderFrameContents() {
      var doc = ReactDOM.findDOMNode(this).contentDocument;
      if (doc.readyState === "complete") {
        ReactDOM.render(this.props.children, doc.body);
      } else {
        setTimeout(this.renderFrameContents, 0);
      }
    },
    componentDidUpdate() {
      this.renderFrameContents();
    },
    componentWillUnmount() {
      ReactDOM.unmountComponentAtNode(
        ReactDOM.findDOMNode(this).contentDocument.body
      );
    }
  });
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
              <h2>My Resume</h2>
              <hr />
              <Resume />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default SPResume;

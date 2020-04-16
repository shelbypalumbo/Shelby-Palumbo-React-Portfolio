import React from "react";
import ReactDOM from "react-dom";
import Container from "../components/Container";
// import Row from "../components/Row";
import Resumepdf from "../images/Shelby_Palumbo_Resume.pdf";
import createReactClass from "create-react-class";

function SPResume() {
  const style = {
    resumeStyle: {
      width: "100%",
      height: "450px"
    }
  };
  var Resume = createReactClass({
    render: function () {
      return (
        <iframe style={style.resumeStyle} title="resume" src={Resumepdf} />
      );
    },
    componentDidMount: function () {
      this.renderFrameContents();
    },
    renderFrameContents: function () {
      var doc = ReactDOM.findDOMNode(this).contentDocument;
      if (doc.readyState === "complete") {
        ReactDOM.render(this.props.children, doc.body);
      } else {
        setTimeout(this.renderFrameContents, 0);
      }
    },
    componentDidUpdate: function () {
      this.renderFrameContents();
    },
    componentWillUnmount: function () {
      React.unmountComponentAtNode(
        ReactDOM.findDOMNode(this).contentDocument.body
      );
    }
  });
  return (
    <Container>
      <h2>My Resume</h2>
      <hr />
      <Resume />
    </Container>
  );
}

export default SPResume;

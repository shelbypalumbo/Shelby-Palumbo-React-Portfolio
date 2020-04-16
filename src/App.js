import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Cover from "./pages/Cover";
import About from "./pages/About";
import Design from "./pages/Design";
import Tech from "./pages/Tech";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Jumbotron />
        <Navbar />
        <Wrapper>
          {/* <Route exact path="/cover" component={Cover} /> */}
          <Route exact path="/" component={About} />
          <Route path="/About" component={About} />
          <Route path="/Design" component={Design} />
          <Route path="/Tech" component={Tech} />
          <Route path="/Resume" component={Resume} />
          <Route path="/Contact" component={Contact} />
          {/* <Route component={NoMatch} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

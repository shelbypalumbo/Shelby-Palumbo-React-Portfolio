import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cover from "./pages/Cover";
import About from "./pages/About";
import Design from "./pages/Design";
import Tech from "./pages/Tech";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";


function App() {
  return (
    <Router>
      <div>
        <Jumbotron></Jumbotron>
        <Navbar />
        <Wrapper>
          <Route exact path="/cover" component={Cover} />
          <Route exact path="/about" component={About} />
          <Route exact path="/design" component={Design} />
          <Route exact path="/tech" component={Tech} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

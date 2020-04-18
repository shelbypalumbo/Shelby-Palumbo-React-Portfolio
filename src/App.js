import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Cover from "./pages/Cover";
import About from "./pages/About";
import Design from "./pages/Design";
import Tech from "./pages/Tech";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
// import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Jumbotron />
        <Wrapper>
          {/* <Route
            exact
            path="/shelbypalumbo/Shelby-Palumbo-React-Portfolio"
            component={Cover}
          /> */}
          <Route
            exact
            path="/shelbypalumbo/Shelby-Palumbo-React-Portfolio"
            component={About}
          />
          <Route exact path="/About" component={About} />
          <Route exact path="/Design" component={Design} />
          <Route exact path="/Tech" component={Tech} />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/Contact" component={Contact} />
          {/* <Route component={NoMatch} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

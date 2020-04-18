import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cover from "./pages/Cover";
import About from "./pages/About";
import Design from "./pages/Design";
import Tech from "./pages/Tech";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/Shelby-Palumbo-React-Portfolio" component={Cover} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Design" component={Design} />
        <Route exact path="/Tech" component={Tech} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Contact" component={Contact} />
        {/* <Route component={NoMatch} /> */}
      </div>
    </Router>
  );
}

export default App;

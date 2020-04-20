import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cover from "./pages/Cover";
import About from "./pages/About";
import Design from "./pages/Design";
import Tech from "./pages/Tech";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  console.log("hello");
  return (
    <Router>
      <Switch>
        <Route exact path="/Shelby-Palumbo-React-Portfolio" component={Cover} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Design" component={Design} />
        <Route exact path="/Tech" component={Tech} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;

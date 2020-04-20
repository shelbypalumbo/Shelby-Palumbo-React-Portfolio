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
        <Route exact path="/" component={Cover} />
        <Route path="/About" component={About} />
        <Route path="/Design" component={Design} />
        <Route path="/Tech" component={Tech} />
        <Route path="/Resume" component={Resume} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;

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
        <Route exact path="/Shelby-Palumbo-React-Portfolio" component={About} />
        <Route path="/Shelby-Palumbo-React-Portfolio/About" component={About} />
        <Route
          path="/Shelby-Palumbo-React-Portfolio/Design"
          component={Design}
        />
        <Route path="/Shelby-Palumbo-React-Portfolio/Tech" component={Tech} />
        <Route
          path="/Shelby-Palumbo-React-Portfolio/Resume"
          component={Resume}
        />
        <Route
          path="/Shelby-Palumbo-React-Portfolio/Contact"
          component={Contact}
        />
      </Switch>
    </Router>
  );
}

export default App;

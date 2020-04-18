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
        <Route
          exact
          path="/Shelby-Palumbo-React-Portfolio/About"
          component={About}
        />
        <Route
          exact
          path="/Shelby-Palumbo-React-Portfolio/Design"
          component={Design}
        />
        <Route
          exact
          path="/Shelby-Palumbo-React-Portfolio/Tech"
          component={Tech}
        />
        <Route
          exact
          path="/Shelby-Palumbo-React-Portfolio/Resume"
          component={Resume}
        />
        <Route
          exact
          path="/Shelby-Palumbo-React-Portfolio/Contact"
          component={Contact}
        />
        {/* <Route component={NoMatch} /> */}
      </div>
    </Router>
  );
}

export default App;

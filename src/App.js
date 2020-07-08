import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import LandingPages from "pages/LandingPages";
import Example from "pages/Example";
import Example2 from "pages/Example2";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPages}></Route>
        <Route exact path="/example" component={Example}></Route>
        <Route exact path="/example2" component={Example2}></Route>
      </Router>
    </div>
  );
}

export default App;

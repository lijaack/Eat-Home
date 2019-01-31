import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BusinessProfile from "./pages/BusinessProfile";
//import Saved from "./pages/Saved";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={BusinessProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

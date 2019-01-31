import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BusinessProfile from "./pages/BusinessProfile";
import CreateVendorProfile from "./pages/CreateVendorProfile"
//import Saved from "./pages/Saved";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={BusinessProfile} />
          <Route exact path="/vendor" component={CreateVendorProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

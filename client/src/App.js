
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BusinessProfile from "./pages/BusinessProfile";
import CreateVendorProfile from "./pages/CreateVendorProfile"
//import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import React, { Component } from 'react';
import Login from './pages/login';
import Signup from './pages/signup';
import Test from './pages/test';

import Nav from './components/Nav'
import LandingMiddle from './components/LandingMiddle'



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={BusinessProfile} />
          <Route exact path="/vendor" component={CreateVendorProfile} />
          <Route exact path="/" component={Test} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/landing" component={LandingMiddle}/> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

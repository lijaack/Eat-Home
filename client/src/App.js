
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BusinessProfile from "./pages/BusinessProfile";
import CreateVendorProfile from "./pages/newVendor/CreateVendorProfile"
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home/home';
import Nav from './components/Nav'
import LandingMiddle from './components/LandingMiddle'



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/newvendor" component={CreateVendorProfile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/landing" component={LandingMiddle}/>
          <Route component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

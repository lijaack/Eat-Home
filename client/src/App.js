import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
import Test from './pages/test';



function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Test} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/books/:id" component={Signup} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

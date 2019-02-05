import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//components
import {NavUser, Nav} from './components/Nav';
import LandingMiddle from './components/LandingMiddle';
//utils
import API from "./utils/API";
//pages
import Restaurants from './pages/restaurants/restaurants';
import Restaurant from './pages/restaurant/restaurant';
import CreateMenu from './pages/CreateMenu/CreateMenu';
import BusinessProfile from "./pages/BusinessProfile";
import CreateVendorProfile from "./pages/newVendor/CreateVendorProfile"
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home/home';


class App extends Component {
  state={
    login: false
  }
  componentDidMount(){
    API.getUser().then(res => {
      this.setState({login: res.data});
    });

  }


  render(){
    //checks if user is logged in
    if(this.state.login){
      return(
        <div>
        <NavUser/>
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/newvendor" component={CreateVendorProfile} />
              <Route exact path="/createmenu" component={CreateMenu}/>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/landing" component={LandingMiddle}/>
              <Route exact path="/restaurants" component={Restaurants}/>
              <Route path="/restaurant/:restaurant" component = {Restaurant}/>
              <Route component={Home} />
            </Switch>
        </Router>
        </div>

      )
    }

    //route access restricted to the following routes if user is not logged in
    else {
      return(
      <div>
      <Nav/>
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/restaurants" component={Restaurants}/>
            <Route exact path="/createmenu" component={CreateMenu}/>
            {/* <Route exact path="/newvendor" component={CreateVendorProfile} /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route exact path="/landing" component={LandingMiddle}/> */}
            <Route component={Home} />
          </Switch>
      </Router>
    </div>

    )
  }
}
}

export default App;
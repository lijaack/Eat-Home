import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BusinessProfile from "./pages/BusinessProfile";
import CreateVendorProfile from "./pages/newVendor/CreateVendorProfile"
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home/home';
import {NavUser, Nav} from './components/Nav';
import LandingMiddle from './components/LandingMiddle';
import API from "./utils/API";
import Restaurants from './pages/restaurants/restaurants';
import CreateMenu from './components/CreateMenu';



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
        <Router>
          <div>
            <NavUser/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/newvendor" component={CreateVendorProfile} />
              <Route exact path="/createmenu" component={CreateMenu}/>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/landing" component={LandingMiddle}/>
              <Route exact path="/restaurants" component={Restaurants}/>
              <Route component={Home}/>
            </Switch>
          </div>
        </Router>
      )
    }

    //route access restricted to the following routes if user is not logged in
    return(
      <Router>
        <div>
          <Nav />
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
        </div>
      </Router>
    )
  }
      
}

export default App;
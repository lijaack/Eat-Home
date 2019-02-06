import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
//<<<<<<< HEAD
//import RestaurantProfile from "./pages/restaurantProfile/restaurantProfile";
//import CreateVendorProfile from "./pages/newVendor/CreateVendorProfile"
//=======
=======
import RestaurantProfile from "./pages/restaurantProfile/restaurantProfile";
import CreateVendorProfile from "./pages/newVendor/CreateVendorProfile"
>>>>>>> 043d8d88304827b9ea88c5492281fc1fc70d99a3
//components
import {NavUser, Nav} from './components/Nav';
import LandingMiddle from './components/LandingMiddle';
//utils
import API from "./utils/API";
//pages
import Restaurants from './pages/restaurants/restaurants';
import Restaurant from './pages/restaurant/restaurant';
import CreateMenu from './pages/CreateMenu';
import BusinessProfile from "./pages/BusinessProfile";
import MyRestaurant from "./pages/myRestaurant"
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home/home';
import axios from 'axios';


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
    let login=this.state.login;
<<<<<<< HEAD
      return(
        <div>
        {login ? <NavUser/>: <Nav/>}
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              {login ? <Route exact path="/myrestaurant" component={MyRestaurant} />: ""}
              {login ? <Route exact path="/createmenu" component={CreateMenu}/>: ""}
              {login ? "": <Route exact path="/login" component={Login} />}
              {login ? "": <Route exact path="/signup" component={Signup} />}
              <Route exact path="/landing" component={LandingMiddle}/>
              <Route exact path="/restaurants" component={Restaurants}/>
              <Route exact path="/restaurant/:id" component = {Restaurant}/>
              <Route component={Home} />
            </Switch>
        </Router>
        </div>

      )

=======
    return(
      <div>
      {login ? <NavUser/>: <Nav/>}
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {login ? <Route exact path="/myrestaurant" component={MyRestaurant} />: ""}
            {login ? <Route exact path="/createmenu" component={CreateMenu}/>: ""}
            {login ? "": <Route exact path="/login" component={Login} />}
            {login ? "": <Route exact path="/signup" component={Signup} />}
            <Route exact path="/landing" component={LandingMiddle}/>
            <Route exact path="/restaurants" component={Restaurants}/>
            <Route exact path="/restaurant/:id" component = {Restaurant}/>
            <Route component={Home} />
          </Switch>
      </Router>
      </div>

    ) 
>>>>>>> 043d8d88304827b9ea88c5492281fc1fc70d99a3
  }
}

export default App;
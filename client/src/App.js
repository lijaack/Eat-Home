import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import RestaurantProfile from "./pages/restaurantProfile/restaurantProfile";
import CreateVendorProfile from "./pages/newVendor/CreateVendorProfile"
=======
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
import MyRestaurant from "./pages/myRestaurant"
>>>>>>> dc98debfc42acfb353001d54f1922085b4ce1723
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
    let login=this.state.login;
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

<<<<<<< HEAD
    //route access restricted to the following routes if user is not logged in
    return(
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={RestaurantProfile} />
            <Route exact path="/restaurants" component={Restaurants}/>
            { <Route exact path="/newvendor" component={CreateVendorProfile} /> }
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route exact path="/landing" component={LandingMiddle}/> */}
            <Route component={Home} />
          </Switch>
        </div>
      </Router> 
    )
=======
>>>>>>> dc98debfc42acfb353001d54f1922085b4ce1723
  }
}

export default App;
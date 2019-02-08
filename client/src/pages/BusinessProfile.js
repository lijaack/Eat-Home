//imports
import Jumbotron from "../components/Jumbotron";
import React, { Component } from "react";
import Slider from "react-slick";
import { Col} from "../components/Grid";
import API from "../utils/API";


//Profile page shows 1 restaurant
//state 
class Profile extends Component {
    state = {
        restaurantName: "",
        image: "",
        address: "",
        menuImages: []
    };

    //api call to get restaurant info and change state
    getRestaurant = () => {
        API.getRestaurant({})

        //this.state.restaurantName = response.restaurant
        //this.state.image = response.image
        //this.state.address = resoponse.address
        //this.state.menuImages = response.menuImages
    }

//render
render() {
    var settings = {
        autoplay: true,
        autoplayspeed: 1000,
    };

    return (
        <div>
        <section className = "restaurant name">
        <Jumbotron height="100"> 
            <h1> Restaurant Name</h1>
        </Jumbotron>
        <Jumbotron height= "500">
         
          <Col size="md-12" >
            <Slider {...settings}> 
               <h4> Menu 1</h4>
               <h4> Menu 2</h4>
             </Slider>
            </Col>
        </Jumbotron>
        
           <Col size = "md-12">
           <Jumbotron height = "500"> 
            <h3>Contact Info </h3>
            <p> 
               1000 Spear Street 
               San Francisco, CA 95001
            </p>
           </Jumbotron>
           </Col>
           </section>
      
        </div>
    )}
}

export default Profile;
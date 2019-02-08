//imports
import Jumbotron from "../../components/Jumbotron";
import React, { Component } from "react";
import Slider from "react-slick";
import { Col, Row, Container} from "../../components/Grid";
//import Images from "../components/Images"
import API from "../../utils/API";
//import "./style.css"


//Profile page shows 1 restaurant
//state 
class restaurantProfile extends Component {
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
        <div className="jumbotron jumboimg text-center" > 
                    <h1 className="text-light"> Restaurant Name</h1>
                    </div>
        </section>
        <section className = "menu">
        <Jumbotron height= "500">
          <Col size="md-12" >
            <Slider {...settings}> 
               <h4> Menu 1</h4>
               <h4> Menu 2</h4>
             </Slider>
            </Col>
        </Jumbotron>
        </section>
        
           <Col size = "md-12">
           <Jumbotron height = "500"> 
            <h3>Contact Info </h3>
            <p> 
               1000 Spear Street 
               San Francisco, CA 95001
            </p>
           </Jumbotron>
           </Col>
     
      
        </div>
    )}
}

export default restaurantProfile;
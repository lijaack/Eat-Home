//imports
import Jumbotron from "../components/Jumbotron";
import React, { Component } from "react";
import Slider from "react-slick";
import { Col, Row, Container} from "../components/Grid";
import Images from "../components/Images"


//Profile page shows 1 restaurant
//state 
class Profile extends Component {
    state = {
        businessName: "",
    };

//render
render() {
    var settings = {
        autoplay: true,
        autoplayspeed: 1000,
    };

    return (
        <div>
        <Jumbotron height="100"> 
            <h1> Business Name</h1>
        </Jumbotron>
        <Jumbotron height= "500">
         
          <Col size="md-12" >
            <Slider {...settings}>
                <Images source = "https://media-cdn.tripadvisor.com/media/photo-s/04/c1/7f/35/wining-dining.jpg"> </Images>
                <Images source = "https://i.pinimg.com/originals/0a/d9/be/0ad9be2e14017412035d71d571dffde5.jpg"> </Images>
                <Images source = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqP1oYWAkbc2GY_KZL12DuFwQ3RNxck4zsdGRnbUVl4lx1dZ7"> </Images>
             </Slider>
            </Col>
        </Jumbotron>
        
        <Row>
           <Col size = "md-6">
           <Jumbotron height = "500"> 
            <ol>
                <li> Menu Item 1 </li>
                <li> Menu Item 2</li>
            </ol>
           </Jumbotron>
           </Col>
           <Col size = "md-6">
           <Jumbotron height = "500"> 
            <h3>Contact Info </h3>
            <p> 
               1000 Spear Street 
               San Francisco, CA 95001
            </p>
           </Jumbotron>
           </Col>
        </Row>
        </div>
    )}
}

export default Profile;
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
        license: "",
        password: "",
        About: "",
        Photos: "",
    };

//render

//onsubmit change state....



render() {
    return (
    <Container fluid>
        <Jumbotron height="100"> 
        <h1> Vendor Create Profile</h1>
        </Jumbotron>
        <Col size = "md-6">
        <Jumbotron height="100"> 
        <h1> Vendor Create Profile</h1>
        </Jumbotron>


     
        </Col>

    </Container>
    )}
}

export default Profile;
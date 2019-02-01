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
        about: "",
        photo: ""
    };

handleFormSubmit = event => {
    //api call to post info to database to database


    //Empty the text fields
    this.setState({
        businessName: "",
        license: "",
        about: "",
        photo: ""
      });
}

handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

render() {
    return (
    <Container fluid>
        <Jumbotron height="100"> 
        <h1> Vendor Create Profile</h1>
        </Jumbotron>
        <Row>
        <Col size = "md-6">
        <Jumbotron height="100"> 
        <form className="form">
        <Row>
        <input
            value={this.state.businessName}
            name="businessName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Business Name"
          />
          </Row>
          <Row>
           <input
            value={this.state.license}
            name="license"
            onChange={this.handleInputChange}
            type="text"
            placeholder="License #"
          />
          </Row>
         </form>
        </Jumbotron> 
        </Col>
        <Col size = "md-6">
        <Jumbotron height="100">
        <Row>
        <input
            value={this.state.about}
            name="about"
            onChange={this.handleInputChange}
            type="text area"
            placeholder="About"
          />
          </Row>
          <Row>
        <input
            value={this.state.photo}
            name="photo"
            onChange={this.handleInputChange}
            type="text area"
            placeholder="photo"
          />
          </Row>
        </Jumbotron>
        </Col>
        </Row>
        <Row>
            <Col size = "md-12"> 
            <button onClick={this.handleFormSubmit}>Submit</button>
           </Col>
        </Row>

    </Container>
    )}
}

export default Profile;
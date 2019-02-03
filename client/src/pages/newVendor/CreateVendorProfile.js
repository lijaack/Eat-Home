//imports
import Jumbotron from "../../components/Jumbotron";
import React, { Component } from "react";
import Slider from "react-slick";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Col, Row, Container} from "../../components/Grid";
import Images from "../../components/Images";
import "./style.css";


//Profile page shows 1 restaurant
//state 
class Profile extends Component {

    state = {
        restaurantName: "",
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
            <section className="vendor-section">
                <Container>
                    <h1>
                        Create your restaurant
                    </h1>
                    <form className="form">
                    <label for="restaurantName">Restaurant Name:</label>
                    <Input
                        value={this.state.restaurantName}
                        name="restaurantName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Business Name"
                    />
                    <label for="about">About:</label>
                    <Input
                        value={this.state.about}
                        name="about"
                        onChange={this.handleInputChange}
                        type="text area"
                        placeholder="About"
                    />
                    <label for="photo">Photo:</label>
                    <Input
                        value={this.state.photo}
                        name="photo"
                        onChange={this.handleInputChange}
                        type="text area"
                        placeholder="photo"
                    />
                    </form>
                    <button type="button" className="btn btn-success" onClick={this.handleFormSubmit}>Submit</button>
                </Container>
            </section>
        )
    }
}

export default Profile;
//imports
import Jumbotron from "../../components/Jumbotron";
import React, { Component } from "react";
import Slider from "react-slick";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Col, Row, Container} from "../../components/Grid";
import Images from "../../components/Images";
import API from "../../utils/API";


//Profile page shows 1 restaurant
//state 
class Profile extends Component {

    state = {
        restaurantName: "",
        about: "",
        image: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
        [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
    
        if (this.state.restaurantName && this.state.about && this.state.image) {
        API.createVendor({
            name: this.state.restaurantName,
            about: this.state.about,
            image: this.state.image
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }

        //Empty the text fields
        this.setState({
            businessName: "",
            about: "",
            image: ""
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
                        rows="4"
                        placeholder="About"
                    />
                    <label for="image">Image:</label>
                    <Input
                        value={this.state.image}
                        name="image"
                        onChange={this.handleInputChange}
                        type="text area"
                        placeholder="Image"
                    />
                    </form>
                    <button type="button" className="btn btn-success" onClick={this.handleFormSubmit}>Submit</button>
                </Container>
            </section>
        )
    }
}

export default Profile;
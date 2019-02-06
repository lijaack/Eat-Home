import Jumbotron from "../../components/Jumbotron";
import React, { Component } from "react";
import Slider from "react-slick";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Col, Row, Container} from "../../components/Grid";
import Images from "../../components/Images";
import API from "../../utils/API";
import "./style.css";

//Profile page shows 1 restaurant
//state 
class Profile extends Component {

    state = {
        user:[]
     
    };
    componentDidMount(){
        API.getUser().then(res => {
          this.setState({user: res.data});
          console.log(this.state.user.Restaurant.id)
        });
    }
  

    handleFormSubmit = event => {
        event.preventDefault();
        // if (this.state.restaurantName && this.state.about && this.state.image && this.state.address) {
        // API.createVendor({
        //     name: this.state.restaurantName,
        //     about: this.state.about,
        //     address: this.state.address,
        //     image: this.state.image,
        //     UserId: this.state.user.id
        // })
        //     .then(res =>{
        //         this.setState({
        //         businessName: "",
        //         about: "",
        //         image: ""
        //         })
        //     })
        //     .catch(err => console.log(err));
        // }

        //Empty the text fields
        
    }

    render() {
        return(
            <Container>
                <Row>
                <h1>Menu</h1>
                <a href="/createmenu">(+ Add)</a>
                </Row>
            </Container>
        )
    }
}

export default Profile;
import React, { Component } from "react";
import {Container} from "../Grid";
import { Input} from "../Form";
import API from "../../utils/API";
import "./style.css";

class Profile extends Component {

  state = {
      user:[],
      restaurantName: "",
      about: "",
      image: "",
      address:""
  };
  componentDidMount(){
      API.getUser().then(res => {
          console.log(res.data)
        this.setState({user: res.data});
      });
  
  }
  handleInputChange = event => {
      const { name, value } = event.target;

      this.setState({
      [name]: value
      });
  }

  handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.restaurantName && this.state.about && this.state.image && this.state.address) {
      API.createVendor({
          name: this.state.restaurantName,
          about: this.state.about,
          address: this.state.address,
          image: this.state.image,
          UserId: this.state.user.id
      })
          .then(res =>{
              this.setState({
              businessName: "",
              about: "",
              image: ""
              })
          })
          .catch(err => console.log(err));
      }

      //Empty the text fields
      
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
                   <label for="address">Address:</label>
                  <Input
                      value={this.state.address}
                      name="address"
                      onChange={this.handleInputChange}
                      type="text area"
                      rows="4"
                      placeholder="Address"
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
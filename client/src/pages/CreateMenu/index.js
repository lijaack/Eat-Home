//imports
import Jumbotron from "../../components/Jumbotron";
import React, { Component } from "react";
import Slider from "react-slick";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Col, Row, Container } from "../../components/Grid";
import Images from "../../components/Images";
import API from "../../utils/API";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import InputGroup from 'react-bootstrap/InputGroup';
// import React from 'react';
import { Button, Form, FormGroup, Label, FormText } from 'reactstrap';


//Profile page shows 1 restaurant
//state 
class CreateMenu extends Component {

  state = {
    user: [],
    name: "",
    ingredient: "",
    price: "",
    image: ""
  };
  componentDidMount() {
    API.getUser().then(res => {
      this.setState({ user: res.data });
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
    console.log("1")
    if (this.state.name && this.state.ingredient && this.state.price && this.state.image) {
      API.createItem({
        name: this.state.name,
        ingredient: this.state.ingredient,
        price: this.state.price,
        image: this.state.image,
        RestaurantId: this.state.user.Restaurant.id
      })
        .then(res => {
          window.location.href = "/myrestaurant"
        })
        .catch(err => console.log(err));
    }

    //Empty the text fields

  }


  render() {
    return (
      <Container>
        <Form className="col-md-4">
          <FormGroup>
            <Label for="name">Item</Label>
            <Input type="text" name="name" id="name" onChange={this.handleInputChange} placeholder="pizza" />
          </FormGroup>


          <FormGroup>
            <Label for="ingredient">Ingredient List</Label>
            <Input type="text" name="ingredient" id="ingredient" onChange={this.handleInputChange} placeholder="flour, water, sauce, cheese" />
          </FormGroup>


          <FormGroup>
            <Label for="price">Price</Label>
            <Input type="textarea" name="price" onChange={this.handleInputChange} id="price" />
          </FormGroup>

          <FormGroup>
            <Label for="image">Item Photo URL</Label>
            <Input type="text" name="image" onChange={this.handleInputChange} id="image" placeholder="http://lorempixel.com/output/food-q-c-640-480-3.jpg" />
          </FormGroup>

          <Button color="success" onClick={this.handleFormSubmit}>Submit</Button>
        </Form>
      </Container>
    );
  }
} export default CreateMenu;
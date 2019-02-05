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
    restaurantName: "",
    about: "",
    image: "",
    address: ""
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
    if (this.state.restaurantName && this.state.about && this.state.image && this.state.address) {
      API.createVendor({
        name: this.state.restaurantName,
        about: this.state.about,
        address: this.state.address,
        image: this.state.image,
        UserId: this.state.user.id
      })
        .then(res => {
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

    // import React from 'react';
    // import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
    
    // export default class CreateMenu extends React.Component {
  render() {
    return (
      <Form className="col-md-4">
        <FormGroup>
          <Label for="menuItem">Menu Item</Label>
          <Input type="text" name="menuItem" id="menuItem" placeholder="pizza" />
        </FormGroup>


        <FormGroup>
          <Label for="ingredientList">Ingredient List</Label>
          <Input type="text" name="ingredientList" id="ingredientList" placeholder="flour, water, sauce, cheese" />
        </FormGroup>


        <FormGroup>
          <Label for="menuItemWriteup">Menu Item Writeup</Label>
          <Input type="textarea" name="text" id="menuItemWriteup" />
        </FormGroup>

        <FormGroup>
          <Label for="Item Photo">Item Photo URL</Label>
          <Input type="text" name="photoURL" id="photoURL" placeholder="http://lorempixel.com/output/food-q-c-640-480-3.jpg" />
        </FormGroup>


        <FormGroup>
          <Label for="exampleFile">Upload Photo</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            If you have a photo of this item upload it here.
              </FormText>
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
} export default CreateMenu;
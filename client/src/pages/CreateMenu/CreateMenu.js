//imports
import Jumbotron from "../../components/Jumbotron";
import React, { Component } from "react";
import Slider from "react-slick";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Col, Row, Container} from "../../components/Grid";
import Images from "../../components/Images";
import API from "../../utils/API";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';


//Profile page shows 1 restaurant
//state 
class CreateMenu extends Component {

    state = {
        user:[],
        restaurantName: "",
        about: "",
        image: "",
        address:""
    };
    componentDidMount(){
        API.getUser().then(res => {
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

            <Form className>
              <InputGroup className="md-3">
         
          <Form.Group controlId="menuItem" >
            <Form.Label>Menu Item</Form.Label>
            <Form.Control type="menuItem" placeholder="Enter Menu Item Name" />
            <Form.Text className="text-muted">
              Enter Menu Item Above
            </Form.Text>
          </Form.Group>
           
        
          <Form.Group controlId="menuItemIngredients">
            <Form.Label>Menu Item Ingredients</Form.Label>
            <Form.Control type="menuItemIngredients" placeholder="Enter Menu Item Ingredient list" />
            <Form.Text className="text-muted">
              Enter Ingredients
            </Form.Text>
          </Form.Group>
        
          
          <Form.Group controlId="menuItemPrice">
            <Form.Label>Menu Item Ingredients</Form.Label>
            <Form.Control type="menuItemPrice" placeholder="Enter Menu Item Price" />
            <Form.Text className="text-muted">
              Enter Ingredients
            </Form.Text>
          </Form.Group>
        
        
          <Form.Group controlId="menuItemImg">
            <Form.Label>Menu Item Image</Form.Label>
            <Form.Control type="menuItemImg" placeholder="http://www.linktoimage" />
            <Form.Text className="text-muted">
              Enter a link to image
            </Form.Text>
          </Form.Group>
        
        
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </InputGroup>
        </Form>
          
          );
        }
        
        
}

export default CreateMenu;
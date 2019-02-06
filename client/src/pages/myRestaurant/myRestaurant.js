import Jumbotron from "../../components/Jumbotron";
import React, { Component } from "react";
import Slider from "react-slick";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Col, Row, Container} from "../../components/Grid";
import Images from "../../components/Images";
import API from "../../utils/API";
import MenuItem from "../../components/MenuItem";

import "./style.css";

//Profile page shows 1 restaurant
//state 
class Profile extends Component {

    state = {
        user:[],
        food:[]
     
    };
    componentDidMount(){
        API.getUser().then(res => {
          this.setState({user: res.data});
            API.getFoodRestaurant({
                RestaurantId:res.data.Restaurant.id
            }).then(res =>{
                this.setState({food: res.data});
            });
        });
      
    }
  

    handleFormSubmit = event => {
        event.preventDefault();
        
    }

    render() {
        let food = this.state.food

        return(
            
            <Container>
                <Row>
                <h1>Menu</h1>
                <a href="/createmenu">(+ Add)</a>
                </Row>
                <Row>
                    {food.map(food =>
                    <Col size="3" key={food.id}>
                    <MenuItem id={food.id} restaurantid={food.RestaurantId} photos={food.image} name={food.name} price={food.price} ingredient={food.ingredient}/>
                    </Col>
                    )}    
                </Row>
            </Container>
        )
    }
}

export default Profile;
import API from "../../utils/API";
import React, { Component } from "react";
import { Col, Row, Container} from "../../components/Grid";
import MenuItem from "../../components/MenuItem";
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

class Restaurants extends Component {
  state = {
      food:[],
      name: '',
      address: '',
  };

  componentDidMount(){
    API.getRestaurant({
      id: this.props.match.params.id
    }).then(res => { 
        console.log(res.data);
        this.setState({food: res.data.Food,
                      name: res.data.name,
                      address: res.data.address})
    });
  }


  render() {
    let food = this.state.food
    return (
        <div>
        <div className="jumbotron  text-center" > 
            <h1 className=""> {this.state.name}</h1>
            <br></br>
        </div>

        <Container>
        <Row>
            <Col size="10">
                <Row>
                  {food.map(food =>
                  <Col size="4" key={food.id}>
                  <MenuItem id={food.id} restaurantid={food.RestaurantId} photos={food.image} name={food.name} price={food.price} ingredient={food.ingredient}/>
                  </Col>
                  )}    
                </Row>
            </Col>
            <Col size="2">
      <ListGroup>
        <ListGroupItem>{this.state.name}</ListGroupItem>
        <ListGroupItem>{this.state.address}</ListGroupItem>
        <ListGroupItem>Phone Number</ListGroupItem>
      </ListGroup>
                
            </Col>
        </Row>
        </Container>                
    </div>
    );
  }
}

export default Restaurants;

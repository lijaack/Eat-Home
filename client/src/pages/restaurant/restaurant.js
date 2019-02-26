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
      about: '',
  };

  componentDidMount(){
    API.getRestaurant({
      id: this.props.match.params.id
    }).then(res => { 
        console.log(res.data);
        this.setState({food: res.data.Food,
                      name: res.data.name,
                      address: res.data.address,
                      about: res.data.about})
    });
  }


  render() {
    let food = this.state.food
    return (
        <div>
        <div className="jumbotron  text-center" > 
            <h1 className=""> {this.state.name}</h1>
            <br></br>
            <p> {this.state.about}</p>
        </div>

        <Container>
        <Row>
            <Col size="9">
                <Row>
                  {food.map(food =>
                  <Col size="4" key={food.id}>
                  <MenuItem id={food.id} restaurantid={food.RestaurantId} photos={food.image} name={food.name} price={food.price} ingredient={food.ingredient}/>
                  </Col>
                  )}    
                </Row>
            </Col>
            <Col size="3">
      <ListGroup>
        <ListGroupItem><strong>Restaurant Info:</strong></ListGroupItem>
        <ListGroupItem>{this.state.address}</ListGroupItem>
        <ListGroupItem>(555)-555-5555</ListGroupItem>
        <ListGroupItem>60 Meals Left!</ListGroupItem>
        <ListGroupItem><a href="">My Story</a></ListGroupItem>
        <ListGroupItem>Rating: ☺☺<span>&#x263A;</span></ListGroupItem>


      </ListGroup>
                
            </Col>
        </Row>
        </Container>                
    </div>
    );
  }
}

export default Restaurants;

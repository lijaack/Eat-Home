import API from "../../utils/API";
import React, { Component } from "react";
import { Col, Row, Container} from "../../components/Grid";
import MenuItem from "../../components/MenuItem";


class Restaurants extends Component {
  state = {
      food:[]
  };

  componentDidMount(){
    console.log(this.props.match.params.id)
    API.getRestaurant({
      id: this.props.match.params.id
    }).then(res => { 
        this.setState({food: res.data.Food})
    });
  }


  render() {
    let food = this.state.food
    return (
        <div>
        <div className="jumbotron  text-center" > 
            <h1 className=""> Menu</h1>
            <br></br>
        </div>

        <Container>
            <Row>
              {food.map(food =>
              <Col size="3" key={food.id}>
              <MenuItem id={food.id} restaurantid={food.RestaurantId} photos={food.image} name={food.name} price={food.price} ingredient={food.ingredient}/>
              </Col>
              )}    
            </Row>
        </Container>                
    </div>
    );
  }
}

export default Restaurants;

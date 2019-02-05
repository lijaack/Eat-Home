import API from "../../utils/API";
import React, { Component } from "react";
import { Col, Row, Container} from "../../components/Grid";
import RestaurantCard from "../../components/RestaurantCard";


class Restaurants extends Component {
  state = {
      restaurants:[],
      location: ""
  };

  componentDidMount(){
    API.getRestaurant({
      id: this.props.match.params.id
    }).then(res => {
        console.log(res.data)
        this.setState({restaurants: res.data})
    });
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
  };

  render() {
      let restaurants = this.state.restaurants
    return (
        <div>
        <div className="jumbotron  text-center" > 
            <h1 className=""> Menu</h1>
            <br></br>
        </div>

        <Container>
            <Row>
           
            </Row>
        </Container>                
    </div>
    );
  }
}

export default Restaurants;

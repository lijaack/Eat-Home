import API from "../../utils/API";
import React, { Component } from "react";
import { Col, Row, Container} from "../../components/Grid";
import RestaurantCard from "../../components/RestaurantCard";
import "./style.css"


class Restaurants extends Component {
  state = {
      restaurants:[]
  };

  componentDidMount(){
    API.getRestaurants().then(res => {
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
    
    // if (this.state.username && this.state.password && this.state.name) {
    //   API.signUp({
    //       username: this.state.username,
    //       password: this.state.password,
    //       name: this.state.name
    //   })
    //       .then(res => console.log(res))
    //       .catch(err => console.log(err));
    // }
  };

  render() {
      let homes = this.state.restaurants
    return (
        <div>
        <div className="jumbotron jumboimg text-center" > 
            <h1 className="text-light"> Choose a Location</h1>
            <br></br>
        </div>

        <Container>
            <Row>
               
                  {homes.map(home =>
                    <Col size="4">
                    <RestaurantCard id={home.id} photos={home.photos} name={home.name} description={home.description} />
                    </Col>
                    )}       
            </Row>
        </Container>                
    </div>
    );
  }
}

export default Restaurants;

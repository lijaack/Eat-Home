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
        this.setState({restaurants: res})
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
    
    if (this.state.username && this.state.password && this.state.name) {
      API.signUp({
          username: this.state.username,
          password: this.state.password,
          name: this.state.name
      })
          .then(res => console.log(res))
          .catch(err => console.log(err));
    }
  };

  render() {
    return (
        <div>
        <div className="jumbotron jumboimg text-center" > 
            <h1 className="text-light"> Eat Home</h1>
            <br></br>
            <div id="sign-up"><a href="/signup" class="btn btn-success">Sign Up</a></div>
        </div>

        <Container>
            <Row>
                <Col size="4">
                    <RestaurantCard/>
                </Col>
            </Row>
        </Container>                
    </div>
    );
  }
}

export default Restaurants;

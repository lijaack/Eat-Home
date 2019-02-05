import API from "../../utils/API";
import React, { Component } from "react";
import { Col, Row, Container} from "../../components/Grid";
import RestaurantCard from "../../components/RestaurantCard";
import "./style.css"


class Restaurants extends Component {
  state = {
      restaurants:[],
      location: ""
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
  visitPage(event){
    console.log(event.target.dataset.id)
    window.location.href = "/restaurant/" + event.target.dataset.id
  }
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
      let restaurants = this.state.restaurants
    return (
        <div>
        <div className="jumbotron jumboimg text-center" > 
            <h1 className="text-light"> Choose a Location</h1>
            <br></br>
            <form type="text"></form>
        </div>

        <Container>
            <Row>
               
                  {restaurants.map(restaurants =>
                    <Col size="4" key={restaurants.id}>
                    <RestaurantCard id={restaurants.id} photos={restaurants.image} name={restaurants.name} about={restaurants.about} visitPage={this.visitPage}/>
                    </Col>
                  )}       
            </Row>
        </Container>                
    </div>
    );
  }
}

export default Restaurants;

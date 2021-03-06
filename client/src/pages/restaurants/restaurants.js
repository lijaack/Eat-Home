import API from "../../utils/API";
import React, { Component } from "react";
import { Col, Row, Container} from "../../components/Grid";
import RestaurantCard from "../../components/RestaurantCard";
import "./style.css"
import { Input } from "../../components/Form";


class Restaurants extends Component {
  state = {
      restaurants:[],
      location: ""
  };

  componentDidMount(){
    API.getRestaurants().then(res => {
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
    window.location.href = "/restaurant/" + event.target.dataset.id
  }


  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.location){
      API.getRestaurantsCity({
        address: this.state.location
      })
          .then(res => this.setState({restaurants: res.data}))
          .catch(err => console.log(err));
    }
    
  };

  render() {
      let restaurants = this.state.restaurants
    return (
        <div>
        <div className="jumbotron neighborhoodimg text-center" > 
            <Row>
              <Col size="4"></Col>
              <Col size="4">
              <form className="searchLocation">
                  <label for="location"><h1 className="text-light"> Choose a Location</h1></label>
                  <br/>
                  <Input
                          value={this.state.location}
                          name="location"
                          onChange={this.handleInputChange}
                          type="text"
                          placeholder="location"
                    />
                  <button type="button" className="btn btn-success searchBtn" onClick={this.handleFormSubmit}>Search Location</button>
              </form>
              </Col>
              <Col size="4"></Col>
            </Row>
        </div>

        <Container>
            <Row>
               
                  {restaurants.map(restaurants =>
                    <Col size="3" key={restaurants.id}>
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

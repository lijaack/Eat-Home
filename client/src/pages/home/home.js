//imports
import React, { Component } from "react";
import { Col, Row, Container} from "../../components/Grid";
import "./style.css"
import axios from "axios";
import RestaurantCard from "../../components/RestaurantCard";
import FoodCard from "../../components/FoodCard";

import PlacesSearch from "../../components/PlacesSearch";
import API from "../../utils/API";

//state 
class Home extends Component {
    state={
        login: false,
        restaurants: [],
        food: [],
        place: '',
    }

    componentDidMount(){
        API.getUser().then(res => {
          this.setState({login: res.data});
        });
        
        API.getRestaurants().then(res =>{
            this.setState({restaurants: res.data});
        });

        API.getAllFood().then(res =>{
            this.setState({food: res.data});
        });
        
    }
    visitPage(event){
        window.location.href = "/restaurant/" + event.target.dataset.id
    }

    getHomes = e => {
        console.log("getting homes")
        console.log("current location:" + this.state.place);
        let city = this.state.place.split(",")
        city = city[1].trim();
        console.log("Current city: " + city);
        API.getRestaurantsCity({city}).then(res =>{
            this.setState({restaurants: res.data})
                .catch(err => console.log(err));
;
        })
//        const API_KEY = process.env.REACT_APP_GOOGLEMAP_API_KEY
//        axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}")
//            .then(res =>
//                  this.setState({ location: res.data }))
    }
    
    showPlaceDetails(place) {
    //console.log(place);
    this.setState({ place });
  }
    



    
    render() {
        let restaurants = this.state.restaurants
        let food = this.state.food

        return (
            <div>
                <div className="jumbotron jumboimg text-center" > 
                    <h1 className="text-light"> Eat Home</h1>
                    <br></br>
                    {!this.state.login ? <div id="sign-up"><a href="/signup" className="btn btn-success">Sign Up</a></div>:""}
                    <form className="searchLocation" >
                                <h1 className="text-light">Start Finding Your Chef</h1>

                   <PlacesSearch onPlaceChanged={this.showPlaceDetails.bind(this)}/>
                    <button type="button" className="btn btn-success searchBtn" onClick={this.getHomes}>Search for a meal</button>
                    </form>
         
                </div>
    
                <Container>
                    <Row>
                        <Col size="4">
                        <div className="text-center">
                            <img src={require('./images/order.png')} alt="order" style={{width:"100px"}}></img>
                            <h5>Order your meal</h5>
                            <p>Find a meal that you like, and place your order!</p>
                        </div>
                        </Col>
                        <Col size="4">
                        <div className="text-center">                  
                            <img src={require('./images/cook.png')} alt="cook" style={{width:"100px"}}></img>
                            <h5>Wait for your meal to be cooked</h5>
                            <p>A chef will prepare your home cooked meal.</p>
                        </div>
                        </Col>
                        <Col size="4">
                        <div className="text-center">                  

                            <img src={require('./images/pickup.png')} alt="pick up" style={{width:"100px"}}></img>
                            <h5>Pick up your order!</h5>
                            <p>When the chef is done, you will get a message letting you know. Simply go and pick up your order.</p>
                        </div>
                        </Col>
                    </Row>
                    
                    <h2 className="text-center">Popular Meals</h2>
                    <Row>
                    {food.map(food =>
                    <Col size="3" key={food.id}>
                    <FoodCard id={food.id} restaurantid={food.RestaurantId} photos={food.image} name={food.name} price={food.price} ingredient={food.ingredient} visitPage={this.visitPage}/>
                    </Col>
                    )}    
                        
                    </Row>
                    <h2 className="text-center">Popular Restaurants</h2>
                    <Row>
                    {restaurants.map(restaurants =>
                    <Col size="3" key={restaurants.id}>
                    <RestaurantCard id={restaurants.id} photos={restaurants.image} name={restaurants.name} about={restaurants.about} visitPage={this.visitPage}/>
                    </Col>
                    )}    
                
                        
                    </Row>


                </Container>                
            </div>
        )
    }
}

export default Home;
//imports
import React, { Component } from "react";
import { Col, Row, Container} from "../../components/Grid";
import "./style.css"
import axios from "axios";
import RestaurantCard from "../../components/RestaurantCard";
import FoodCard from "../../components/FoodCard";
import Alert from "../../components/Alert";
import PlacesSearch from "../../components/PlacesSearch";
import API from "../../utils/API";

//state 
class Home extends Component {
    constructor(props){
        super(props)
        this.myRef=null    
        this.state={
            login: false,
            restaurants: [],
            food: [],
            place: '',
            visible: true,
        };
            this.showAlert = this.showAlert.bind(this);

    }

    componentDidMount(){
        API.getUser().then(res => {
          this.setState({login: res.data});
        });
        
        API.getRestaurants().then(res =>{
            this.setState({restaurants: res.data});
        });

        API.getAllFood().then(res =>{
            let foods = res.data;
            foods = foods.slice(0,8)
            this.setState({food: foods});
        });
        
    }
    visitPage(event){
        window.location.href = "/restaurant/" + event.target.dataset.id
    }

    getHomes = e => {
        console.log("getting homes")
        console.log("current location:" + this.state.place);
        if(this.state.place){
            let city = this.state.place.split(",");
            city = city[1].trim();
            console.log("Current city: " + city);
            API.getRestaurantsCity({address: city}).then(res =>{
            this.setState({restaurants: res.data})
                this.state.restaurants.length > 0 ? this.scrollToMyRef() : this.showAlert(); console.log("No nearby homes!");
        })}
    }
    
    showPlaceDetails(place) {
    //console.log(place);
        this.setState({ place });
    }

    scrollToMyRef = () => window.scrollTo({
        top: this.myRef.offsetTop, 
        behavior: 'smooth'
    })
  showAlert() {
    this.setState({ visible: true });
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
                <Alert toggle={this.showAlert}/>
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
                    
                    <h2 className="text-center popular">Popular Meals</h2> <hr></hr>
                    <Row>
                    {food.map(food =>
                    <Col size="3" key={food.id}>
                    <FoodCard id={food.id} restaurantid={food.RestaurantId} photos={food.image} name={food.name} price={food.price} ingredient={food.ingredient} visitPage={this.visitPage}/>
                    </Col>
                    )}    
                        
                    </Row>
            <div ref={ (ref) => this.myRef=ref }></div>
                    <h2 className="text-center popular">Popular Restaurants</h2> <hr></hr>
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
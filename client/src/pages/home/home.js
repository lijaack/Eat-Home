//imports
import React, { Component } from "react";
import { Col, Row, Container} from "../../components/Grid";
import "./style.css"
import RestaurantCard from "../../components/RestaurantCard";
import API from "../../utils/API";

//state 
class Home extends Component {
    state={
        login: false,
        restaurants: []
    }

    componentDidMount(){
        API.getUser().then(res => {
          this.setState({login: res.data});
        });
        
        API.getRestaurants().then(res =>{
            this.setState({restaurants: res.data});
        });
    
    }


    
    render() {
   let homes = this.state.restaurants
        return (
            <div>
                <div className="jumbotron jumboimg text-center" > 
                    <h1 className="text-light"> Eat Home</h1>
                    <br></br>
                    {!this.state.login ? <div id="sign-up"><a href="/signup" class="btn btn-success">Sign Up</a></div>:""}
            <Row>
                        <Col size="4"/>
                        <Col size="4">  
                        <div className="text-center">
                        <form className="searchLocation">
                            <input type="location" name="location"></input>
                            <button type="button" className="btn btn-success searchBtn">Search for a meal</button>
                        </form>
                        </div>
                        </Col>
                        <Col size="4"/>
            </Row>
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
                    {homes.map(home =>
                    <Col size="4">
                    <RestaurantCard id={home.id} photos={home.photos} name={home.name} description={home.description} />
                    </Col>
                    )}    
                
                        
                    </Row>

                </Container>                
            </div>
        )
    }
}

export default Home;
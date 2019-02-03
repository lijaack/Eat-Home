//imports
import Jumbotron from "../../components/Jumbotron";
import React, { Component } from "react";
import { Col, Row, Container} from "../../components/Grid";
import "./style.css"

//state 
class Home extends Component {
    state = {
        businessName: "",
    };

//render
    render() {
    
        return (
            <div>
                <div className="jumbotron jumboimg text-center" > 
                    <h1 className="text-light"> Eat Home</h1>
                    <br></br>
                    <button type="button" className="btn btn-success">Sign up</button>
                </div>
    
                <Container>
                    <Row>
                        <Col size="md-4">
                            <img src={require('./images/order.png')} alt="order" style={{width:"100px"}}></img>
                            <h5>Order your meal</h5>
                            <p>Find a meal that you like, and place your order!</p>
                        </Col>
                        <Col size="md-4">
                            <img src={require('./images/cook.png')} alt="cook" style={{width:"100px"}}></img>
                            <h5>Wait for your meal to be cooked</h5>
                            <p>A chef will prepare your home cooked meal.</p>

                        </Col>
                        <Col size="md-4">
                            <img src={require('./images/pickup.png')} alt="pick up" style={{width:"100px"}}></img>
                            <h5>Pick up your order!</h5>
                            <p>When the chef is done, you will get a message letting you know. Simply go and pick up your order.</p>

                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-5"/>
                        <Col size="md-2">                    
                            <button type="button" className="btn btn-success">Search for a meal</button>
                        </Col>
                        <Col size="md-5"/>
                    </Row>
                    <h2 className="text-center">Popular Meals</h2>
                    <Row>
                        
                    </Row>




                </Container>                
            </div>
        )
    }
}

export default Home;
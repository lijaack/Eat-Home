//imports
import React, { Component } from "react";
import { Col, Row, Container} from "../../components/Grid";
import "./style.css"
import API from "../../utils/API";

//state 
class Home extends Component {
    state={
        login: false
    }

    componentDidMount(){
        API.getUser().then(res => {
          this.setState({login: res.data});
        });
        
        API.getRestaurants().then(res =>{
            console.log(res.data);
        });
    
    }


    
    render() {

        return (
            <div>
                <div className="jumbotron jumboimg text-center" > 
                    <h1 className="text-light"> Eat Home</h1>
                    <br></br>
                    {!this.state.login ? <div id="sign-up"><a href="/signup" class="btn btn-success">Sign Up</a></div>:""}
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
                    <Row>
                        <Col size="4"/>
                        <Col size="4">  
                        <div className="text-center">                  
                            <button type="button" className="btn btn-success">Search for a meal</button>
                        </div>
                        </Col>
                        <Col size="4"/>
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
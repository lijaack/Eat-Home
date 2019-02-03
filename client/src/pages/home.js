//imports
import Jumbotron from "../../components/Jumbotron";
import React, { Component } from "react";
import { Col, Row, Container} from "../components/Grid";
import Images from "../components/Images"


//state 
class Home extends Component {
    state = {
        businessName: "",
    };

//render
    render() {
    
        return (
            <div>
                <Jumbotron className=""> 
                    <h1> Business Name</h1>
                </Jumbotron>
    
                
                <Row>
                <Col size = "md-6">
                <Jumbotron height = "500"> 
                    <ol>
                        <li> Menu Item 1 </li>
                        <li> Menu Item 2</li>
                    </ol>
                </Jumbotron>
                </Col>
                <Col size = "md-6">
                <Jumbotron height = "500"> 
                    <h3>Contact Info </h3>
                    <p> 
                    1000 Spear Street 
                    San Francisco, CA 95001
                    </p>
                </Jumbotron>
                </Col>
                </Row>
            </div>
        )
    }
}

export default Home;
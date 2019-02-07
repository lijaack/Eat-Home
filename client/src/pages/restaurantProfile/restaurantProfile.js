//imports
import Jumbotron from "../../components/Jumbotron";
import React, { Component } from "react";
import Slider from "react-slick";
import { Col, Row, Container} from "../../components/Grid";
//import Images from "../components/Images"
import API from "../../utils/API";
import "./style.css"


//Profile page shows 1 restaurant
//state 
class restaurantProfile extends Component {
    state = {
        restaurantName: "",
        image: "",
        address: "",
        about: "",
        menu: []
    };

    //api call to get restaurant info and change state
    componentDidMount(){
        console.log("id " +this.props.match.params.id)
        API.getRestaurant({
          id: parseInt(this.props.match.params.id)
        }).then(res => { 
            this.setState({restaurantName:res.data.name,
                            image: res.data.image,
                            address:res.data.address,
                            about:res.data.about})
    
          console.log(res.data)
           // this.setState({food: res.data.Food})
        });

        API.getFoodRestaurant({
            id: parseInt(this.props.match.params.id)
          }).then(res => { 
    
            console.log(res.data)
              this.state.menu = res.data.map(val => val.name)
              console.log("MENU"+this.state.menu)
              
          });
          
      }

//render
render() {
    var settings = {
        autoplay: true,
        autoplayspeed: 1000,
    };

    return (
        <div>
        <section className = "restaurant name">
        <div className="jumbotron jumboimg text-center" > 
                    <h1 className="text-light"> Restaurant Name: {this.state.restaurantName}</h1>
                    <h1 className="text-light"> About: {this.state.about}</h1>
                    <img src ={this.state.image} height = "250"/>
                    </div>
                   
        </section>
        <section className = "menu">
        <Jumbotron height= "500">
          <Col size="md-12" >
            <Slider {...settings}> 
            
              
               <h4> {this.state.menu[0]} </h4>
               <h4> {this.state.menu[1]} </h4>
               <h4> {this.state.menu[0]} </h4>
             </Slider>
            </Col>
        </Jumbotron>
        </section>
        
           <Col size = "md-12">
           <Jumbotron height = "500"> 
            <h3>Contact Info </h3>
            <p> 
               {this.state.address}
            </p>
           </Jumbotron>
           </Col>
     
        </div>
    )}
}

export default restaurantProfile;
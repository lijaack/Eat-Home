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
        menuImages: []
    };

    //api call to get restaurant info and change state
    getRestaurant = () => {
        API.getRestaurants().then(res => {
            console.log("Restaurants!")
           console.log(res.data)
           this.setState({restaurantName: res.data[0].name,
                            about: res.data[0].about,
                           address: res.data[0].address,
                           image: res.data[0].image});
        })
    }
    

//render
render() {
    var settings = {
        autoplay: true,
        autoplayspeed: 1000,
    };

    return (
        <div>
        {this.getRestaurant()}
        <section className = "restaurant name">
        <div className="jumbotron jumboimg text-center" > 
                    <h1 className="text-light"> Restaurant Name: {this.state.restaurantName}</h1>
                    <h1 className="text-light"> About: {this.state.about}</h1>
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwcCXzHm_pgt4Zm75tp159ZtrsbPDk_5QZvJY8olgAtzf1YZh" />
                    </div>
                   
        </section>
        <section className = "menu">
        <Jumbotron height= "500">
          <Col size="md-12" >
            <Slider {...settings}> 
               <h4> Menu 1</h4>
               <h4> Menu 2</h4>
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
//imports
import Jumbotron from "../../components/Jumbotron";
import React, { Component } from "react";
import Slider from "react-slick";
import { Col} from "../../components/Grid";
//import Images from "../components/Images"
import API from "../../utils/API";
//import "./style.css"


//Profile page shows 1 restaurant
//state 
class restaurantProfile extends Component {
    state = {
        restaurantName: "",
        image: "",
        address: "",
        menuImages: []
    };

    //api call to get restaurant info and change state
<<<<<<< HEAD
    componentDidMount(){
        console.log("id " +this.props.match.params.id)
        API.getRestaurant({
          id: parseInt(this.props.match.params.id)
        }).then(res => {
            console.log('12345654321234565432123456543212345')
            console.log(res)
            this.setState({restaurantName:res.data.name,
                            image: res.data.image,
                            address:res.data.address,
                            about:res.data.about},
                            () => {
                                console.log(this.props.match.params.id)
                                API.getFoodRestaurant({
                                        id: parseInt(this.props.match.params.id)
                                    }).then(res => { 
                                        console.log(res.data)
                                        this.setState({menu: res.data.map(val => val.name)})
                                        console.log("MENU"+this.state.menu)
                                        
                                    });
                            })
    
          console.log(res.data)
           // this.setState({food: res.data.Food})
        });
      }
=======
    getRestaurant = () => {
        API.getRestaurant({})

        //this.state.restaurantName = response.restaurant
        //this.state.image = response.image
        //this.state.address = resoponse.address
        //this.state.menuImages = response.menuImages
    }
>>>>>>> e1536c8b28ceffc521fa78c11dd045f69beefcb0

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
                    <h1 className="text-light"> Restaurant Name</h1>
                    </div>
        </section>
        <section className = "menu">
        <Jumbotron height= "500">
          <Col size="md-12" >
            <Slider {...settings}> 
<<<<<<< HEAD
            {this.state.menu.length > 0 ? this.state.menu.map(item => <h4>{item}</h4>) : <h4>hi</h4>}
=======
               <h4> Menu 1</h4>
               <h4> Menu 2</h4>
>>>>>>> e1536c8b28ceffc521fa78c11dd045f69beefcb0
             </Slider>
            </Col>
        </Jumbotron>
        </section>
        
           <Col size = "md-12">
           <Jumbotron height = "500"> 
            <h3>Contact Info </h3>
            <p> 
               1000 Spear Street 
               San Francisco, CA 95001
            </p>
           </Jumbotron>
           </Col>
     
      
        </div>
    )}
}

export default restaurantProfile;
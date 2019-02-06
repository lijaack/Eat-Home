import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";
import CreateRestaurant from "./createRestaurant";
import MyResaurant from "./myRestaurant"

//Profile page shows 1 restaurant
//state 
class Profile extends Component {

    state = {
        user:[]
     
    };
    componentDidMount(){
        API.getUser().then(res => {
          this.setState({user: res.data});
        });
    }

    render() {
        if(!this.state.user.Restaurant){
            return(
                <CreateRestaurant/>
            )
        }else{
            return (             
                <MyResaurant
                id ={ this.state.user.Restaurant.id}

                />
            )
        }
    }
}

export default Profile;
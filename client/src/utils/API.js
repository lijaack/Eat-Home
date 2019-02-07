import axios from "axios";

export default {
  getUser: ()=>{
    return axios.get("/account", ()=>{
    })
  },
  login: (data)=>{
    return axios.post("/login", data)
  },
  // creates a new user
  signUp: (newuser) =>{
    return axios.post("/signup", newuser)
  },
  signOut: ()=>{
    return axios.get("/signout")
  },
  //creates a new vendor
  createVendor: vendor => {
    return axios.post("/newvendor", vendor)
  },
  getRestaurants:()=>{
    return axios.get("/api/restaurants")
  },
  getRestaurant:(data)=>{
    console.log(data)
    return axios.get("/api/restaurant/" + data.id)
  },
  getRestaurantsCity:(city)=>{
    return axios.get("/api/restaurants/city",city)
  },
  createItem:(item)=>{
    return axios.post("/newitem",item)
  },
  getAllFood:()=>{
    return axios.get("/api/menu/all")
  },
  getFoodRestaurant:(data)=>{
    
    return axios.get("/api/menu/" +data.id)
  }

};

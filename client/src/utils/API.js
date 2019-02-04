import axios from "axios";

export default {
  getUser: ()=>{
    console.log("hello")
    return axios.get("/account", ()=>{
      console.log("done")
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
    console.log("signing out")
    return axios.get("/signout")
  },
  //creates a new vendor
  createVendor: vendor => {
    return axios.post("/newvendor", vendor)
  },
  getRestaurants:()=>{
    return axios.get("/api/restaurants")
  }

};

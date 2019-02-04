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
  signUp: function(newuser) {
    console.log("hello")
    return axios.post("/signup", newuser)
  },
  signOut: function(){
    console.log("signing out")
    return axios.get("/signout")
  },
  //creates a new vendor
  createVendor: vendor => {
    return axios.post("/newVendor", vendor)
  }

};

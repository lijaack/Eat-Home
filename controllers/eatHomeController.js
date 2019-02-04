const db = require("../models");

module.exports = app => {
    app.get("/account", (req,res)=>{
        if(req.user){
            console.log(req.user)
            res.json(req.user);
        } else{
            res.json(false);
        };
    })

    app.get("/api/restaurants", (req,res) =>{
        console.log("finding user location and appending local spots")
        db.Restaurant.findAll(

        ).then(result => {
            res.json(result)
        })
    });

    app.post("/newvendor", (req,res) => {
        db.Restaurant.create(
            req.body
        ).then(
            console.log("vendor created")
        )
    })

   
        
};

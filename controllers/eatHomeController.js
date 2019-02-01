const db = require("../models");

module.exports = app => {

    app.post("/signup", function(req,res){
        console.log("hello")
        db.User.create(
            req.body
        ).then(function(data) {
            console.log("data")
        });
    }); 

    app.get("/api/books",function(req,res){
        console.log("finding user location and appending local spots")
        db.Restaurant.findAll({ 
            where: { location: "IP location, please add"}
        }).then(restaurants => {
            //return restaurants local to the area

        })
    });
        
        
    app.post("/api/books",function(req,res){
        
    })

};

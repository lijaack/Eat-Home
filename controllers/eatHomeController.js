const db = require("../models");

module.exports = app => {
    app.get("/api/Restaurant", (req,res) =>{
        console.log("finding user location and appending local spots")
        db.Restaurant.findAll({ 
            where: { location: "IP location, please add"}
        }).then(restaurants => {
            //return restaurants local to the area
            
        })
    });

    app.post("/newVendor", (req,res) => {
        db.Restaurant.create(
            req.body
        ).then(

        )
    })

   
        
};

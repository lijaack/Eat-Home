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

    app.get("/api/Restaurant", (req,res) =>{
        console.log("finding user location and appending local spots")
        db.Restaurant.findAll({ 
             where: { id: [1,2,3] } 
//            where: { location:  }
        }).then(restaurants => {
            console.log("returning restaurants")
            console.log(restaurants[0].photos);
        })
    });

    app.post("/newVendor", (req,res) => {
        db.Restaurant.create(
            req.body
        ).then(

        )
    })

   
        
};

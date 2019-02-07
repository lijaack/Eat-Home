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
        
        db.Restaurant.findAll(
        ).then(result => {
            res.json(result)
        })
    });
    app.post("/api/restaurants/city", (req,res) =>{
        db.Restaurant.findAll({
            where: req.body
        }).then(result => {
            console.log(result)
            res.json(result)
        })
    });
    app.get("/api/restaurant/:id", (req,res) =>{
        db.Restaurant.findOne({
            where: {id:req.params.id}
        }).then(result => {
            res.json(result)
        })
    });

    app.post("/newvendor", (req,res) => {
        console.log("hi")

        db.Restaurant.create(
            req.body
        ).then(
            console.log("vendor created")
        )
    })

    app.get("/api/menu/:id", (req,res) =>{
        db.Food.findAll({
            where: {RestaurantId:req.params.id}
        }).then(result => {
            res.json(result)
        })
    })


   
        
};

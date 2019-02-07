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
        console.log("Restaurant called")
        db.Restaurant.findAll(
        ).then(result => {
            res.json(result)
        })
    });
    app.get("/api/restaurants/city", (req,res) =>{
        db.Restaurant.findAll({
            where: req.body
        }).then(result => {
            res.json(result)
        })
    });
    app.get("/api/restaurant", (req,res) =>{

        db.Restaurant.findOne({
            where: req.body
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

   
        
};

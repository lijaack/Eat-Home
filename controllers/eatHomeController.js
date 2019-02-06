const db = require("../models");

module.exports = app => {
    app.get("/account", (req,res)=>{
        if(req.user){
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
    app.get("/api/restaurants/city", (req,res) =>{
        db.Restaurant.findAll({
            where: req.body
        }).then(result => {
            res.json(result)
        })
    });
    app.get("/api/restaurant", (req,res) =>{
        console.log(req.body)
        db.Restaurant.findOne({
            where: req.body,
            include: [{
                model: db.Food
            }]
           
        }).then(result => {
            res.json(result)            
        })
    });
    app.get("/api/menu/all", (req,res) =>{
        db.Food.findAll({
        }).then(result => {
            res.json(result)
        })
    });
    app.get("/api/menu/id", (req,res) =>{
        db.Food.findAll({
            where: req.body
        }).then(result => {
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
    app.post("/newitem", (req,res) => {
        db.Food.create(
            req.body
        ).then(
            console.log("food created")
        )
    })

   
        
};

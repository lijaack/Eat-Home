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
    app.get("/api/restaurant/:id", (req,res) =>{
        console.log(req.params.id)
        db.Restaurant.findOne({
            where: {
                id: req.params.id
            },
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
        console.log("hi")

        db.Restaurant.create(
            req.body
        ).then(result=> {
            res.json(result)
        })
    })
    app.post("/newitem", (req,res) => {
        db.Food.create(
            req.body
        ).then(result=> {
            res.json(result)
        })
    })

   
        
};

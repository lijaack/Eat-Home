const db = require("../models");

module.exports = app => {

    app.post("/api/books", function(req,res){
        console.log("hello")
        db.User.create({
        }).then(function(data) {
            console.log("data")
        });
    }); 

    app.findAll("/api/books",function(req,res){
        console.log("finding user location and appending local spots")
        db.Restaurant.findAll({ where: 
                               { location: "IP location, please add"}})
            .then(restaurants =>
                  //return restaurants local to the area
                 )
                  });
        
        
        app.post("/api/books",function(req,res){
            
        })




                //        const db = require("../models");
                //
                //        // Defining methods for the booksController
                //        module.exports = {
                //            findAll: function(req, res) {
                //                db.Book
                //                    .find(req.query)
                //                    .sort({ date: -1 })
                //                    .then(dbModel => res.json(dbModel))
                //                    .catch(err => res.status(422).json(err));
                //            },
                //            findById: function(req, res) {
                //                db.Book
                //                    .findById(req.params.id)
                //                    .then(dbModel => res.json(dbModel))
                //                    .catch(err => res.status(422).json(err));
                //            },
                //            create: function(req, res) {
                //                db.Book
                //                    .create(req.body)
                //                    .then(dbModel => res.json(dbModel))
                //                    .catch(err => res.status(422).json(err));
                //            },
                //            update: function(req, res) {
                //                db.Book
                //                    .findOneAndUpdate({ _id: req.params.id }, req.body)
                //                    .then(dbModel => res.json(dbModel))
                //                    .catch(err => res.status(422).json(err));
                //            },
                //            remove: function(req, res) {
                //                db.Book
                //                    .findById({ _id: req.params.id })
                //                    .then(dbModel => dbModel.remove())
                //                    .then(dbModel => res.json(dbModel))
                //                    .catch(err => res.status(422).json(err));
                //            }
                //        };







                };

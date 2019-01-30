const db = require("../models");

module.exports = app => {
  
    app.post("/api/books", function(req,res){
        console.log("hello")
        db.User.create({
        }).then(function(data) {
            console.log("data")
        });
    }); 






















};

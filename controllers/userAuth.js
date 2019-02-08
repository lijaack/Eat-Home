var db = require("../models");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(app) {

    passport.use(new LocalStrategy(
        function( username, password, done) {            
            db.User.findOne({ where:{ username: username}}).then(function(user){  
                console.log(username);


                if (!user) {
                    console.log("Incorrect username")
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (!user.validPassword(password)) {
                    console.log("Incorrect password")
                    return done(null, false, { message: 'Incorrect password.' });
                }
                console.log("success")
                return done(null, user);
            });
        }
      ));
      passport.serializeUser(function(user, done) {
        console.log("serializeUser");
        done(null, user.id);
      });
    
      passport.deserializeUser(function(id, done) {
        console.log("deserializeUser");
        db.User.findOne({
            where: {id: id},
            include: [{
                model: db.Restaurant
            }]
        }).then(function(user){
            done(null, user);
        })
      });

    app.post('/login',  passport.authenticate('local'),
        function(req, res) {

            req.logIn(res.user, function (err) {
                res.json('/dashboard');
            })
        }
    );


    app.get('/signout', function(req, res){
        console.log("logging out")
        req.logout();
        res.redirect('/');
    })
    
    app.post("/signup", (req,res) => {
        console.log("hello")
        db.User.create(
            req.body
        ).then(data => {
            res.json('/')
        });

    }); 
    // app.use(passport.session());
    // function isAuthenticated(req,res,next){
    //     if(req.user)
    //        return next();
    //     else
    //        return res.status(401).json({
    //          error: 'User not authenticated'
    //        })
     
    //  }
     app.get('/checkauth', isAuthenticated, function(req, res){
     
         res.status(200).json({
             status: 'Login successful!'
         });
     });
};

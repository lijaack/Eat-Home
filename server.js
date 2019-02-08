const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');
const passport = require('passport');
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const app = express();
// app.use(cookieParser());
// var cookieParser = require('cookie-parser');

//enable cross origin
app.use(cors());


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//sets up app to use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(session({
  secret: 'secret',
  saveUninitialized:true,
  resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

// Global variables
app.use(function(req, res, next) {
  res.locals.user = req.user || null;
  next();
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // app.get('*', (request, response) => {
  //   response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  // });
}


// Routes
// =============================================================
require("./controllers/eatHomeController.js")(app);
require("./controllers/userAuth.js")(app);


// Requiring our models for syncing
const db = require("./models");


db.sequelize.sync({ force: false }).then(()=> {
  app.listen(PORT, ()=> {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});

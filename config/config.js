const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.restaurants = require('../models/restaurant.js')(sequelize, Sequelize);
 
 
module.exports = db;
//"use strict";
//var fs = require("fs");
//var path = require("path");
//const router = require("express").Router();
//const apiRoutes = require("../routes/api");
//const Sequelize = require("sequelize");
//var basename = path.basename(module.filename);
//var env = process.env.NODE_ENV || "development";
//var config = require(__dirname + "/../config/config.json")[env];
//var db = {};
//
//
//if (config.use_env_variable) {
//  var sequelize = new Sequelize(process.env[config.use_env_variable]);
//} else {
//  var sequelize = new Sequelize(config.database, config.username, config.password, config);
//}
//
//fs
//  .readdirSync(__dirname)
//  .filter(function(file) {
//    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
//  })
//  .forEach(function(file) {
//    var model = sequelize["import"](path.join(__dirname, file));
//    db[model.name] = model;
//  });
//
//Object.keys(db).forEach(function(modelName) {
//  if (db[modelName].associate) {
//    db[modelName].associate(db);
//  }
//});
//
//router.use("/api", apiRoutes);
//
//// If no API routes are hit, send the React app
//router.use(function(req, res) {
//  res.sendFile(path.join(__dirname, "../client/build/index.html"));
//});
//
//db.sequelize = sequelize;
//db.Sequelize = Sequelize;
//
//module.exports = db;
//module.exports = router;


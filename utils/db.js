'use strict';

var config   = require('configure'),
    mongoose = require('mongoose');

mongoose.connect(config.mongodb.server);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Connected with %s", config.mongodb.name);
});

module.exports = mongoose;
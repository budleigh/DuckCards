var mongoose = require("mongoose");
var url = process.env.MONGODB_URI || 'mongodb://localhost/appdb';

mongoose.connect(url);

var db = mongoose.connection;

module.exports = db;